import { data } from "react-router";
import type { ActionFunctionArgs } from "react-router";

// Define the shape of our form data for type safety
type ContactPayload = {
    nombre: string;
    empresa: string;
    email: string; // matches 'correo' concept but field name in JSON is email
    telefono: string;
    mensaje: string;
    productos: string[];
    website?: string; // Honeypot
};

export async function action({ request }: ActionFunctionArgs) {
    // 1. Origin Check
    const origin = request.headers.get("Origin");
    const allowedOrigins = [
        "https://verdantia.mx",
        "https://www.verdantia.mx",
        "http://localhost:5173", // Dev environment
        "http://localhost:3000",
    ];

    if (process.env.NODE_ENV === "production" && origin && !allowedOrigins.includes(origin)) {
        return data({ success: false, message: "Unauthorized origin" }, { status: 403 });
    }

    // 2. Parse JSON Input (Client sends JSON)
    let payload: ContactPayload;
    try {
        payload = await request.json();
    } catch (e) {
        return data({ success: false, message: "Invalid JSON" }, { status: 400 });
    }

    const { nombre, empresa, email, telefono, mensaje, productos, website } = payload;

    // 3. Honeypot Check
    if (website) {
        // Silently return success to fool bots
        return data({ success: true, message: "Mensaje enviado correctamente." });
    }

    // 4. Input Sanitization & Strict Validation

    // Helper to strip HTML tags
    const stripHtml = (str: string) => str ? str.replace(/<[^>]*>?/gm, "") : "";

    const cleanNombre = stripHtml(nombre)?.trim();
    const cleanEmpresa = stripHtml(empresa)?.trim();
    const cleanEmail = stripHtml(email)?.trim();
    const cleanTelefono = stripHtml(telefono)?.trim();
    const cleanMensaje = stripHtml(mensaje)?.trim();

    // Clean products array
    const cleanProductos = Array.isArray(productos)
        ? productos.map(p => stripHtml(p).trim()).filter(Boolean)
        : [];

    // Validate lengths
    if (!cleanNombre || cleanNombre.length < 2 || cleanNombre.length > 100) {
        return data({ success: false, message: "Nombre inválido." }, { status: 400 });
    }
    if (!cleanEmpresa || cleanEmpresa.length < 2 || cleanEmpresa.length > 100) {
        return data({ success: false, message: "Empresa inválida." }, { status: 400 });
    }
    if (!cleanMensaje || cleanMensaje.length < 10 || cleanMensaje.length > 2000) {
        return data({ success: false, message: "El mensaje debe tener entre 10 y 2000 caracteres." }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail) || cleanEmail.length > 254) {
        return data({ success: false, message: "Email inválido." }, { status: 400 });
    }

    // 5. Header Protection
    const subject = `Nuevo mensaje de ${cleanNombre} (${cleanEmpresa}) - Verdantia`;
    const safeSubject = subject.replace(/[\r\n]/g, " ");

    // 6. Server-Side Execution with Resend (Native Fetch)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("RESEND_API_KEY is missing");
        return data({ success: false, message: "Error de configuración del servidor." }, { status: 500 });
    }

    const emailList = [
        "francisco.a.verdantia@outlook.com",
        "marcelo.r.verdantia@outlook.com",
        "jorge.v.verdantia@outlook.com"
    ];

    try {
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                from: "Verdantia <noreply@verdantia.mx>",
                to: emailList,
                reply_to: cleanEmail,
                subject: safeSubject,
                html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Nuevo Mensaje de Verdantia</title>
</head>
<body style="font-family: sans-serif; background-color: #f4f4f4; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border-radius: 8px;">
    <h2 style="color: #0F1612; border-bottom: 2px solid #DBB75F; padding-bottom: 10px;">Nuevo Contacto Web</h2>
    
    <p><strong>Nombre:</strong> ${cleanNombre}</p>
    <p><strong>Empresa:</strong> ${cleanEmpresa}</p>
    <p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
    <p><strong>Teléfono:</strong> ${cleanTelefono || "No proporcionado"}</p>
    
    ${cleanProductos.length > 0 ? `
    <div style="margin: 20px 0;">
      <p><strong>Productos de Interés:</strong></p>
      <ul style="background-color: #f9f9f9; padding: 10px 20px; border-radius: 4px;">
        ${cleanProductos.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
    ` : ''}

    <div style="margin-top: 20px;">
      <p><strong>Mensaje:</strong></p>
      <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #DBB75F; white-space: pre-wrap;">${cleanMensaje}</div>
    </div>
    
    <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
    <p style="font-size: 12px; color: #888; text-align: center;">Este mensaje fue enviado desde el formulario de contacto de verdantia.mx</p>
  </div>
</body>
</html>
`,
            }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error("Resend API Error:", errorData);
            throw new Error("Error sending email via Resend");
        }

        return data({ success: true, message: "Mensaje enviado exitosamente." });

    } catch (error) {
        console.error("Contact form error:", error);
        return data({ success: false, message: "Error enviando el mensaje. Por favor intenta más tarde." }, { status: 500 });
    }
}

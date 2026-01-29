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
<body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
  <div style="width: 100%; background-color: #f4f4f4; padding: 40px 0;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      
      <!-- Header with Logo -->
      <div style="background-color: #0F1612; padding: 30px; text-align: center;">
        <img src="https://verdantia.mx/home-imgs/verdantia-logo.png" alt="Verdantia Logo" style="max-width: 180px; height: auto;">
      </div>

      <!-- Main Content -->
      <div style="padding: 40px 30px;">
        <h2 style="color: #0F1612; margin-top: 0; font-size: 22px; border-bottom: 2px solid #DBB75F; display: inline-block; padding-bottom: 8px;">Nuevo Contacto Web</h2>
        
        <p style="color: #555; font-size: 16px; line-height: 1.6; margin-top: 25px;">
          Has recibido una nueva consulta a través del sitio web. Aquí están los detalles:
        </p>

        <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; width: 120px;"><strong>Nombre:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${cleanNombre}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888;"><strong>Empresa:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${cleanEmpresa}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888;"><strong>Email:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${cleanEmail}" style="color: #DBB75F; text-decoration: none;">${cleanEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888;"><strong>Teléfono:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${cleanTelefono || "No proporcionado"}</td>
          </tr>
        </table>

        ${cleanProductos.length > 0 ? `
        <div style="margin-top: 30px;">
          <p style="color: #0F1612; font-weight: bold; margin-bottom: 10px;">Productos de Interés:</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #DBB75F;">
            <ul style="margin: 0; padding-left: 20px; color: #555;">
              ${cleanProductos.map(p => `<li style="margin-bottom: 5px;">${p}</li>`).join('')}
            </ul>
          </div>
        </div>
        ` : ''}

        <div style="margin-top: 30px;">
          <p style="color: #0F1612; font-weight: bold; margin-bottom: 10px;">Mensaje:</p>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; color: #555; line-height: 1.6; white-space: pre-wrap;">${cleanMensaje}</div>
        </div>

      </div>

      <!-- Footer -->
      <div style="background-color: #f4f4f4; padding: 20px; text-align: center; color: #999; font-size: 12px;">
        <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de verdantia.mx</p>
        <p style="margin: 5px 0 0;">&copy; ${new Date().getFullYear()} Verdantia. Todos los derechos reservados.</p>
      </div>

    </div>
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

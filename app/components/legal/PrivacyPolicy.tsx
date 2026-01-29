const PrivacyPolicy = () => {
    return (
        <div className="space-y-6 text-[#A1A1AA] leading-relaxed">
            <section>
                <h3 className="text-white text-lg font-bold mb-3">1. Identidad y Domicilio del Responsable</h3>
                <p>
                    Verdantia (en adelante, "la Empresa"), con domicilio en Av. Florencia #680-A, Res. Campestre, Irapuato, Gto. México, es responsable del tratamiento de sus datos personales.
                </p>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">2. Datos Personales que se Recaban</h3>
                <p>
                    Para las finalidades señaladas en el presente aviso, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente a través de nuestro formulario de contacto o cuando obtenemos información a través de otras fuentes que están permitidas por la ley.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Nombre completo</li>
                    <li>Correo electrónico</li>
                    <li>Teléfono de contacto</li>
                    <li>Empresa o giro comercial</li>
                    <li>Mensaje o comentarios adicionales</li>
                </ul>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">3. Finalidades del Tratamiento</h3>
                <p>Sus datos personales serán utilizados para las siguientes finalidades primarias:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Proveer los servicios y productos que ha solicitado.</li>
                    <li>Notificarle sobre nuevos productos o servicios que tengan relación con los ya contratados o adquiridos.</li>
                    <li>Comunicarle sobre cambios en los mismos.</li>
                    <li>Realizar evaluaciones periódicas de nuestros productos y servicios a efecto de mejorar la calidad de los mismos.</li>
                </ul>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">4. Derechos ARCO</h3>
                <p>
                    Usted tiene derecho de acceder, rectificar y cancelar sus datos personales, así como de oponerse al tratamiento de los mismos o revocar el consentimiento que para tal fin nos haya otorgado, a través de los procedimientos que hemos implementado. Para conocer dichos procedimientos, los requisitos y plazos, se puede poner en contacto con nuestro departamento de datos personales a través del correo electrónico: francisco.a.verdantia@outlook.com.
                </p>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">5. Transferencia de Datos</h3>
                <p>
                    Le informamos que sus datos personales no serán transferidos a terceros ni tratados dentro o fuera del país, por personas distintas a esta empresa, sin su consentimiento previo, salvo las excepciones previstas en la Ley.
                </p>
            </section>


            <section className="pt-6 border-t border-white/5">
                <p className="text-xs italic">Última actualización: Enero 2024</p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;

function Footer() {
    return (
        <section id="footer">
            <article className="footer-info">
                <div className="footer-info__about-us">
                    {/* TODO AÑADIR LOGO */}
                    <p>Actualiza con nosotros tu proyecto con accesibilidad en la información y lleva tu mensaje a todas las personas</p>
                    <button className="slide-button">Contactar {/* TODO AÑADIR FLECHA */}</button>
                    <div className="footer-info__emblems">
                        {/* TODO AÑADIR EMBLEMAS */}
                    </div>
                </div>

                <div className="footer-info__sections">
                    <p>Productos</p>
                    <p>Servicios</p>
                    <p>Administración pública</p>
                    <p>Conócenos</p>
                    <p>Actualidad</p>
                    <p>Tienda</p>
                </div>

                <div className="footer-info__form">
                    <form action="POST">
                        <h5>¿Quieres estar al día con las noticias de accesibilidad?</h5>
                        <p>Suscríbete a la newsletter</p>
                        <input type="text" placeholder="Nombre" />
                        <input type="email" placeholder="Email" />
                        <input type="checkbox" placeholder="Acepto la política de privacidad" />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
            </article>

            <article className="footer-copyright">
                <div className="footer-copyright__text">
                    <p>© 2024 Puntodis</p>
                    <p>Políticas de privacidad</p>
                    <p>Aviso legal</p>
                    <p>Política de cookies</p>
                </div>
                <div className="footer-copyright__social">
                    {/* TODO AÑADIR ICONOS */}
                </div>
            </article>
        </section>
    )
}
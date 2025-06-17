import './AboutUs.scss'

function AboutUs() {
    return (
        <section id="about-us">
            <article className="about-us__content">
                <h3>Somos consultores en Accesibilidad Universal</h3>
                <p>Nuestro objetivo es que todas las personas puedan desenvolverse en cualquier entorno con independencia y accedan a todos los recursos del mismo con facilidad.</p>
                <p>Mira cómo podemos ayudarte a transformar tu proyecto, cumplir con las normativas y abrirlo a todas las personas.</p>
                <button className="slide-button">
                    Contacta con nosotros
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </button>
            </article>

            <img src="/assets/images/slide2Image.svg" alt="image" loading='lazy' />
        </section>
    )
}

export default AboutUs
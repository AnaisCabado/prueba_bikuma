import "./Hero.scss"

function Hero() {
    return (
        <section id="hero">
            <div className="hero__text">
                <h1>¿Cumples con las normativas de accesibilidad universal?</h1>
                <p>Actualiza tu proyecto con accesibilidad en la información y lleva tu mensaje a todas las personas</p>
                <button className="slide-button">
                    Contacta con nosotros
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default Hero
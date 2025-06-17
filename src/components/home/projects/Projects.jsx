import './Projects.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

function Projects() {
    const projectsCards = [
        {
            desc: 'Manual de señalización accesible para un mundo más inclusivo',
            location: 'Palma de Mallorca',
            img: 'news-card1.png',
        },
        {
            desc: 'La estrategia integral para el fomento de la accesibilidad en bilbobus',
            location: 'Bilbao',
            img: 'projects-card2.jpg',
        },
        {
            desc: 'Alhóndiga bilbao – centro azkuna, pensando en la accesibilidad para todos',
            location: 'Bilbao',
            img: 'projects-card3.jpg',
        },
        {
            desc: 'Vilamuseu «museos para todos»',
            location: 'Vila Joiosa',
            img: 'projects-card4.jpg',
        },
        {
            desc: 'La accesibilidad en el turismo entra ya al siguiente nivel',
            location: 'Getxo',
            img: 'projects-card5.jpg',
        },
    ]

    return (
        <section id="projects">
            <h2>Conoce las últimas novedades de Puntodis</h2>
            <div className="carousel-wrapper">
                <article className="projects-list">
                    {[...projectsCards, ...projectsCards].map((card, index) => (
                        <div
                            key={index}
                            className="projects-card"
                            style={{ backgroundImage: `url(/assets/images/${card.img})` }}
                        >
                            <div className="projects-card__text">
                                <p className='card-desc'>{card.desc}</p>
                                <p className='card-location'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    {card.location}</p>
                            </div>
                        </div>
                    ))}
                </article>
            </div>
        </section>
    )
}

export default Projects

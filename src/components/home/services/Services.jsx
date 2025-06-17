import './Services.scss'

function Services() {
    const servicesCards = [
        {
            title: 'Accesibilidad en comunicación',
            desc: 'Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida',
            img: 'braile2.png'
        },
        {
            title: 'Servicios de digitalización',
            desc: 'Nullam facilisis ligula et enim ultrices sagittis Aenean at felis eget',
            img: 'braile5.png'
        },
        {
            title: 'Diagnósticos y planes estratégicos',
            desc: 'Aliquam vitae mauris non augue sollicitudin porttitorodio vehicula ',
            img: 'braile4.png'
        },
        {
            title: 'Evacuación y emergencia',
            desc: 'Donec et nibh facilisis, lobortis lacus non, viverra ante integer ',
            img: 'braile3.png'
        },
        {
            title: 'Formación en inclusión',
            desc: 'Nullam facilisis ligula et enim ultrices sagittis Aenean at felis eget',
            img: 'braile3.png'
        },
        {
            title: 'Restauración inclusiva',
            desc: 'Donec et nibh facilisis, lobortis lacus non, viverra ante integer ',
            img: 'braile6.png'
        },
        {
            title: 'Simulación de entornos 3D',
            desc: 'Donec et nibh facilisis, lobortis lacus non, viverra ante integer ',
            img: 'braile5.png'
        },
    ]

    return (
        <section id="services">
            <h2>Servicios</h2>
            <article className="services-list">
                {
                    servicesCards.map((card) => (
                        <div className="services-card">
                            <img src={`/assets/images/${card.img}`} alt="dots" loading="lazy" />
                            <h3 style={{ fontWeight: 600 }}>{card.title}</h3>
                            <p>{card.desc}</p>
                        </div>
                    ))
                }
            </article>
        </section>
    )
}

export default Services
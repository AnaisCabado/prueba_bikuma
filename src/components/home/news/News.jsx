import './News.scss'


function News() {
  const newsCards = [
    {
      title: 'Señalética',
      desc: 'Manual de señalización accesible para un mundo más inclusivo',
      img: 'news-card1.png',
    },
    {
      title: 'Turismo',
      desc: '¿Tienes cita en Fitur? La accesibilidad estará en tu agenda',
      img: 'news-card2.png',
    },
    {
      title: 'Turismo',
      desc: '¿Tienes cita en Fitur? La accesibilidad estará en tu agenda',
      img: 'news-card3.jpg',
    },
    {
      title: 'Análisis',
      desc: 'Piensa en más accesibilidad para personas con Asperger',
      img: 'news-card4.png',
    },
    {
      title: 'Proyecto',
      desc: 'Polideportivos con accesibilidad en Bilbao Kirolak',
      img: 'news-card5.jpg',
    },
  ]

  return (
    <section id="news">
      <h2>Conoce las últimas novedades de Puntodis</h2>
      <div className="carousel-wrapper">
        <article className="news-list">
          {[...newsCards, ...newsCards].map((card, index) => (
            <div
              key={index}
              className="news-card"
              style={{ backgroundImage: `url(/assets/images/${card.img})` }}
            >
              <div className="news-card__text">
                <p className='card-title'>{card.title}</p>
                <p className='card-desc'>{card.desc}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}

export default News

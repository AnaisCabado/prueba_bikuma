import './Products.scss'

function Products() {
    const productsCards = [
        {
            title: 'Señalización. Diseño, validación y fabricación',
            img: 'abc.jpg'
        },
        {
            title: 'Planos y cuadros tactovisuales',
            img: 'alcudia.jpg'
        },
        {
            title: 'Papelería, vinilos y etiquetas',
            img: 'jazz.png'
        },
        {
            title: 'Pavimento tactil',
            img: 'pavimento.jpg'
        }
    ]

    return (
        <section id="products">
            <h2>Productos</h2>
            <article className="products-list">
                {
                    productsCards.map((card) => {
                        return (
                            <div className="product-card">
                                <div className="product-card__img">
                                    <img src={`/assets/images/${card.img}`} alt="card img" loading='lazy' />
                                </div>
                                <p style={{ fontWeight: 600 }}>{card.title}</p>
                            </div>
                        )
                    })
                }
            </article>
        </section>
    )
}

export default Products
function Header() {
    return (
        <nav id="header-nav">
            <div className="header-nav__logo"><p>LOGO</p></div> {/* TODO AÑADIR LOGO */}
            <ul className="header-nav__content">
                <li>Servicios</li>
                <li>Productor</li>
                <li>Administración pública</li>
                <li>Conócenos</li>
                <li>Actualidad</li>
            </ul>
            <div className="header-nav__buttons">
                <button className="header-nav__button contact-button">Contactar</button>
                <button className="header-nav__button shop-button">Tienda</button>
                <button className="header-nav__button search-button">search</button> {/* TODO AÑADIR SVG */}
            </div>
        </nav>
    )
}

export default Header
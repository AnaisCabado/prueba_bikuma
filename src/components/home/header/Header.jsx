import { useState } from "react";
import "./Header.scss";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <nav id="header">
            <div className="header-nav__logo">
                <img src="/assets/images/logotipoo.svg" alt="logotipo" loading="lazy" />
            </div>

            {/* Burger Icon */}
            <button className="burger-toggle" onClick={toggleMenu}>
                ☰
            </button>

            {/* Nav Links */}
            <div className={`header-responsive ${isMenuOpen ? "open" : ""}`}>
                <ul className='header-nav__content'>
                    <li onClick={handleNavClick}>Servicios</li>
                    <li onClick={handleNavClick}>Productos</li>
                    <li onClick={handleNavClick}>Administración pública</li>
                    <li onClick={handleNavClick}>Conócenos</li>
                    <li onClick={handleNavClick}>Actualidad</li>
                </ul>

                {/* Buttons */}
                <div className='header-nav__buttons'>
                    <button className="header-nav__button contact-button" onClick={handleNavClick}>Contactar</button>
                    <button className="header-nav__button shop-button" onClick={handleNavClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 
                     0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 
                     0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 
                     0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 
                     12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 
                     1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 
                     2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 
                     0 0 1 0-2" />
                        </svg>
                        Tienda
                    </button>
                    <button className="header-nav__button search-button" onClick={handleNavClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 
                     1.398h-.001q.044.06.098.115l3.85 3.85a1 
                     1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 
                     0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 
                     5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;

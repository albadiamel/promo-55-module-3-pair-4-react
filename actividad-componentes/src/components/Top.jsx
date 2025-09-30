import 'react'
import '../styles/top.css';
import PropTypes from 'prop-types';
import Link from './Link';


const Top = () => {
    return (
      <div>
        <header className="page__header">
          <nav className="menu-header">
              <a href="https://adalab.es/">
                  <img src="./images/menu-hamburger@3x.png" alt="menu" className="menu-hamburger"/>
              </a>
              <ul className="links">
                  <Link 
                  text={'Producto 1'}/>
                  <Link 
                  text={'Producto 2'}/>
                  <Link 
                  text={'Producto 3'}/>
                  <Link 
                  text={'Producto 4'}/>
              </ul>
              <img src="./images/elegante-logotipo-con-hoja-1@2x.png" alt="logo" className="logo"/>
          </nav>
          <div className="first-module">
              <h1 className="title">Disfruta creando espacios</h1>
              <button className="buy-button">Comprar Ahora</button>
          </div>
        </header>
      </div>
    )
}

export default Top;

Top.propTypes = {
    text: PropTypes.string
}

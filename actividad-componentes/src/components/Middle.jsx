import 'react'

const Middle = () => {
    return (
        <main className="page__main">
            <section className="first-article">
                <div className="header">
                        <h2>Volverse organizado se siente mejor con OPEN SPACES</h2>    
                    </div>
                        <div className="post-1">
                        <img src="./images/icon_1.png" alt="" />
                        <h3>Lo que necesitas</h3>
                        <p>Una línea de productos diseñados para todos tus espacios</p>
                    </div>
                    <div className="post-2">
                        <img src="./images/Biodegradable bag.png" alt="" />
                        <h3>Materias primas sustentables</h3>
                        <p>Todos los productos con materias primas sustentables</p>
                    </div>
                    <div className="post-3">
                        <img src="./images/Park.png" alt="" />
                        <h3>Guía</h3>
                        <p>Soporte y asesoramiento para ayudarte con tu objetivo</p>
                </div>
            </section>
                
            <section className="second-article">
                <div>
                    <img src="./images/go_6.png" alt="" />
                    <h1>Envío gratis garantizado</h1>
                    <p>Envío gratis en compras desde 100</p>
                    <a href="" className="buy-now">Comprar ahora</a>
                </div>
            </section>
            
            <section className="third-article">
                <div className="text-container">
                    <h1>Disfruta creando espacios</h1>
                    <p>Una línea de productos diseñados para todos tus espacios</p>
                    <button>Comprar Ahora</button>
                </div>
                <div className="image-container">
                    <img src="./images/creando-espacios.jpg" alt="" />
                </div>
            </section>
        </main>

    )
}

export default Middle;

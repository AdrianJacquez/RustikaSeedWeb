function HomeProductos() {
  return (
    <>
      <div id="containerHomeProductos">
        <h1 id="tituloProductos">Productos</h1>
        <h2>Innovando en agricultura</h2>
        <p>
          Con las mejores variedades de tomate y chile, además de semillas de
          hortalizas, granos y biofertilizantes para un cultivo más eficiente y
          sostenible.
        </p>
        <div id="containerCards">
          <div className="card">
            <div className="card-image">
              <img
                className="card-image"
                src="https://idp.cimmyt.org/wp-content/uploads/2018/09/353-n3BuenaMilpa2.jpg"
              />
            </div>
            <h3 className="card-title">Semillas De Hortaliza</h3>
            <p className="card-body">
              {" "}
              Semillas de hortícolas hibridas y variedades adaptables a la mayor
              parte de las condiciones ambientales de Mexico.
            </p>
            <div className="containerButton">
              <button className="buttonVerMas">Ver mas</button>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                className="card-image"
                src="http://www.niritseeds.com.mx/img/products_img/6.jpg"
              />
            </div>
            <h3 className="card-title">Tomates</h3>
            <p className="card-body">
              {" "}
              Nuestro programa de mejora de tomates se centra en crear híbridos
              con un vigor vegetal superior, raíces robustas y un excelente
              conjunto de resistencias.
            </p>
            <div className="containerButton">
              <button className="buttonVerMas">Ver mas</button>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                className="card-image"
                src="https://chili-plants.com/media/image/opc/lg/anaheim-paprikaschoten.webp"
              />
            </div>
            <h3 className="card-title">Chiles</h3>
            <p className="card-body">
              {" "}
              Nuestro programa de mejora de chiles se dedica a desarrollar
              híbridos con gran rusticidad y tamaños grandes, adaptados a las
              necesidades del mercado en México.
            </p>
            <div className="containerButton">
              <button className="buttonVerMas">Ver mas</button>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                className="card-image"
                src="https://cdn.wikifarmer.com/wp-content/uploads/2022/07/Valor-nutricional-del-maiz-y-beneficios-para-la-salud.jpg"
              />
            </div>
            <h3 className="card-title">Semillas Granos</h3>
            <p className="card-body">
              {" "}
              Tenemos un amplio portafolio de semillas de granos y forrajes
              adaptables a la mayor parte de las condiciones ambientales.
            </p>
            <div className="containerButton">
              <button className="buttonVerMas">Ver mas</button>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                className="card-image"
                src="https://www.nostoc.es/wp-content/uploads/2023/10/ventajas-de-los-biofertilizantes.jpg"
              />
            </div>
            <div>
              <h3 className="card-title">Biofertilizantes</h3>
              <p className="card-body">
                {" "}
                Nos especializamos en comercializar biofertilizantes que mejoran
                la fertilidad del suelo y promueven un crecimiento saludable de
                las plantas.
              </p>
            </div>

            <div className="containerButton">
              <button className="buttonVerMas">Ver mas</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeProductos;

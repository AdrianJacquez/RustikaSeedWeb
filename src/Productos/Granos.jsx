import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Granos.css";

function Granos() {
  return (
    <>
      <Nav />
      <div id="containerGranos">
        <h1 id="tituloGranos">SEMILLAS GRANOS</h1>
        <p className="contenidoP">
          Contamos con un amplio portafolio de semillas de granos y forrajes,
          especialmente <strong>adaptables </strong> a una gran variedad de
          condiciones ambientales. Nuestro <strong>objetivo </strong> es
          proporcionar soluciones de alta calidad que se ajusten a las
          necesidades específicas de cada agricultor, independientemente de la
          región en la que se encuentre. Cada una de nuestras semillas ha sido
          cuidadosamente seleccionada y <strong>desarrollada </strong> para
          ofrecer un <strong>rendimiento</strong> óptimo y una excelente
          <strong> adaptabilidad</strong>.
        </p>
        <p className="contenidoP">
          Para asegurarse de que está utilizando el material más adecuado para
          su zona, le recomendamos que consulte a nuestros{" "}
          <strong>asesores </strong>
          técnicos. Ellos están disponibles para ofrecerle recomendaciones
          personalizadas y <strong>asistencia </strong> experta, ayudándole a
          seleccionar las semillas que mejor se adapten a las{" "}
          <strong>condiciones </strong> específicas de su área y a sus objetivos
          de producción.
        </p>
        <div className="container">
          <div className="maiz">
            <strong>MAÍCES</strong>
            <div id="contMaiz">
              <p className="tipos">
                <p className="p">- F1 Blanco (GRANO Y ELOTERO)</p>
                <p className="p">- F1 AMARILLOS (GRANO Y ELOTERO)</p>
                <p className="p">- F1 PROCESO (BLANCOS, AMAR Y BICOLOR)</p>
                <p className="p">- CRIOLLOS (BLANCO, AZUL, ROJO, MEZCLAS)</p>
                <p className="p">- MAS......</p>
              </p>{" "}
              <img
                src="https://t4.ftcdn.net/jpg/02/84/21/39/240_F_284213945_rRGA0EsTNjpnUyl4KhnFlNyGxYW5SdUA.jpg"
                className="imagesGranos"
              ></img>
              <p className="textGrid">
                Tenemos una gran variedad de maíces híbridos de diferentes
                colores y usos en el país: blancos y amarillos, Rojos, Azules,
                mixtos, etc
              </p>
            </div>
          </div>
          <div className="forrajesCol1">
            <strong>FORRAJES</strong>
            <div id="contForrajes">
              <img
                src="https://t3.ftcdn.net/jpg/03/92/06/28/240_F_392062820_ZhbiwoJdTP4plH0RRhclZwMm4ydVvW1K.jpg"
                className="imagesGranos"
              ></img>
              <p className="textGrid">
                Producimos y distribuimos una amplia variedad de semillas,
                incluyendo maíz forrajero, sorgo, alfalfa, pastos y mucho más..
              </p>
              <p className="tiposForraje">
                <p className="p">- MAIZ</p>
                <p className="p">- SORGO</p>
                <p className="p">- ALFALFA</p>
                <p className="p">- ZACATES</p>
                <p className="p">- MAS......</p>
              </p>{" "}
            </div>
          </div>
          <div className="otrosCol2">
            <strong>OTRAS SEMILLAS</strong>
            <div id="contForrajes">
              <img
                src="https://t3.ftcdn.net/jpg/01/96/74/00/240_F_196740070_v6gJYNKpUVZYNwqzIcVMflUFlGRAv3th.jpg"
                className="imagesGranos"
              ></img>
              <p className="textGrid">
                También comercializamos semilla de frijol, Maíz, Garbanzo,
                Ejote, Cacahuate y semillas criollas regionales de todo tipo,
                etc.
              </p>
              <p className="tiposForraje">
                <p className="p">- FRIJOL</p>
                <p className="p">- GARBANZO</p>
                <p className="p">- CACAHUATE</p>
                <p className="p">- CHÍCHAROS</p>
                <p className="p">- AVENA</p>
                <p className="p">- EJOTE</p>
                <p className="p">- MAS......</p>
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Granos;

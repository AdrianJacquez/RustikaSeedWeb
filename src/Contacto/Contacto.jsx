import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Contacto.css";
import Formulario from "./FormularioContacto";
import Map from "./Map.jsx";

function Contacto() {
  return (
    <>
      <Nav />
      <div className="containerContacto">
        <h1 className="tituloContacto">CONTACTO</h1>
        <p className="pContacto">
          Para mayor información de nuestros productos, favor de ponerse en
          contacto con nuestros asesores mas cercanos o mándenos un correo con
          sus dudas y nosotros nos ponemos en contacto con usted.
        </p>
        <div className="containerRepre">
          <div id="contInfoContacto">
            <h2 className="tituloContacto">Representante en Mexico</h2>
            <p className="pContacto">
              ING.Antonio Velarde L.
              <br /> (667)7104533 y (667)1981427
            </p>
            <p className="pContacto">
              <strong className="strongContacto">EMail: </strong>
              <a className="linkContacto" href="mailto:Ventas@rustikaseed.com">
                Ventas@rustikaseed.com
              </a>
              <br />
              <a
                className="linkContacto"
                href="mailto:rustikamexico@yahoo.com.mx"
              >
                {" "}
                rustikamexico@yahoo.com.mx
              </a>
              <br />
              <strong className="strongContacto">Paguina Web: </strong>
              <a
                className="linkContacto"
                href="https://www.rustikaseed.com/nosotros"
                target="_blank"
              >
                www.rustikaseed.com
              </a>
            </p>
          </div>

          <Formulario />
        </div>
        <h2 className="tituloContacto">DISTRIBUIDORES EN MEXICO</h2>
        <div id="contDistribuidores">
          <div className="contZonas">
            <h2 className="tituloZona">ZONA PACIFICO</h2>
            <h3 className="zonaName">SINALOA:</h3>
            <p className="pContacto">
              Ing. Joan Carlo Barron <br />
              (667) 7512001
            </p>
            <p className="pContacto">
              EL JORNALERO SERVICES
              <br />
              (694)10 80025
            </p>

            <h3 className="zonaName">SONORA:</h3>
            <p className="pContacto">
              Victor Ortiz
              <br />
              (687) 105 1451
            </p>
            <h3 className="zonaName">BCN:</h3>
            <p className="pContacto">
              Adolfo Madrigal <br />
              (667) 296 0645
            </p>
          </div>
          <div className="contZonas">
            <h2 className="tituloZona">ZONA CENTRO/NORTE</h2>
            <h3 className="zonaName">CHIHUAHUA:</h3>
            <p className="pContacto">
              AGROCONSULTORIA Y SERVICIOS AGRIC <br />
              (648) 4621012
            </p>
          </div>
          <div className="contZonas">
            <h2 className="tituloZona">ZONA CENTRO-SUR</h2>
            <h3 className="zonaName">BAJIO:</h3>
            <p className="pContacto">EN BUSCA DE DISTRIBUIDOR</p>
            <h3 className="zonaName">ESTADO DE MEXICO:</h3>
            <p className="pContacto">
              Ing. Ignacio Jimenez <br />
              (554) 9320158
            </p>
            <h3 className="zonaName">MORELOS:</h3>
            <p className="pContacto">
              AGRICOLA BARRAGAN <br />
              (739) 395 3641
            </p>
            <h3 className="zonaName">CHIAPAS:</h3>
            <p className="pContacto">
              Daniel Vazquez Jimenez <br />
              (963) 129 0396
            </p>
          </div>
        </div>
      </div>
      <div className="mapa">
        <Map />
      </div>
      <Footer />
    </>
  );
}
export default Contacto;

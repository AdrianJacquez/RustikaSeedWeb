import "./Nosotros.css";
import Footer from "../Footer/Footer.jsx";

function Nosotros() {
  return (
    <>
      <div id="containerNosotros">
        <h1 className="titulo">NOSOTROS</h1>
        <p id="pNosotros">
          <strong>Rustika Seed</strong>, es una MR de
          <strong> Rustika de Mexico SA de CV</strong> empresa dedicada
          principalmente a la Investigación, Desarrollo y comercialización de
          Biofertilizantes y Semillas horticolas en México y Latinoamerica.
          Somos una empresa joven en México, cuyo objetivo es la venta de
          productos especificos a empresas semilleras y/o distribuidores para
          venta al menudeo.
        </p>
        <div id="containerNosotros2">
          <div className="contRowFD">
            <img
              className="imgFD"
              src="https://static.wixstatic.com/media/c7e1f5_af4b95523c746a3fc3e711bbbc91683a.jpg/v1/fill/w_354,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c7e1f5_af4b95523c746a3fc3e711bbbc91683a.jpg"
              alt="huerta de tomate"
            />
            <p className="pFD">
              <strong>Nuestro futuro en méxico y latinoamerica</strong> Dentro
              de los planes de crecimiento a corto plazo, se tiene planeado el
              establecimiento de otro centro experimental en méxico, en el área
              de bajio y/o puebla. nuestros programas de mejoramiento, se han
              extendido al noroeste, con la finalidad de ir conociendo las
              necesidades del mercado de las hortalizas de méxico.
            </p>
          </div>

          <div id="contInvestigacion">
            <img
              id="imgInvestigacion"
              src="https://static.wixstatic.com/media/c7e1f5_b929f03a63db45b6b4573a3f8e850855.jpg/v1/fill/w_761,h_506,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7e1f5_b929f03a63db45b6b4573a3f8e850855.jpg"
              alt="Tomate"
            />
            <p id="pInvestigacion">
              <strong>Investigacion </strong>
              Contamos con un predio de 2 has en la zona de Texcoco, Edo de
              México. Misma donde realizamos pruebas de hibridación, y
              adaptación de nuestros híbridos a las diferentes condiciones
              climáticas de México.
            </p>
          </div>
          <div className="contRowFD">
            <img
              className="imgFD"
              src="https://static.wixstatic.com/media/c7e1f5_bea8108d86604744a5e89a3b1f774bb2.jpg/v1/fill/w_497,h_381,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c7e1f5_bea8108d86604744a5e89a3b1f774bb2.jpg"
              alt="invernadero"
            />
            <p className="pFD">
              <strong>Desarrollo</strong> También estamos realizando pruebas de
              adaptabilidad directamente con los productores, con nuestro
              personal tecnico y con apoyo de nuestros distribuidores en las
              zonas mas importantes del pais.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Nosotros;

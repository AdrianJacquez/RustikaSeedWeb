import Footer from "../Footer/Footer.jsx";
import "./Hortalizas.css";

function Hortalizas() {
  return (
    <>
      <div id="containerHortaliza">
        <h1 id="tituloHortaliza">SEMILLAS DE HORTALIZAS</h1>
        <p className="contenidoP">
          En nuestra empresa, nos enorgullece ofrecer un amplio portafolio de
          semillas de hortícolas <strong>híbridas </strong> y variedades
          adaptables a la mayoría de las condiciones ambientales de México.
          Nuestra selección de semillas ha sido cuidadosamente desarrollada para
          garantizar una excelente <strong>calidad </strong> y{" "}
          <strong>rendimiento </strong> en diversas regiones del país.
        </p>
        <p className="contenidoP">
          Además, contamos con un equipo de asesores técnicos altamente
          <strong> capacitados, </strong>listos para ayudarte a elegir las
          semillas que mejor se adapten a tus necesidades específicas. Ya sea
          que estés cultivando en una pequeña huerta familiar o en una operación
          agrícola a gran escala, nuestros expertos pueden proporcionarte
          recomendaciones personalizadas basadas en tu ubicación,{" "}
          <strong>condiciones </strong> del suelo y objetivos de producción.
        </p>
        <h2 id="tituloCatalogo">
          ÉCHALE UN OJO AL CATÁLOGO PARA QUE VEAS LA GRAN VARIEDAD DE PRODUCTOS
          QUE PODEMOS OFRECERTE
        </h2>
        <div id="contImg">
          <a
            href="https://www.rustikaseed.com/_files/ugd/c7e1f5_eb98880efbc14043babbb831cdc3620b.pdf"
            target="_blank"
          >
            <button id="btnCatalogo">Abrir Catalogo</button>
          </a>

          <img id="catalogo" src="./images/portadaCatalogo.png"></img>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Hortalizas;

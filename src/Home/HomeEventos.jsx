import "./Home.css";
import ProximoEvento from "../Jsons/JsonProximoEvento.jsx";
import { Link } from "react-router-dom";

function HomeEventos() {
  return (
    <>
      <h1 id="tituloEventos">Eventos</h1>
      <p>
        ¡Participa en nuestros eventos agrícolas y descubre cómo nuestras
        semillas e insumos de alta calidad pueden mejorar tu rendimiento y
        eficiencia! Aprende a reducir costos y cuidar el medio ambiente con
        prácticas sostenibles. Únete para intercambiar conocimientos y
        experiencias. ¡Te esperamos!
      </p>
      <h2>¡PROXIMO EVENTO!</h2>
      {ProximoEvento.map((proximoEvento, index) => (
        <div className="containerCardsEventos" key={index}>
          <div className="cardEvento">
            <h3 className="mesEvento">{proximoEvento.mes}</h3>
            <img className="imageEvento" src={proximoEvento.imagen} />
            <h4 className="nombreEvento">{proximoEvento.nombre}</h4>
            <p className="datosEvento">{proximoEvento.datos}</p>
          </div>
        </div>
      ))}

      <div className="containerButton">
        <Link href="/eventos">
          <button id="verTodos">Ver todos</button>
        </Link>
      </div>
    </>
  );
}

export default HomeEventos;

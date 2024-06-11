import Footer from "../Footer/Footer";
import "./Eventos.css";
import JsonEventos from "../Jsons/JsonEventos";
function Eventos() {
  return (
    <>
      <div className="containerEventos">
        <h1 className="tituloEventos">EVENTOS</h1>
        <p className="pEvento">
          ¡Únete a nosotros en nuestros eventos <strong>agrícolas </strong>{" "}
          donde promovemos el
          <strong> desarrollo </strong> de la agricultura a través de semillas e
          insumos de alta calidad, eficiencia y rendimiento! Descubre cómo
          puedes reducir costos mientras minimizas el impacto en el medio
          ambiente. Te esperamos para compartir <strong>conocimientos </strong>{" "}
          y <strong> experiencias </strong> que impulsen el{" "}
          <strong>crecimiento </strong>
          sostenible en la agricultura. ¡No te lo pierdas!
        </p>
        <div className="containerEventosCards">
          {JsonEventos.map((eventos, index) => (
            <div className="cardEvento" key={index}>
              <h3 className="mesEvento">{eventos.mes}</h3>
              <img
                className="imageEvento"
                src={eventos.imagen}
                alt={eventos.nombre}
              />
              <h4 className="nombreEvento">{eventos.nombre}</h4>
              <p className="datosEvento">{eventos.datos}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Eventos;

/* 
          <div className="containerEventosCards" >
          {JsonEventos.map((eventos, index) => (
            <div className="cardEvento" key={index}>
              <h3 className="mesEvento">{eventos.mes}</h3>
              <img className="imageEvento" src={eventos.imagen} />
              <h4 className="nombreEvento">{eventos.nombre}</h4>
              <p className="datosEvento">{eventos.datos}</p>
            </div>
         
        ))}
         </div>*/

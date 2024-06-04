import "./Home.css";

function HomeEventos() {
  return (
    <>
      <h1 id="tituloEventos">Eventos</h1>
      <h2>NUEVAS Y MEJORES SEMILLAS PARA MEXICO</h2>
      <p>
        ¡Únete a nosotros en nuestros eventos agrícolas donde promovemos el
        desarrollo de la agricultura a través de semillas e insumos de alta
        calidad, eficiencia y rendimiento! Descubre cómo puedes reducir costos
        mientras minimizas el impacto en el medio ambiente. Te esperamos para
        compartir conocimientos y experiencias que impulsen el crecimiento
        sostenible en la agricultura. ¡No te lo pierdas!
      </p>
      <div className="containerButton">
        <a href="/eventos">
          <button id="saberMas">Saber mas</button>
        </a>
      </div>
    </>
  );
}

export default HomeEventos;

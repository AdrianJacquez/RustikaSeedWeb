import { useState, useEffect } from "react";
import "./Home.css";
import { Icon } from "react-icons-kit";
import { angleDoubleDown } from "react-icons-kit/fa/angleDoubleDown";

function HomeNosotros() {
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffset = document.getElementById("tituloNosotros").offsetTop;

      // Si la posición de desplazamiento es mayor que la posición del título, oculta el icono
      setShowIcon(scrollPosition < sectionOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <h1 id="tituloNosotros">Nosotros</h1>
      <h2>NUEVAS Y MEJORES SEMILLAS PARA MEXICO</h2>
      <p>
        Empresa dedicada principalmente a la <strong>Investigación</strong>,
        <strong> Desarrollo </strong> y<strong> comercialización </strong> de
        Biofertilizantes y Semillas horticolas en México y Latinoamerica.
      </p>
      <div className="containerButton">
        <a href="/nosotros">
          <button id="saberMas">Saber mas</button>
        </a>
        {showIcon && (
          <a href="#tituloProductos">
            <Icon id="iconBajar" size={46} icon={angleDoubleDown}></Icon>
          </a>
        )}
      </div>
    </>
  );
}

export default HomeNosotros;

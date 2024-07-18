import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Icon } from "react-icons-kit";
import { list } from "react-icons-kit/ikons/list";
import { close } from "react-icons-kit/ikons/close";
import { arrow_down } from "react-icons-kit/ikons/arrow_down";
import { arrow_up } from "react-icons-kit/ikons/arrow_up";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAcordeon, setIsOpenAcordeon] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 810);
  const [animate, setAnimate] = useState(true);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 810);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    // Remove animation class after the first render
    setAnimate(false);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleAcordion = () => {
    setIsOpenAcordeon(!isOpenAcordeon);
  };

  return (
    <div id="container">
      <header id="header">
        <nav
          id="navegador"
          ref={menuRef} // Agregar una referencia al menú para detectar clics dentro de él
          className={animate ? "animacionOn" : ""}
        >
          <Link id="homeLogo" to="/">
            <img id="logo" src="/images/logoR.jpg" alt="Rustika Logo" />
          </Link>

          {isMobile ? (
            <div className={`navLinks ${isOpen ? "open" : ""}`}>
              <Link className="linksNav" to="/nosotros">
                Nosotros
              </Link>
              <div id="contAcordion">
                <Link className="linksNav" to="/productos">
                  Productos
                </Link>{" "}
                <Accordion
                  sx={{ backgroundColor: "#D8E8DD", boxShadow: "none" }}
                >
                  <AccordionSummary>
                    <Icon
                      onClick={toggleAcordion}
                      id="iconAcordeon"
                      size={32}
                      icon={isOpenAcordeon ? arrow_up : arrow_down}
                    >
                      {" "}
                    </Icon>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link className="linkProducto" to="/hortalizas">
                      Semillas De Hortalizas
                    </Link>
                    <Link className="linkProducto" to="/tomates">
                      Tomates
                    </Link>
                    <Link className="linkProducto" to="/chiles">
                      Chiles
                    </Link>
                    <Link className="linkProducto" to="/granos">
                      Semillas Granos
                    </Link>
                    <Link className="linkProducto" to="/biofertilizantes">
                      Biofertilizantes
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </div>
              <Link className="linksNav" to="/eventos">
                Eventos
              </Link>
              <Link className="linksNav" to="/contacto">
                Contacto
              </Link>
            </div>
          ) : (
            <>
              <Link className="linksNav" to="/nosotros">
                Nosotros
              </Link>
              <Link className="linksNav" id="productoHover" to="/productos">
                Productos
                <div className="contLinkProducto">
                  <Link className="linkProducto" to="/hortalizas">
                    Semillas Hortalizas
                  </Link>
                  <Link className="linkProducto" to="/tomates">
                    Tomates
                  </Link>
                  <Link className="linkProducto" to="/chiles">
                    Chiles
                  </Link>
                  <Link className="linkProducto" to="/granos">
                    Semillas Granos
                  </Link>
                  <Link className="linkProducto" to="/biofertilizantes">
                    Biofertilizantes
                  </Link>
                </div>
              </Link>
              <Link className="linksNav" to="/eventos">
                Eventos
              </Link>
              <Link className="linksNav" to="/contacto">
                Contacto
              </Link>
            </>
          )}
          <div id="contHamburger">
            <Icon
              icon={isOpen ? close : list}
              size={32}
              className="hamburger"
              onClick={toggleMenu}
            />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;

import { useState, useEffect, useRef } from "react";
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleAcordion = () => {
    setIsOpenAcordeon(!isOpenAcordeon);
  };

  return (
    <div id="container">
      <header id="header">
        <nav id="navegador">
          <a id="homeLogo" href="/">
            <img
              id="logo"
              src="./public/images/Rustika.jpg"
              alt="Rustika Logo"
            />
          </a>

          {isMobile ? (
            <div className={`navLinks ${isOpen ? "open" : ""}`}>
              <a className="linksNav" href="/nosotros">
                Nosotros
              </a>
              <div id="contAcordion">
                <a className="linksNav" href="/productos">
                  Productos
                </a>{" "}
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
                    <a className="linkProducto" href="/">
                      Semillas De Hortalizas
                    </a>
                    <a className="linkProducto" href="/">
                      Tomates
                    </a>
                    <a className="linkProducto" href="/">
                      Chiles
                    </a>
                    <a className="linkProducto" href="/">
                      Semillas Granos
                    </a>
                    <a className="linkProducto" href="/">
                      Biofertilizantes
                    </a>
                  </AccordionDetails>
                </Accordion>
              </div>
              <a className="linksNav" href="/eventos">
                Eventos
              </a>
              <a className="linksNav" href="/contacto">
                Contacto
              </a>
            </div>
          ) : (
            <>
              <a className="linksNav" href="/nosotros">
                Nosotros
              </a>
              <a className="linksNav" id="productoHover" href="/productos">
                Productos
                <div className="contLinkProducto">
                  <a className="linkProducto" href="/">
                    Semillas De Hortalizas
                  </a>
                  <a className="linkProducto" href="/">
                    Tomates
                  </a>
                  <a className="linkProducto" href="/">
                    Chiles
                  </a>
                  <a className="linkProducto" href="/">
                    Semillas Granos
                  </a>
                  <a className="linkProducto" href="/">
                    Biofertilizantes
                  </a>
                </div>
              </a>
              <a className="linksNav" href="/eventos">
                Eventos
              </a>
              <a className="linksNav" href="/contacto">
                Contacto
              </a>
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

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Representante en Mexico:</p>
          <p>
            Ing. Antonio Velarde L. <br /> (667) 7104533 y (667) 198 1427
          </p>
          <p>
            <a href="Ventas@rustikaseed.com ">Ventas@rustikaseed.com</a> <br />{" "}
            <a href="rustikamexico@yahoo.com.mx">rustikamexico@yahoo.com.mx</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Navegación</h4>
          <ul className="no-bullets">
            <li>
              <a href="/">Principal</a>
            </li>
            <li>
              <a href="/nosotros">Nosotros</a>
            </li>
            <li>
              <a href="/productos">Productos</a>
            </li>
            <li>
              <a href="/eventos">Eventos</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <ul className="example-2">
            <li className="icon-content">
              <a
                data-social="facebook"
                aria-label="Facebook"
                href="https://www.facebook.com/rustika.seed/"
                target="_blank"
              >
                <div className="filled"></div>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351C0 23.404.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.596 1.325-1.324V1.325C24 .596 23.404 0 22.675 0z"
                  />
                </svg>
              </a>
              <div className="tooltip">Facebook</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p id="copyrights">
          © 2024 RustikaSeed. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

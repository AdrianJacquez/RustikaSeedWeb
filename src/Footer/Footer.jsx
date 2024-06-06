import { Link } from "react-router-dom";
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
            <a href="mailto:Ventas@rustikaseed.com">Ventas@rustikaseed.com</a>{" "}
            <br />{" "}
            <a href="mailto:rustikamexico@yahoo.com.mx">
              rustikamexico@yahoo.com.mx
            </a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Navegación</h4>
          <ul className="no-bullets">
            <li>
              <Link href="/">Principal</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/productos">Productos</Link>
            </li>
            <li>
              <Link href="/eventos">Eventos</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
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
                  <circle cx="12" cy="12" r="12" fill="transparent" />
                  <path
                    fill="currentColor"
                    d="M16.403 8.667h-1.955c-.514 0-.611.245-.611.604v1.584h2.562l-.335 2.611h-2.227V18H11.68v-4.534H9.692v-2.611h1.988V9.71c0-1.973 1.205-3.048 2.962-3.048.843 0 1.566.062 1.775.09v2.045z"
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

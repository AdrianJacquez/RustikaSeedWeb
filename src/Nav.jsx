function Nav() {
  return (
    <div id="container">
      <header id="header">
        <nav id="navegador">
          <a id="homeLogo" href="/">
            <img
              id="logo"
              src="https://static.wixstatic.com/media/c7e1f5_0bcebf37dd7df1c81099481d8f806f0f.jpg/v1/fill/w_405,h_233,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c7e1f5_0bcebf37dd7df1c81099481d8f806f0f.jpg"
            ></img>
          </a>

          <a className="linksNav" href="/nosotros">
            Nosotros
          </a>
          <a className="linksNav" href="/productos">
            Productos
          </a>
          <a className="linksNav">Eventos</a>
          <a className="linksNav">Contacto</a>
        </nav>
      </header>
    </div>
  );
}
export default Nav;

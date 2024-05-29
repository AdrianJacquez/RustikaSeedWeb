function Nav() {
  return (
    <div id="container">
      <header id="header">
        <nav id="navegador">
          <a id="homeLogo" href="/">
            <img id="logo" src="./public/images/Rustika.jpg"></img>
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

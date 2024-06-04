import HomeNosotros from "./HomeNosotros";
import HomeProductos from "./HomeProductos";
import HomeEventos from "./HomeEventos.jsx";
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";
function Home() {
  return (
    <>
      <Nav />
      <HomeNosotros />
      <HomeProductos />
      <HomeEventos />
      <Footer />
    </>
  );
}

export default Home;

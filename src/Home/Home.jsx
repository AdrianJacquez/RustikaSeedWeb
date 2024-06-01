import HomeNosotros from "./HomeNosotros";
import HomeProductos from "./HomeProductos";
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";
function Home() {
  return (
    <>
      <Nav />
      <HomeNosotros />
      <HomeProductos />
      <Footer />
    </>
  );
}

export default Home;

import HomeNosotros from "./HomeNosotros";
import HomeProductos from "./HomeProductos";
import HomeEventos from "./HomeEventos.jsx";
import "./Home.css";
import Footer from "../Footer/Footer.jsx";
function Home() {
  return (
    <>
      <HomeNosotros />
      <HomeProductos />
      <HomeEventos />
      <Footer />
    </>
  );
}

export default Home;

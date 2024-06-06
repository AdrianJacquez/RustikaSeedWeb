import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Nav/Nav.jsx";
import Nosotros from "./Nosotros/Nosotros.jsx";
import Productos from "./Productos/Productos.jsx";
import Eventos from "./Eventos/Eventos.jsx";
import Contacto from "./Contacto/Contacto.jsx";
import Hortalizas from "./Productos/Hortalizas.jsx";
import Tomates from "./Productos/Tomates.jsx";
import Chiles from "./Productos/Chiles.jsx";
import Granos from "./Productos/Granos.jsx";
import Biofertilizantes from "./Productos/Biofertilizantes.jsx";
import Home from "./Home/Home.jsx";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/nosotros"} element={<Nosotros />} />
          <Route path={"/productos"} element={<Productos />} />
          <Route path={"/eventos"} element={<Eventos />} />
          <Route path={"/contacto"} element={<Contacto />} />
          <Route path={"/hortalizas"} element={<Hortalizas />} />
          <Route path={"/tomates"} element={<Tomates />} />
          <Route path={"/chiles"} element={<Chiles />} />
          <Route path={"/granos"} element={<Granos />} />
          <Route path={"/biofertilizantes"} element={<Biofertilizantes />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

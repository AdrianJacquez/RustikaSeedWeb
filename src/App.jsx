import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nosotros from "./Nosotros";
import Productos from "./Productos";
import Home from "./Home";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/nosotros"} element={<Nosotros />} />
          <Route path={"/productos"} element={<Productos />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

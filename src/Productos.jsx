import "./Productos.css";
import Nav from "./Nav";

function Productos() {
  return (
    <>
      <Nav />
      <div id="containerProductos">
        <h1 className="titulo">PRODUCTOS</h1>
        <p>
          En <strong>RustikaSeed</strong>, nos dedicamos a la innovación
          agrícola ofreciendo una amplia gama de productos que incluyen semillas
          de tomate, chile, hortalizas, granos y biofertilizantes. Nos
          especializamos en experimentar y desarrollar variedades mejoradas,
          para satisfacer las necesidades del mercado y promover un cultivo{" "}
          <strong>eficiente y sostenible</strong>.
        </p>
      </div>
    </>
  );
}

export default Productos;

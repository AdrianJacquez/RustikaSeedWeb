import "./Contacto.css";

function Formulario() {
  return (
    <form id="formContacto">
      <label className="labels" htmlFor="name">
        Nombre
      </label>
      <input
        className="inputs"
        type="text"
        name="name"
        id="name"
        placeholder="Tu nombre"
        required
      ></input>

      <label className="labels" htmlFor="email">
        Email
      </label>
      <input
        className="inputs"
        type="email"
        id="email"
        name="email"
        placeholder="Tu email"
        required
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
      ></input>

      <label className="labels" htmlFor="subject">
        Asunto
      </label>
      <input
        className="inputs"
        type="text"
        id="subject"
        name="subject"
        placeholder="Tu asunto"
      ></input>

      <label className="labels" htmlFor="message">
        Mensaje
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Tu mensaje"
        required
        cols={30}
        rows={5}
      ></textarea>
      <input className="btn" type="submit" value="Enviar"></input>
    </form>
  );
}
export default Formulario;

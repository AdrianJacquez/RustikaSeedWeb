import "./Contacto.css";

function Formulario() {
  return (
    <form
      id="formContacto"
      action="https://formsubmit.io/send/adrijesuslerma@outlook.com"
      method="POST"
    >
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
      />

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
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
      />

      <label className="labels" htmlFor="subject">
        Asunto
      </label>
      <input
        className="inputs"
        type="text"
        id="subject"
        name="subject"
        placeholder="Tu asunto"
      />

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

      <input className="btn" type="submit" value="Enviar" />

      <input
        type="hidden"
        name="_next"
        value="http://localhost:5173/contacto"
      />
    </form>
  );
}

export default Formulario;

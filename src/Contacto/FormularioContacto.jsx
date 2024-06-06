import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contacto.css";

function Formulario() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_webam7n",
        "template_n4otic2",
        form.current,
        "WZwBh09ICLymbEYJW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito!");
          form.current.reset(); // Limpiar los inputs después de enviar el formulario
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <form id="formContacto" ref={form} onSubmit={sendEmail}>
      <label className="labels" htmlFor="name">
        Nombre
      </label>
      <input
        className="inputs"
        type="text"
        name="name"
        id="name"
        placeholder="nombre"
        maxLength={100}
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
        placeholder=" email"
        maxLength={250}
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
        placeholder=" asunto"
        maxLength={250}
      />

      <label className="labels" htmlFor="message">
        Mensaje
      </label>
      <textarea
        id="message"
        name="message"
        maxLength={800}
        placeholder=" mensaje"
        required
        cols={30}
        rows={5}
      ></textarea>

      <input className="btn" type="submit" value="Enviar" />
    </form>
  );
}

export default Formulario;

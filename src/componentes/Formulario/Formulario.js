import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
  //
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const manejarEnvio = (event) => {
    event.preventDefault();
    console.log("Manejar el envio del formulario");
    //con este metodo logramos capturar los datos del usuario en caso que se quieran enviar al back-end o a una base de datos
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    props.registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    props.crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          title="Nombre"
          placeholder="Ingresar nombre"
          required={true}
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          title="Puesto"
          placeholder="Ingresar puesto"
          required={true}
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          title="Foto"
          placeholder="Ingresar enlace de foto"
          required={true}
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarValor={actualizarEquipo}
          equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          title="Titulo"
          placeholder="Ingresar titulo"
          required={true}
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          title="Color"
          placeholder="Ingresar el color en Hex"
          required={true}
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton>Registrar equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;

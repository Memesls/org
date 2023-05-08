import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
  //
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  const { type = "text" } = props;

  // "props" son propiedades de las funciones. es literalmente cualquier cosa que le quieras asignar, inspecciona los componentes para entender mejor
  return (
    <div className={`campo campo-${type}`}>
      <label>{props.title}</label>
      <input
        placeholder={props.placeholder + "..."}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;

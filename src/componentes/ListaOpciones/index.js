import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  //
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  // Cuando se trabaje con arrays, es preferible usar .map en lugar de .forEach (.map crea un nuevo array y lo edita, deja el original intacto)
  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo /*.toLowerCase()*/}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;

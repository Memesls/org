import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba"; // requiere instalacion en npm

const Equipo = (props) => {
  // Destructuracion
  // De esta manera te ahorras poner "props.datos" cuando llamas a los props en el style abajo
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, favorito } =
    props;

  return (
    <>
      {/* "lenght" en este caso mide la cantidad de objetos en la funcion Equipo */}
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }} // requiere instalacion en npm
        >
          <input
            type="color"
            className="color"
            value={colorPrimario}
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          />
          <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
          <div className="colaboradores">
            {props.colaboradores.map((unColaborador, index) => (
              <Colaborador
                datos={unColaborador}
                key={index}
                colorPrimario={colorPrimario}
                colorSecundario={colorSecundario}
                eliminarColaborador={eliminarColaborador}
                favorito={favorito}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;

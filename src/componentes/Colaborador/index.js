import "./Colaborador.css";
import { IoIosClose, IoIosHeart, IoIosHeartEmpty } from "react-icons/io"; // requiere instalacion en npm

const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorPrimario, colorSecundario, eliminarColaborador, favorito } =
    props;

  return (
    <div className="colaborador">
      <IoIosClose // requiere instalacion en npm
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
        style={{ color: colorSecundario }}
      />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav === true ? (
          <IoIosHeart
            color="red"
            onClick={() => favorito(id)}
            className="favorito"
          />
        ) : (
          <IoIosHeartEmpty onClick={() => favorito(id)} className="favorito" />
        )}
      </div>
    </div>
  );
};

export default Colaborador;

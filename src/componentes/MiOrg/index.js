// import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  //Estado - hooks
  //useState
  //const [estadoInicial(nombreVariable), estadoAlternativo(funcionActualiza)] = useState(estadoInicial)

  //   const [mostrar, actualizarMostrar] = useState(true);

  //   const manejarClick = () => {
  //     actualizarMostrar(!mostrar);
  //   };

  return (
    <section className="orgSection">
      <h3 className="title">Mi Organizacion </h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarEstado} />
    </section>
  );
};

export default MiOrg;

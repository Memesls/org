import { useState } from "react";
import { v4 as uuid } from "uuid"; // requiere instalacion en npm
import "./App.css";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";

function App() {
  //
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/memesls.png",
      nombre: "Rodrigo Ipince",
      puesto: "Estudiante",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Dev Ops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  // Operador ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarEstado = () => {
    actualizarMostrar(!mostrarFormulario);
  };
  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
    // Spread operator -> los "..." son indicador de un nuevo array generado a partir de otro original
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  // Eliminar colaborador

  const eliminarColaborador = (id) => {
    // el id del colaborador del array original es distinto al que le estamos pasando, el colaborador se pasa al nuevo array, efectivamente "eliminandolo"
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  // Hacer a un colaborador un favorito

  const favorito = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };

  // Actualizar color de equipo

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((unEquipo) => {
      if (unEquipo.id === id) {
        unEquipo.colorPrimario = color;
      }
      return unEquipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  // Crear nuevo equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  return (
    <div className="App">
      <Header />
      {mostrarFormulario === true ? (
        <Formulario
          equipos={equipos.map((unEquipo) => unEquipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      ) : (
        <></> // <- es basicamente un espacio vacio, para no tener que poner un div vacio
      )}
      {/* {mostrarFormulario && <Formulario /> (ambas opciones funcionan)*/}
      <MiOrg cambiarEstado={cambiarEstado} />
      {equipos.map((unEquipo) => (
        // cada vez que se trabaja con .map se debe incluir un key={}
        <Equipo
          datos={unEquipo}
          key={unEquipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === unEquipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          favorito={favorito}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

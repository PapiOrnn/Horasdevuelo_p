import React, { useEffect, useState } from "react";
import redes from "../../assets/redes sociales.jpg";
import negocios from "../../assets/5.png";

const Sidebar = () => {
  const [informacion, setInformacion] = useState([]);
  console.log(informacion);
  const consultarApi = async () => {
    const api = await fetch(
      "http://hp-api.herokuapp.com/api/characters/students"
    );
    const data = await api.json();
    console.log("inf", data[0]);
    setInformacion(data[0]);
  };

  useEffect(() => {
    consultarApi();
  }, []);
  // console.log("informacion", informacion);
  return (
    <div className="md:w-4/12 my-4">
      
      <div className="border   px-2 md:px-4 md:mt-32 pb-10">
        <h4 className="text-xl font-semibold text-gray-800 mt-10 mb-3 ">
          <strong>Enseña</strong>
        </h4>
        <p className="text-gray-600 text-left md:text-xl mb-2">
          <strong>¿En cuántos empleos te dicen que no te contratan por no tener
          experiencia?</strong> Muchas personas tienen la experiencia, teniendo en cuenta
          que sus prácticas y estudio tomaron múltiples horas de trabajo
          práctico, que en muchos casos no son vistas por los empleadores.
          Podremos insertar tareas y tiempos a proyectos, así como puntuaciones
          del equipo de trabajo a nuestras hojas de vida, aumentar nuestro
          perfil en manejo y uso de nuevas herramientas.
        </p>
        <img src={redes} alt="" className="my-4" />
        <p className="text-gray-600 text-left md:text-xl mb-2">
        <strong>¿Estás listo para salir al mundo laboral y te da miedo fallar? </strong>Afianza
          tus conocimientos con personas que necesitan iniciarse en este mundo,
          puedes ser el líder del proyecto y garantizar el proyecto del mismo,
         <strong> te aseguro que esta experiencia va a cambiar tu manera de trabajar.</strong>
        </p>
        <p className="text-gray-600 text-left md:text-xl mb-2">
        <strong>Aprende a un nivel más profesional, enseñando a otra persona.</strong> Queremos
          lograr capacidades de fortalecimiento de los conocimientos, integrando
          la metodología de guiar a una persona, con lo cual esperamos puedas
          consolidar los conocimientos en diversas áreas.
        </p>
        <h4 className="text-xl font-semibold text-gray-800 mt-10 mb-3">
          Aprende
        </h4>
        <img src={negocios} alt="" className="my-4" />
        <p className="text-gray-600 text-left md:text-xl">
        <strong>¿te cansaste de hacer el back, el front, corregir maquetados y ser tu
        propio QA? Estoy seguro, que en muchos casos esta metodologia retrasa el proceso de
        formación de muchas personas.</strong>Si bien es cierto que tener habilidades en todas las áreas es
        muy positivo, podremos involucrarnos de forma directa en la
        especialidad que pretendamos desarrollar.  </p>
        <p className="text-gray-600 text-left md:text-xl">
        <strong>Desarrollemos proyectos que nos sumen
        experiencia en la hoja de vida y sean una herramienta para iniciarnos en
        el mundo laboral. </strong>Puedes calificar el desempeño y habilidades del líder
        del proyecto, trabaja con las personas adecuadas a tus horarios de
        trabajo y disponibilidad.</p>
      </div>
    </div>
  );
};

export default Sidebar;

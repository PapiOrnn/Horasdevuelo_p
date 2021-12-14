import React from "react";
import vanerhoras from "../../assets/4.png";
const Main = () => {
  return (
    <main className="md:w-8/12 md:px-8 min-h-screen mt-30">
      <article className="" id="Quienes Somos">
        <h2
          className="text-2xl font-bold text-gray-800 my-4 "
          style={{ fontFamily: " Merriweather, serif;" }}
        >
          Quienes Somos
        </h2>
        <p className="text-gray-600 text-left md:text-xl my-8 ">
          Somos un grupo de estudio, queremos asociarnos mediante la invitación
          a diversos roles de la programación, creando grupos
          interdisciplinares, esperamos poder apoyar al desarrollo profesional
          de muchos estudiantes que quieren acumular horas en la participación
          de proyectos, para un día ser un gran piloto. Espero sea de su agrado
          <strong>Horas de Vuelo + Horas + Práctica</strong>
        </p>

        <div className="my-4 mx-auto">
          <img src={vanerhoras} alt="" className="" />
        </div>
      </article>
      <article className="my-10" id="transformacion-digital">
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-8  ">
          El proceso inicia con la conformación de los grupos de trabajo,
          mediante un análisis de los conocimientos de los interesados. El
          equipo estaría compuesto por mínimo 6 integrantes, dos desarrolladores
          con experiencia, dos desarrolladores más junior, maquetador o
          diseñador y analista de bases de datos.
        </h2>
        <ul className="list-disc pl-8">
          <li className=" mb-6">
            <p className="text-xl font-bold text-gray-800 my-2">
              Se trata de poner en práctica ejercicios de la vida cotidiana,
              desarrollados mediante trabajo colaborativo. Los proyectos a
              desarrollar, <strong>pueden ser del estilo:</strong>
              “Se realizarán proyectos que cumplan las necesidades de control,
              administración y venta de un local comercial.”
            </p>
            <span className="text-gray-600 text-left md:text-xl">
              
              <strong>
                El equipo definirá unas tareas y un proyecto de común acuerdo a
                desarrollar.
              </strong>
            </span>
          </li>

          <li className=" mb-6">
            <p className="text-xl font-bold text-gray-800 my-2">
              Canal de Slack
            </p>
            <span className="text-gray-600 text-left md:text-xl">
              https://join.slack.com/t/horas-de-vuelo/shared_invite/zt-10begq9uo-Mui2pCet6W_b~d5JXZEvpg
            </span>
          </li>

          <li className=" mb-6">
            <p className="text-xl font-bold text-gray-800 my-2">Beneficios</p>
            <span className="text-gray-600 text-left md:text-xl">
              Se abrirá una tienda virtual, con los productos de software
              generados por la comunidad.
            </span>
            <p>
            <span className="text-gray-600 text-left md:text-xl">
              A futuro, podremos invitar a diferentes casas productoras de
              software a revisar nuestro perfil y garantizar nuestro desempeño
              en un entorno real.
            </span></p>
            <p>
            <span className="text-gray-600 text-left md:text-xl">
              Ampliar nuestro círculo social en un ambiente profesional.
            </span></p>
          </li>

          

         
        </ul>

        <div className="my-4 mx-auto">
          <img src={vanerhoras} alt="" className="" />
        </div>
      </article>
    </main>
  );
};

export default Main;

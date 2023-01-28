import './index.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Error from './components/Error';
import React, { Fragment, useState, useEffect } from 'react';
import Footer from './components/Footer';
import Img from './components/Img';
function App() {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });

  const [consultar, guardarConsultar] = useState(false);
  const { ciudad, pais } = busqueda;
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);
  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = 'd7019cb0dbfc92a618b1f238e2aee30b';

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);
        //Detecta si hubo resultado incorrectos en la consult
        if (resultado.cod === '404') {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    };
    consultarAPI();
  }, [consultar]);

  let componente;
  if (error) {
    componente = (
      <Error ciudad={busqueda} mensaje=" Al parecer no existe en " />
    );
  } else {
    componente = <Resultado clima={resultado} />;
  }

  return (
    <Fragment>
      <Header diseño="creando algo nuevo" titulo="Clima con ReactJS" />

      {/* Contenedor de la grilla de contenido */}

      <div className="grid grid-row-2 sm:grid-flow-col">
        <div className="mt-4 ml-5 mr-5 sm:mt-16">
          <Formulario
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsultar={guardarConsultar}
          />
        </div>
        <div className="ml-5 mr-5 mt- sm:mt-32">
          <div>{componente}</div>
          <div className="flex justify-around mt-4">
            <Img
              href="https://www.instagram.com/joselin_alfaro03/?fbclid=IwAR22VUphhmeseMv6MO-U6n2_ta_H9zhnCwr8Kb8YAdBg4DnAeLSYE4HW5Ks"
              alt="logo_instagram"
              src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
            />
            <Img
              href="https://www.facebook.com/profile.php?id=100006376545862"
              alt="logo_facebook"
              src="	https://cdn-icons-png.flaticon.com/512/2504/2504903.png"
            />
            <Img
              href="https://github.com/benyalf?tab=repositories"
              alt="logo_github"
              src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png"
            />
          </div>
        </div>
      </div>
      {/*  */}
      {/* Footer */}
      <Footer />
      {/*  */}
    </Fragment>
  );
}

export default App;

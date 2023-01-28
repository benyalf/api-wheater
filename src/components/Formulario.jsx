import React, { Fragment, useState } from 'react';
import Error from './Error';
const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  //Leyendo el formulario

  //extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  //funcion que colaca los elementos en el state
  const handleChange = (e) => {
    //actualizar state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const [error, guardarError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //validado
    if (ciudad.trim() === '' || pais.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);

    //pasar al componente principal
    guardarConsultar(true);
  };
  return (
    <Fragment>
      <div className="grid w-full grid-flow-row grid-rows-1 gap-4 ">
        <div className="col-span-2 col-start-2 mx-auto">
          <img
            src="https://media.tenor.com/1najHJ089I0AAAAS/creative-creative-brickz.gif"
            className="w-[250px] rounded-sm sm:mx-auto sm:w-[300px]"
            alt="Gif"
          />
        </div>
        <div className="w-full col-span-4 rounded-lg bg-[#CAE2BC] sm:mx-auto sm:w-2/3">
          <form onSubmit={handleSubmit} className="mx-4 my-4">
            {error ? (
              <Error mensaje="Todos los cambios son obligatorios" />
            ) : null}
            <div>
              <label
                name="ciudad"
                htmlFor="ciudad"
                className="mb-2 text-sm font-medium text-left text-gray-900 dark:text-black-200"
              >
                Ingrese el nombre de una ciudad
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="ciudad"
                name="ciudad"
                value={ciudad}
                className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#92AF83] dark:border[#DBF9B8] dark:placeholder-[#595959] dark:text-[#242038] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ingrese una ciudad"
              />
            </div>

            <div className="mt-2 sm:mt-6">
              <label
                htmlFor="pais"
                className="mb-2 text-sm font-medium text-left text-gray-900 dark:text-black-200"
              >
                Seleccione un pais
              </label>
              <select
                name="pais"
                id="pais"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#92AF83] dark:border[#DBF9B8] dark:placeholder-[#595959] dark:text-[#242038] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Seleccione un pais"
                value={pais}
                onChange={handleChange}
              >
                <option value="">-- Seleccione un país --</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>
              </select>
            </div>
            <div className="flex justify-center mt-4 self-baseline">
              <button
                type="submit"
                name="buscar el clima "
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Formulario;

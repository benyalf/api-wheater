import React from 'react';
import PropTypes from 'prop-types';
const Resultado = ({ clima }) => {
  //Extrayendo resultados
  const { name, main } = clima;

  if (!name) return null;
  const kelvin = 273.15;

  return (
    <div className="w-full h-auto mx-auto rounded-xl sm:w-2/3 sm:h-auto bg-slate-200">
      <div className="flex justify-center p-2 sm:p-2 justify-items-center">
        <p>
          temperatura en <span className="city">{name}</span>
        </p>
      </div>
      <div className="flex justify-center">
        <span className="text-6xl text-bold">
          {parseFloat(main.temp - kelvin, 10).toFixed()}
        </span>
        <span>&#x2103;</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
          />
        </svg>
      </div>
      <div className="flex justify-center gap-4">
        <div>
          <p> temperatura maxima {parseFloat(main.temp_max).toFixed()}°</p>

          <p> temperatura minima {parseFloat(main.temp_min).toFixed()}°</p>
        </div>
      </div>
    </div>
  );
};

export default Resultado;

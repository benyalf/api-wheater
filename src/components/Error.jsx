import React from 'react';
import PropTypes from 'prop-types';
const Error = ({ mensaje, ciudad }) => {
  return (
    <div
      className="w-1/2 p-4 mx-auto mb-4 text-sm bg-green-600 rounded-lg text-slate-800 "
      role="alert"
    >
      <span className="font-medium">
        {ciudad.ciudad}
        {mensaje}
        {ciudad.pais}
      </span>
    </div>
  );
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};
export default Error;

import React from 'react';

const Redes = ({ src, alt, href }) => {
  return (
    <div>
      <a href={href}>
        <img className="w-[35px]" src={src} alt={alt} />
      </a>
    </div>
  );
};

export default Redes;

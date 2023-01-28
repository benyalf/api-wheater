import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <Fragment>
      <header className="container flex flex-wrap justify-between mx-auto my-4 text-center ">
        <div className="flex-1 w-full  bg-[#92AF83]  justify-self-start to-transparent sm:max-w-sm max-h-full ">
          <p className="float-none text-3xl font-extrabold text-slate-900">
            {props.titulo}
          </p>
        </div>
        <nav className="flex flex-wrap justify-center">
          <p className="mt-3 text-clip">
            Proyecto de practica llamando API del clima
          </p>
          <p className="text-3xl bg-gradient-to-l from-transparent to-[#CAE2BC] font-extralight">
            {props.diseño}
          </p>
        </nav>
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
export default Header;

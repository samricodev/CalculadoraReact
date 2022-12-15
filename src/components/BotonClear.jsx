import React from "react";
import '../css/BotonClear.css'

const BotonClear = (props) => {
  return(
    <button 
      onClick={props.manejarClear}
      className="btn-clear">
      { props.children }
    </button>
  );
}

export default BotonClear;
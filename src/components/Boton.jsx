import '../css/Boton.css';

function Boton(props){
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

  return(
    <button
      onClick={ () => props.manejarClick(props.children)} 
      className={`btn-c ${ esOperador(props.children) ? 'operador' : ''}`.trim()}>
      { props.children }
    </button>
  );
}

export default Boton;
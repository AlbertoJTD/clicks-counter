import React from "react";
import '../styles/Button.css'

function Button( { text, isRestartButton, handleClick } ) { // Properties to be used
  return (
    <button className={ isRestartButton ? 'restart' : 'click' } onClick={ handleClick }>
      { text }
    </button>
  );
}

export default Button;
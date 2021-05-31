import React from 'react';



function Button({label, onBtnClick}) {
  return(
    <button onClick={onBtnClick}>{label}</button>
  );
}


export default Button;


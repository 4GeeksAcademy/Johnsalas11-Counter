import React from "react";

export const Counter = () => {
    return (
      <div class="contenedor-principal">
      <div class="contenedor-interno">
        <div id="Cronómetro">00:00:00</div>
        <div class="contenedor-boton">
          <button id="boton-inicio-pausa" class="boton iniciar">
            <i class="bi bi-play-fill"></i>
          </button>
        </div>
      </div>
    </div>
    );
};

/* <div className="four">{props.digitFour}</div>
<div className="three">{props.digitThree}</div>
<div className="two">{props.digitTwo}</div>
<div className="one">{props.digitFour}</div> */
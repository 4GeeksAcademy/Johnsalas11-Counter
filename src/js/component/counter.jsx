import React from "react";


export const Counter = () => {
    return (
      <div className="contenedor-principal">
        <div className="counter-container" id='crono'>00:00:00</div>
      </div>
    );
};

export const counter = document.querySelectorAll('crono');

  let [horas, minutos, segundos] = [0, 0, 0];

  let intervaloDeTiempo;
  intervaloDeTiempo = window.setInterval(actualizarCronometro(), 1000);

  function actualizarCronometro() {
      segundos++;
  
      if (segundos / 60 === 1) {
          segundos = 0;
          minutos++;
          
          if (minutos/ 60 === 1){
              minutos = 0;
              horas++;
          }
      }
      const segundosUnaCifra = asignarCifra(segundos) ;
      const minutosUnaCifra = asignarCifra(minutos) ;
      const horasUnaCifra = asignarCifra(horas) ;
      counter.innerText = `${horasUnaCifra}:${minutosUnaCifra}:${segundosUnaCifra}`;
  }

  function asignarCifra(unidadDeTiempo) {
      return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
      
 }
    
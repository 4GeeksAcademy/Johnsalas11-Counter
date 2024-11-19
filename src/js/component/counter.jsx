import React from "react";


export const Counter = () => {
  let [horas, minutos, segundos] = [0, 0, 0];


  function actualizarCronometro() {
    segundos++;

    if (segundos / 60 === 1) {
      segundos = 0;
      minutos++;

      if (minutos / 60 === 1) {
        minutos = 0;
        horas++;
      }
    }
    const segundosUnaCifra = asignarCifra(segundos);
    const minutosUnaCifra = asignarCifra(minutos);
    const horasUnaCifra = asignarCifra(horas);
    document.getElementById("crono").innerText = `${horasUnaCifra}:${minutosUnaCifra}:${segundosUnaCifra}`;
  }

  function asignarCifra(unidadDeTiempo) {
    return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;
  }
  setInterval(actualizarCronometro, 1000);
  return (
    <div className="contenedor-principal">
      <div className="counter-container" id='crono'>00:00:00</div>
    </div>
  );
};
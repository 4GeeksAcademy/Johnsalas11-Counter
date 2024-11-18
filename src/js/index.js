//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>) ;

const cronómetro = document.getElementById('Cronómetro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');

let [horas, minutos, segundos] = [0, 0, 0];
let intervaloDeTiempo;
let estadoCronometro = 'pausado';

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
    
    cronómetro.innerText = `${horasUnaCifra}:${minutosUnaCifra}:${segundosUnaCifra}`;
}
function asignarCifra(unidadDeTiempo) {
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}


botonInicioPausa.addEventListener('click', function() {
    if(estadoCronometro === 'pausado') {
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
        botonInicioPausa.classList.remove('iniciar');
        botonInicioPausa.classList.add('pausar');
        estadoCronometro = 'activo';

    } else {
        window.clearInterval(intervaloDeTiempo);
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>'
        botonInicioPausa.classList.remove('pausar');
        botonInicioPausa.classList.add('iniciar');
        estadoCronometro = 'pausado';
    }
})



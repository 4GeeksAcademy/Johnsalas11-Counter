import React from "react";
// import { actualizarCronometro, asignarCifra } from "./index.js";
import { Counter } from "./counter";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = (props) => {
	return (
		<div className="body">
			<Counter/>
		</div>
	);
};

export default Home;

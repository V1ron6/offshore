import React from "react";
import arrowRight from "./hand-point-right.svg"
import './styles/ftxt.css';

const ftxt=()=>{

	return(
 <>
	<div className="txt" role="hero">
		<p id="mem"> our christmas collection</p>
		<h1>the new arrival  <span>offshore</span> devices</h1>
	<p id="sem">discover new device and accesories of the 21st centuary </p>
<button> shop now <img src={arrowRight} id="hand" alt="arrowripicture"  width={17} height={17}></img></button>	
	</div>
  </>
	);
}

export default ftxt;
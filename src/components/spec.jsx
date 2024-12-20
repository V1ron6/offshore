import React from "react";
import './styles/spec.css';
import Logo from './top.js';

//imageResolution: 
import xt from './x-twitter.svg';
import ig from './instagram.svg';
import fb from './facebook.svg';

const spec =()=>{
	const wide ="40";
	const heightd ="40";
	return(
<>
<center>
<div className="sig">
	<p id="gg">Sign Up For Updates & Newsletter</p>
	<input type="email" placeholder="bytebandit@offshore.com" />
	<button>Sign up</button>
</div>
</center>
<div className="black">
	<Logo />
	<p>lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, error</p>
	<img src={xt} width={wide} height={heightd} />
	<img src={ig} width={wide} height={heightd} />
	<img src={fb} width={wide} height={heightd} />



	<p> Terms & conditions</p>
</div>

</>
	);
}
export default spec ;
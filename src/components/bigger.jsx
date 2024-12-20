import React from "react";
import './styles/bigger.css';
import imp from './project/headset.jpg';
import shield from './shield.svg';
import free from './cart-shopping.svg';
import love from './hand-holding-heart.svg'
const bigger =()=>{
	return(
		<>
			<div className="big">
			<center>
			<img src={imp} id="zact" />
			
			<div className="clould">
   <div className="free-shipping">
		<img src={free}   width={40} height={40}/>
		<p id="ep1">free shipping</p>
		<p id="ep2">
			Enjoy seamless shopping withour complimentary shipping service.
		</p>
	 </div>
	 <div className="secured">
	 <img src={shield}  width={40} height={40}/>
	 <p id="ep1">secured payment</p>
		<p id="ep2">Experience worry-free transactions with our secure payment options.</p>
	 </div>
	 <div className="lovehelp">
	 <img src={love}  width={40} height={40}/>
	 <p id="ep1">love to help you</p>
		<p id="ep2">Our dedicated team is here to assist you every step of the way.</p>
	 </div>
	 </div>
	 </center>
			</div>
		</>
	);
}

export default bigger;
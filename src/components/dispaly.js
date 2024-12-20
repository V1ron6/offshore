import React from "react";
import './styles/display.css';
import {useState} from 'react';

//import second from 'first'

import img1 from './project/iwatch.jpg';
import img2 from './project/headset.jpg';
import img3  from './project/vr2.jpg';
import img4 from './project/airpod1.jpg';



const display =()=>{
	return(
<><div className="brshct">
	<p id="net">1k+ <span id="gloto">brands</span></p>
	<p id="net">300 <span id="gloto">shops</span></p>
	<p id="net">100k+ <span id="gloto">customers</span></p>
</div>
	<div id="seq">
	<center>
	<div id="viron">
	<>
	<img src={img1}  id="imgs"  alt="needsfixing"  	 width={50} height={50}/>
   <img src={img2}  id="imgs"  width={50} height={50}/>
   <img src={img3}  id="imgs"     width={50} height={50}/>
   <img src={img4}  id="imgs"     width={50} height={50}/>
	 </>
	</div>
	</center>


	</div>
</>
	);
}


export default display;
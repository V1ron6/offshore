import React from 'react';
import './styles/dark.css';


import img1 from './phone1.jpg';
import img2 from './project/s22ultra.jpg';
import img3 from './project/s43.jpg';
import img4 from './project/iphone2.jpg';
import img5 from './project/pixel.jpg';



const mobile=()=>{
	return(
<>
<p id="lie">our <span>popular</span> products</p>
<p id="lie2">experience a top-notch quality and satisfaction with our sought after selections.
discover a world of comfort and value</p>
<p id='lie'>mobile devices</p>
<div className="child">

	<div className='phones'>
	<center>
		<img src={img1}  id="phone"></img>
		</center>
		<p id="star-rating">
			<span id="gt">&#9733; </span>
			<span id="gt1">4.5</span>
		</p>
		<p id="lo">infinix smart 8  <span id="price">$200.00</span> </p>
	</div>

	<div className='phones'>
	<center>
		<img src={img2}  id="phone"></img>
		</center>
		<p id="star-rating">
			<span id="gt">&#9733; </span>
			<span id="gt1">5.0</span>
		</p>
		<p id="lo">samsung s24 ultra  <span id="price">$700.00</span> </p>
	</div>
	<div className='phones'>
	<center>
		<img src={img3}  id="phone"></img>
		</center>
		<p id="star-rating">
			<span id="gt">&#9733; </span>
			<span id="gt1">4.5</span>
		</p>
		<p id="lo"> motorola <span id="price">$600.00</span> </p>
	</div>
	<div className='phones'>
	<center>
		<img src={img5}  id="phone"></img>
		</center>
		<p id="star-rating">
			<span id="gt">&#9733; </span>
			<span id="gt1">5.0</span>
		</p>
		<p id="lo">google pixel  <span id="price">$600.00</span> </p>
	</div>
	<div className='phones'>
	<center>
		<img src={img4}  id="phone"></img>
		</center>
		<p id="star-rating">
			<span id="gt">&#9733; </span>
			<span id="gt1">4.5</span>
		</p>
		<p id="lo">iphone 15 pro max  <span id="price">$900.00</span> </p>
	</div>
	<div className='phones'>
	<center>
		<p id="str">
		<a href="#">more</a>
		</p>
	
		</center>
		
	</div>
	</div>
	
</>


	);
}
export default mobile;
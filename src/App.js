import React  from 'react';
import './App.css';
import Top from "./components/top.js";
import Fxtx from "./components/firsttxt.js";
import Mobile from "./components/dark.js";
import Laptop from "./components/laptop.jsx";
import Beauty from "./components/beauty.jsx";
import Display from "./components/dispaly.js";
import Access from "./components/theRest.jsx";
import Bigger  from "./components/bigger.jsx";
import Spec from "./components/spec.jsx";
const App = () =>{
 return(
	<>
			<Top />
			<Fxtx />
			<Display />
			<>
            <Mobile />
	        <Laptop />
			<Beauty />
			</>
			<Access />
			<Bigger />
			<Spec />
	</>

	);
}

export default App; 
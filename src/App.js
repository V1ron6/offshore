import React  from 'react';
import {useState,useEffect} from 'react';
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
import Modal from './components/modal.jsx'; 

const App = () =>{
	const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

 return(
	<>

	<Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Welcome to the OffShore</h2>
        <p> we currently undergoing a remodel</p>
        <button onClick={closeModal}>Close from inside</button>
      </Modal>
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
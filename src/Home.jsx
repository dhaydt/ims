import React from 'react';
import web from "./images/img2.svg";
import {NavLink} from "react-router-dom";
import Commom from "./Commom";

const Home =() => {
	return (
		<>
			<Commom name='Tempat membuat website' imgsrc={web} visit="/service" btname="Mari Mulai" />

		</>
		);
};
export default Home;

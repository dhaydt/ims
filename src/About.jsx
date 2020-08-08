import React from 'react';
import web from "./images/img.svg";
import {NavLink} from "react-router-dom";
import Commom from "./Commom";

const About =() => {
	return (
		<>
			<Commom name='Selamat datang di Website kami' imgsrc={web} visit="/contact" btname="Hubungi Sekarang" />
		</>
		);
};
export default About;
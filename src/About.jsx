import React from "react";
import Common from "./Commno";
import web from "../src/Images/web.svg";
import { NavLink } from "react-router-dom";

const About = () => {
    return(
        <>
            <Common name="Welcome to About Page" imgsrc={web} visit="/contact" btname="Contact Now"/>
        </>
    );
};

export default About;
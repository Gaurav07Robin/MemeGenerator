import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/web.svg";
import ver from "../src/Images/ver.jpg";
const Home = () => {
    return(
        <>
        <div className="first-div">
        <h1>Welcome to <strong>Meme Page</strong></h1>
        
       
            <div className="col-md-3 header-img">
            <div className="btn">
            <NavLink to="/service" className="btn btn-primary">Get Started</NavLink>
        </div>
                <img src={ver} style={{height:'50%', objectFit:'fill'}} alt="cheems"/>
            </div>
        </div>
</>
    );
};

export default Home;
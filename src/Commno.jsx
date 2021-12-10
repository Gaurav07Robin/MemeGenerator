import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/web.svg";
const Common = (props) => {
    return(
        <>
        <div className="first-div">
        <h1><bold>You can upload video here!</bold></h1>
        <div className="btn">
            <NavLink to={props.visit} className="btn btn-primary">{props.btname}</NavLink>
        </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={props.imgsrc} className="img-fluid animated" alt="animated"/>
        </div>
        </>
    );
};

export default Common;
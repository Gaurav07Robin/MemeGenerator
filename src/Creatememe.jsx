import React from "react";


export const Creatememe = ({template, onClick}) => {


    return(
       
        <img
        style = {{width : 200,padding:"0px ",borderRadius:"20px",backgroundColor:"yellow",marginBottom:"20px"}}
        
        key = {template.id}
        src = {template.url}
        alt = {template.name}
        onClick = {onClick}
        />
        
    );
};

export default Creatememe;


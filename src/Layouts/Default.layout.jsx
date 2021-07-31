import React from "react";
import Navbar from "../Components/Navbar/navbar.components";
//components

const DefaultLayout=(props)=>{
    return (
        <>
            <Navbar/>
            {props.children}


        </>
    );
};
export default DefaultLayout;
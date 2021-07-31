import React from "react";
import {BsChevronBarRight} from "react-icons/bs"; 
const Navsm=()=>{
    return(
        <>
        <div className="text-white">
            <div>
                <h3>It All Starts here!</h3>
 
                <span className=" flex items-center">Kadapa
                    <BsChevronBarRight/> </span>
            </div>
        </div>
        </>
    )
}
const Navbar=()=>{
    return(
        <>
        <nav className="bg-bms-700">
            <div className="md:hidden">
                <Navsm/>

            </div>
        </nav>

        </>

    );

};
export default Navbar;
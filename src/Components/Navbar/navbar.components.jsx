import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions"; 
import {AiOutlineClockCircle} from "react-icons/ai";
import Login from "../../forms/login";
import MyFacebookLoginButton from "../../forms/another";



const Navsm=()=>{
    return(
        <>
        <div className="text-black font-mono">
            <div className="flex justify-between px-14 py-8">
                
 
                <span className=" flex items-center gap-4">
                    <h4 className="text-green-900 text-4xl text-opacity-100">C</h4>
                <h3 className="text-2xl">Course Pro</h3>
                     </span>
                <div className="flex items-center gap-4">
                    <div >
                    <MyFacebookLoginButton/>

                    </div>
                    <Login/>
                    

                    
                    
                       
                   
                    <div>
                        <button className="bg-core-400 px-3 rounded-md hover:bg-bms-500 py-4">
                            Register
                        </button>
                    </div>
                </div>
                   
            </div>
        </div>
        </>
    )
}
const Navbar=()=>{
    return(
        <>
        <nav className="">
            <div>
                <Navsm/>

            </div>
        </nav>
        
        <div className=" flex px-20 gap-10 bg-core-400 items-center">
            <div>
            <h6 className="  text-4xl ">
            Anytime,Anywhere
            Learn on your Schedule 
              
             
            From your Device </h6>
            <div className="display text-2xl">
            <h3 >
                We belive everyone has the capacity
                to the <h5 className="text-white">Course Pro</h5>
                is a place where people develop their own potential 
            </h3>
            </div>
            
            <div>
                <button className=" text-white bg-bms-900 px-0 py-3 rounded-md hover:bg-bms-400">
                    Let's  Get Start
                </button>
            </div>
            </div>
            <div className="max-w-full bg-white">
            <img className="max-w-6xl" src="https://images.radio.com/aiu-media/GettyImages1284048666-62395b66-b1ad-4ce3-b49a-6649fcfd292a.jpg?width=800"/>
            </div>
            
        </div>
        <div className="flex items-center justify-between p-14 text-4xl gap-14 bg-greyc-100">
            <div>
            <h3 >Total Students </h3>
            <h2> 5140</h2>

            </div>
            <div>
            <h3>Partners </h3>
            <h2> 4123</h2>
            </div>
            <div>
            <h3>Affililate Distribution </h3>
            <h2> 4.1 Lac</h2>

            </div>
            
        </div>
        <div className=" font-serif decoration-clone text-gray-900 mx-96 my-28 ">
            <h3 className=" mx-44 text-green-500 text-2xl  px-14">Courses</h3>
            <h4 className="text-4xl mx-24">Our Most Popular Courses</h4>
        </div>
        <div className=" flex p-10 gap-10 justify-between">
            <Card style={{
          width: 500,
          backgroundColor: "white",
          rounded:20,
          borderRadius:20,
        }}>
            <div className="flex-col p-4">
            <div className="max-w-full" >
                <img className="max-w-full" src="https://info.getadministrate.com/hs-fs/hubfs/Imported_Blog_Media/shutterstock_1006793614-1.jpg?width=788&height=525&name=shutterstock_1006793614-1.jpg"/>
            </div>
            <div>
                <h2 className="text-2xl">
                    Ultimate Business Intelligence Analyst A to Z Course 2021
                </h2>
                <h4>46,965 Student</h4>
                <div className="flex items-center gap-2"><AiOutlineClockCircle/><h1 className="text-grey-400">11 hr 20 mins</h1></div>
            </div>
            </div>
            </Card>
            <Card style={{
          width: 500,
          backgroundColor: "white",
          rounded:20,
          borderRadius:20,
        }}>
            <div className="flex-col p-4">
            <div className="max-w-full" >
                <img className="max-w-full" src="https://internationalbusinessguide.org/wp-content/uploads/2016/08/business.jpg"/>
            </div>
            <div>
                <h2 className="text-2xl">
                    Ultimate Business Intelligence Analyst A to Z Course 2021
                </h2>
                <h4>6,995 Student</h4>
                <div className="flex items-center gap-2"><AiOutlineClockCircle/><h1 className="text-grey-400">6 hr 20 mins</h1></div>
            </div>
            </div>
            </Card>
            <Card style={{
          width: 500,
          backgroundColor: "white",
          rounded:20,
          columnGap:10,
          borderRadius:20,
        }}>
            <div className="flex-col justify-around p-4 ">
            <div className="max-w-full" >
                <img className="max-w-full" src="https://image.shutterstock.com/image-photo/student-studying-on-table-260nw-719240530.jpg"/>
            </div>
            <div>
                <h2 className="text-2xl">
                    Ultimate Business Intelligence Analyst A to Z Course 2021
                </h2>
                <h4>46,965 Student</h4>
                <div className="flex items-center gap-2"><AiOutlineClockCircle/><h1 className="text-grey-400">12 hr 20 mins</h1></div>
            </div>
            </div>
            </Card>
            
            </div>
            

        

   
        

        </>

    );

};
export default Navbar;
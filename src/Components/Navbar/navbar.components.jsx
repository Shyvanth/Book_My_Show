import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions"; 
import {AiOutlineClockCircle,AiOutlineArrowDown,AiOutlineArrowRight} from "react-icons/ai";
import Login from "../../forms/login";
import MyFacebookLoginButton from "../../forms/another";
import Register from "../../forms/register";



const Navsm=()=>{
    return(
        <>
        <div className=" text-black font-mono ">
            <div className="flex justify-around  px-14 py-8">
                
 
                <span className=" flex items-center  gap-4">
                    <h4 className="text-greyc-900 text-6xl text-opacity-100">C</h4>
                <h3 className="text-4xl">Course Pro</h3>
                     </span>
                     
                <div className="flex  gap-4">
                    
                    <div>
                    <Login/>
                    </div>


                    
                    
                       
                   
                    <div>
                        <button className="bg-core-400  rounded-md hover:bg-white-500 ">
                            
                            <div>
                                <Register/>
                            </div>
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
                <button className=" text-white bg-bms-900 px-3 py-3 rounded-md hover:bg-bms-400">
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
            <div>
               <h3 className="text-green-500 m-6">Top Earners</h3   > 
               <div className="text-2xl m-6">
               <h6> Transforming Your Ideas</h6>
               <h6>Into Reality</h6>
               </div>
               
            </div>
            <div className="flex gap-40 text-xl m-5">
                <div className=" max-w-full p-4">
                    <img className="max-w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvyG6CFe8CM7rpdD8qxAg3qx9PIv073Kw6w&usqp=CAU"/>
                <h6>Rs.8,00,000</h6>
                </div>
                <div className=" max-w-full p-4">
                    <img className="max-w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASwfpuk_gHgmSv3H1pok02nHq0h_4QZ7tGg&usqp=CAU"/>
                <h6>Rs.6,00,000</h6>
                </div>
                <div className=" max-w-full p-4">
                    <img className="max-w-full" src="http://www.egpet.net/vb/images/imported/2010/04/7.jpg"/>
                <h6>Rs.4,00,000</h6>
                </div>
                <div className=" max-w-full p-4">
                    <img className="max-w-full" src="data:image/jpeg;base64,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"/>
                <h6>Rs.4,50,000</h6>
                </div>
                
               

            </div>
            <div className=" font-bold p-5 mx-8">
                    <h1 className="text-green-600 text-xl">Refer</h1>
                    <h1 className="font-extrabold text-2xl">How it's Work</h1>
                </div>
                <div className=" p-12 text-bold text-xl">
                    
                
                    <div className="flex p-10 items-center place-items-end">
                    <AiOutlineArrowRight/><AiOutlineArrowRight/>
                        <h1>Apply Referal Code</h1>

                    </div>
                    <div className="flex p-10 gap-10 items-center place-items-end">
                    <AiOutlineArrowRight/><AiOutlineArrowRight/>
                        <h1> Refer the course to friends </h1>

                    </div>
                    <div className="flex gap-20 items-center p-10 place-items-end">
                    <AiOutlineArrowRight/>
                    <AiOutlineArrowRight/>
                        <h1>Earn Upto 80% on courses</h1>

                    </div>

                </div>
            

        

   
        

        </>

    );

};
export default Navbar;
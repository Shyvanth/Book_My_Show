import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions"; 
import {AiOutlineClockCircle,AiOutlineArrowDown,AiOutlineArrowRight,AiFillCaretRight,AiTwotoneMail} from "react-icons/ai";
import {GiNothingToSay} from "react-icons/gi";
import {BiPhoneCall,BiCurrentLocation} from "react-icons/bi"
import Login from "../../forms/login";
import MyFacebookLoginButton from "../../forms/another";
import Register from "../../forms/register";



const Navpc=()=>{
    return(
        <>
        <div className=" text-black font-mono  ">
            <div className="flex justify-around lg:h-auto
            lg:w-auto lg:m-auto px-14 py-8 sm:m-96 sm:w-0">
                
 
                <span className=" flex items-center  gap-4">
                    <h4 className="text-green-800 font-extrabold text-6xl text-opacity-100">C</h4>
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
        
            
        <nav className="   ">
            <div>
                <Navpc/>

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
                <h6 className="flex items-center"> <AiFillCaretRight/>Rs.8,00,000</h6>
                </div>
                <div className=" max-w-full p-4">
                    <img className="max-w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASwfpuk_gHgmSv3H1pok02nHq0h_4QZ7tGg&usqp=CAU"/>
                <h6 className="flex items-center"> <AiFillCaretRight/>Rs.6,00,000</h6>
                </div>
                <div className=" max-w-full p-4">
                    <img className="max-w-full" src="http://www.egpet.net/vb/images/imported/2010/04/7.jpg"/>
                <h6 className="flex items-center"> <AiFillCaretRight/>Rs.4,00,000</h6>
                </div>
                <div className=" max-w-full p-4">
                    <img className="max-w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgwXes-lZmTZsLIzaGzF1N0rkXiRd_jC1Xg&usqp=CAU"/>
                <h6 className="flex items-center"> <AiFillCaretRight/>Rs.4,50,000</h6>
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
                <div className="p-4 m-4">
                    <h1 className="text-xl text-green-600"> Testimonials</h1>
                    <div>
                    <h1 className="text-6xl text-extrabold ">Check Out What Our  </h1>
                    <h1 className="text-6xl text-extrabold ">Students Think About Us  </h1>
                    </div>
                </div>
                <div className=" italic flex shadow-2xl  gap-32 m-16 ">
                    <Card style={{ 
          backgroundColor: "white",
          rounded:20,
          borderRadius:20,
        }}>
                        <h1 className="text-xl p-4">
                            It's A Comprehension Online Learning Platform For Everyone Looking To Learn and Course Pro.Providing
                            This Platform which is very beneficial for Practicals,Students Can Revisse Everything At Home Like dissection 
                            And States
                            < GiNothingToSay/> <div><h1 className="text-bold">Ravi Teja </h1>
                            <h1 className="font-light">Yesterday </h1>
                            </div>
                        </h1>
                    </Card>
                    <Card style={{ 
          backgroundColor: "white",
          rounded:20,
          borderRadius:20,
        }}>
                        <h1 className="text-xl p-4">
                            It's A Comprehension Online Learning Platform For Everyone Looking To Learn and Course Pro.Providing
                            This Platform which is very beneficial for Practicals,Students Can Revisse Everything At Home Like dissection 
                            And States
                           < GiNothingToSay/><div> <h1 className="text-bold">NANI </h1>
                           <h1 className="font-light">Yesterday</h1>
                           </div>
                        </h1>
                    </Card>

                </div>
                <div className="mx-64">
                    <h1 className="italic mx-96 text-xl text-green-400">
                        Contact Us
                    </h1>
                    <div className="mx-60">
                    <h1 className="font-extrabold text-4xl">
                        Reach Out With Any 
                    </h1>
                    <h1 className="font-extrabold text-4xl">
                          Question You Have
                    </h1>
                    </div>

                </div>
                <div>
                <div className="bg-ogrey-100 m-10 p-10">
                <h1 className="font-extrabold text-xl mx-44"> Contact Information</h1>
                    <div className="p-5  my-5">
                        
                        <h1 className=" flex gap-5 items-center mx-44"> <AiTwotoneMail/> contact@coursepro.com</h1>
                        <h1 className=" flex gap-5 items-center mx-44"> <BiPhoneCall/>1800-562-895,  1800-869-877</h1>
                        <h1 className=" flex gap-5 items-center mx-44"><BiCurrentLocation/>102 Street,India</h1>
                    </div>

                </div>
                
                </div>
               
                
            

        

   
        

        </>

    );

};
export default Navbar;
import React from "react";
import {createButton} from "react-social-login-buttons";

import Login from "./login";



const config = {
    
   
  text: "Login with Course Pro",
  icon: "facebook",
  iconFormat: name => `fa fa-${name}`,
  style: { background: "#3b5998" },
  activeStyle: { background: "#293e69" },
  onClick:{Login}
  

 
};

/** My Facebook login button. */
const MyFacebookLoginButton = createButton(config);

export default MyFacebookLoginButton;
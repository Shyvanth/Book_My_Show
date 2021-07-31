import { Route } from "react-router-dom";
import Temp from "./Components/temp";
import DefaultHOC from "./HOC/Default.HOC";




function App() {
  return(
    <DefaultHOC path="/" exact component={Temp}/>


  ) 
    
};

export default App;

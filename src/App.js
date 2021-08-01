import { Route } from "react-router-dom";
import Temp from "./Components/temp";
import DefaultHOC from "./HOC/Default.HOC";





function App() {
  return(
    <>
    <div>
    <DefaultHOC path="/" exact component={Temp}/>
    </div>
    
    
    </>
    


  ) 
    
};

export default App;

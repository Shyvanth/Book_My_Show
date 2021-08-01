import { Route } from "react-router-dom";
import Temp from "./Components/temp";
import DefaultHOC from "./HOC/Default.HOC";
import Login from "../../forms/login";




function App() {
  return(
    <>
    <div>
    <DefaultHOC path="/" exact component={Temp}/>
    </div>
    <Route exact path="/login">
  <Login />
</Route>
    
    </>
    


  ) 
    
};

export default App;

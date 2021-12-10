import React from "react";
import { Route, Switch ,Redirect} from "react-router";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Lama from "./Lama";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import MemeGenerated from "./MemeGenerated/MemeGenerated";
import Kol from "./Aeflix/Kol";
const App = () => {
  return(
  
    <>
    <Navbar/>
     <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/service" component={Service}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Lama}/>
    <Route path="/generated" component={MemeGenerated}/>
    <Route path="/aeflix" component={Kol}/>
    <Redirect to="/" />
  </Switch>
    </>
  );
  
};

export default App;
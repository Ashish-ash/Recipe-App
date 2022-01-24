import React from "react";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Recipies from "./Pages/Recipies";
const App = ()=>{
    return(
        <Router>
        <Navbar/>
        <div className="container main">
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/recipes" element = {<Recipies/>}/>
            </Routes>
        </div>
        <Footer/>
        </Router>
    )
}
export default App;
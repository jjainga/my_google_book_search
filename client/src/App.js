import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Search from './components/Results/Search/Search';
import Saved from './components/Results/Saved/Saved'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path ="/" component={Search}/>
      <Route path ="/saved" component={Saved}/>
      <Router />
    </div>
    </Router>
  );
}

export default App;

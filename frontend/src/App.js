import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './Pages/SignUp';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/login" component={SignUp}  />
   </Switch>
   </BrowserRouter>
  )
}

export default App;

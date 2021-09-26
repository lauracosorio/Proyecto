import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './Pages/SignUp';
import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={SignUp} />
   </Switch>
   </BrowserRouter>
  )
}

export default App;

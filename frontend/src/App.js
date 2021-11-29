import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { DashboarSeller } from './Pages/DashboardSeller';
import { DashboardUser } from './Pages/DashboardUser';
import Home from './Pages/Home';
import HomeSeller from './Pages/HomeSeller';
import HomeUser from './Pages/HomeUser';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import HistorialCompra from './Pages/HistorialCompra'
import DetalleCompra from './Pages/DetalleCompra'
import HistorialCompraStore from './Pages/HistorialCompraStore';
import DetalleCompraStore from './Pages/DetalleCompraStore';

function App() {
  
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/seller" component={HomeSeller} />
     <Route exact path="/user" component={HomeUser} />
     <Route exact path="/login" component={Login}  />
     <Route exact path="/sign-up" component={SignUp}  />
     <Route exact path="/seller-dashboard" component={DashboarSeller}  />
     <Route exact path="/user-dashboard" component={DashboardUser}  />
     <Route exact path="/shopping-history" component={HistorialCompra} />
     <Route exact path="/store-shopping-history" component={HistorialCompraStore} />
     <Route exact path="/purchase-detail" component={DetalleCompra} />
     <Route exact path="/purchase-detail-store" component={DetalleCompraStore} />

   </Switch>
   </BrowserRouter>
  )
}

export default App;

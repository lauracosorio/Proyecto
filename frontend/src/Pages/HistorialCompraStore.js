import React from 'react'
import NavDashboard from '../Components/Dashboard/NavDashboard'
import Footer from '../Components/Footer/Footer'
import HeaderHome from '../Components/Home/HeaderHome'
import ListaComprasTienda from '../Components/Home/ListaComprasTienda'
import '../shared/components/Styles/listaCompras.css'

 const HistorialCompraStore = () => {
    return (
        <>
            <NavDashboard />
            <HeaderHome />
            <ListaComprasTienda />
            <Footer />
        </>
    )
}

export default HistorialCompraStore

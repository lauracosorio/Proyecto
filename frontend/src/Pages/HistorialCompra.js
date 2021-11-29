import React from 'react'
import NavDashboardUser from '../Components/Dashboard/NavDashboardUser'
import Footer from '../Components/Footer/Footer'
import HeaderHome from '../Components/Home/HeaderHome'
import ListaCompras from '../Components/Home/ListaCompras'
import '../shared/components/Styles/listaCompras.css'

 const HistorialCompra = () => {
    return (
        <>
            <NavDashboardUser />
            <HeaderHome />
            <ListaCompras />
            <Footer />
        </>
    )
}

export default HistorialCompra

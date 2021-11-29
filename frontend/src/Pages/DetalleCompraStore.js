import React from 'react'
import NavDashboard from '../Components/Dashboard/NavDashboard'
import Footer from '../Components/Footer/Footer'
import CompraTienda from '../Components/Home/CompraTienda'
import HeaderHome from '../Components/Home/HeaderHome'
import '../shared/components/Styles/DetalleCompra.css'

 const DetalleCompraStore = (props) => {
     const id = props.location.state.id
    return (
        <>
            <NavDashboard />
            <HeaderHome />
            <CompraTienda id = {id} />
            <Footer />
        </>
    )
}

export default DetalleCompraStore

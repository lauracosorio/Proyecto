import React from 'react'
import NavDashboardUser from '../Components/Dashboard/NavDashboardUser'
import Footer from '../Components/Footer/Footer'
import Compra from '../Components/Home/Compra'
import HeaderHome from '../Components/Home/HeaderHome'
import '../shared/components/Styles/DetalleCompra.css'

 const DetalleCompra = (props) => {
     const id = props.location.state.id
    return (
        <>
            <NavDashboardUser />
            <HeaderHome />
            <Compra id = {id} />
            <Footer />
        </>
    )
}

export default DetalleCompra

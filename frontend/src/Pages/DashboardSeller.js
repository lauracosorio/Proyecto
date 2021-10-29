import React from 'react'
import NavDashboard from '../Components/Dashboard/NavDashboard'
import InfoTienda from '../Components/Dashboard/sections/InfoTienda'
import Footer from '../Components/Footer/Footer'
import HeaderHome from '../Components/Home/HeaderHome'
import Products from '../Components/Dashboard/sections/Products'

export const DashboarSeller = () => {
    return (
        <>
            <NavDashboard />
            <HeaderHome />
            <InfoTienda />
            <Products/>
            <Footer />
        </>
    )
}


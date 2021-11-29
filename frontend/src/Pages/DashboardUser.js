import React from 'react'
import NavDashboardUser from '../Components/Dashboard/NavDashboardUser'
import ArticleNew from '../Components/Dashboard/sections/Products'
import Footer from '../Components/Footer/Footer'
import HeaderHome from '../Components/Home/HeaderHome'

export const DashboardUser = () => {
    return (
        <>
        <NavDashboardUser/>
        <HeaderHome />
        <ArticleNew/>
        <Footer/>
        </>
    )
}


import React from 'react'
import HeaderHome from '../Components/Home/HeaderHome';
import Nav from '../Components/Home/Nav';
import AsideOffer from '../Components/Home/sections/asides/AsideOffer';
import ArticlePopular from '../Components/Home/sections/articles/ArticlePopular';
import ArticleNew from '../Components/Home/sections/articles/ArticleNew';
import AsideSuscribe from '../Components/Home/sections/asides/AsideSuscribe';
import Footer from '../Components/Footer/Footer';
import '../shared/components/Styles/Nav.css';
import '../shared/components/Styles/HeaderHome.css';
import '../shared/components/Styles/articleLast.css';
import '../shared/components/Styles/articleNew.css';
import '../shared/components/Styles/articlePopular.css';
import '../shared/components/Styles/asideOffer.css';
import '../shared/components/Styles/asideSuscribe.css';
import '../shared/components/Styles/footer.css';
import NavDashboard from '../Components/Dashboard/NavDashboard';

function HomeSeller() {
    return (
        <>
        <NavDashboard/>
        <HeaderHome/>
        <section>
          <ArticlePopular/>
          <AsideOffer/>
          <ArticleNew/>
          <AsideSuscribe/>
        </section>
        <Footer/>
        </>
    )
}

export default HomeSeller;
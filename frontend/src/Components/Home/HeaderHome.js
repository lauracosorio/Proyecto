import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderHome = ()=> {
    return(
        <header id="header" className="margin_bottom">
            <div className="background_one"></div>
            <div className="background_two"></div>
            <div className="background_three"></div>
            <div className="background_degrade"></div>
            <div className="container padding_bottom_box padding_top_box header_content">
                <div className="slider">
                    <h1 className="header_title">Vive grandes ofertas</h1>
                    <h6 className="header_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit</h6>
                    <span className="header_parag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestias quibusdam eligendi perspiciatis libero veniam veritatis natus, culpa dolorum necessitatibus eveniet est ducimus quod.</span>
                    <a href="/" className="button">ver oferta</a>
                </div>
                <div className="slider_buttons"><span></span><span></span><span></span></div>
            </div>
        </header>
    );
}

export default HeaderHome;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../shared/components/images/logo.png';
import facebook from '../../shared/components/images/facebook.png';
import pinterest from '../../shared/components/images/pinterest.png';
import instagram from '../../shared/components/images/instagram.png';
import twitter from '../../shared/components/images/twitter.png';
import vk from '../../shared/components/images/vk.png';

const Footer = () =>{
    return(
        <footer className="padding_top_box padding_bottom_box">
            <div className="container">
                <div className="row footer_columns">
                    <div className="col-12 col-sm-12 col-md-3">
                        <ul>
                            <li><img src={logo} alt="" /></li>
                            <li>Copyright © All rights reserved</li>
                            <li></li>
                            <li><img src={facebook} alt="" /><img src={pinterest} alt="" /><img src={instagram} alt="" /><img src={twitter} alt="" /><img src={vk} alt="" /></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3">
                        <ul>
                            <li>Nosotros</li>
                            <li><a href="/">Características</a></li>
                            <li><a href="/">Licencia personal</a></li>
                            <li><a href="/">Licencia de negocio</a></li>
                            <li><a href="/">Opciones de compra</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3">
                        <ul>
                            <li>Compañia</li>
                            <li><a href="/">Sobre nosotros</a></li>
                            <li><a href="/">Trabaje con nosotros</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3">
                        <ul>
                            <li>Soporte</li>
                            <li><a href="/">Centro de soporte</a></li>
                            <li><a href="/">Ayuda</a></li>
                            <li><a href="/">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdLocalShipping, MdOutlineAccountCircle, MdShoppingCart, MdHome} from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../shared/components/images/logo.png';

export default function Nav() {
    return(
        <nav id="nav" class="navbar">
            <div class="container">
                <div className="col-6 nav_left">
                    <ul className="navlist">
                        <li className="elementlist"><a href="/"><img src={logo} alt="Home" /></a></li>
                        <li className="elementlist"><a href="/" className="links">enlace</a></li>
                        <li className="elementlist"><a href="/" className="links">enlace</a></li>
                    </ul>
                </div>
                <div className="col-6 nav_right">
                    <ol className="navlist">
                        <li className="elementlist"><a href="/" className="links"><MdLocalShipping size="1.8rem"/></a></li>
                        <li className="elementlist nav_cart"><a href="/" className="links"><MdShoppingCart size="1.8rem"/></a></li>
                        <li className="elementlist"><Link className="links" to="/login"><MdOutlineAccountCircle size="1.8rem"/></Link ></li>
                    </ol>

                    <div className="nav_mobile">
                        <span className="material-icons" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">menu</span>
                        
                        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header">
                                <img src={logo} width="35" alt="Logo"/>
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">RedStore</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div clasNames="offcanvas-body">
                                <ul>
                                    <li><a href="/"><MdHome className="nav_mobile_icons"/>Home</a></li>
                                    <li><a href="/">enlace</a></li>
                                    <li><a href="/">enlace</a></li>
                                    <hr/>
                                    <li className="mobile_user"><a className="nav_mobile_links" href="/"><MdLocalShipping className="nav_mobile_icons"/>Pedidos</a></li>
                                    <li className="mobile_user"><a className="nav_mobile_links" href="/"><MdShoppingCart className="nav_mobile_icons"/>Carrito de compras</a></li>
                                    <li className="mobile_user"><a className="nav_mobile_links" href="/"><MdOutlineAccountCircle className="nav_mobile_icons"/>Cuenta</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
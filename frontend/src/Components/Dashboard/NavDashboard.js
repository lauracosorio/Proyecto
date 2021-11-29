import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../shared/components/images/logo.png';
import { getFromLocal } from "../../utils/localStorage";

const NavDashboard = () => {

    const name = getFromLocal('nombre');

    return (
        <nav id="nav" class="navbar">
            <div class="container">
                <div className="col-6 nav_left">
                    <ul className="navlist">
                        <li className="elementlist"><a href="/seller"><img src={logo} alt="Home" /></a></li>
                        <li className="elementlist"><a href="/seller" className="links">enlace</a></li>
                        <li className="elementlist"><a href="/seller" className="links">enlace</a></li>
                    </ul>
                </div>
                <div className="col-6 nav_right">
                    <ul className="navlist nav-list">
                        <li className="elementlist"><a className="links nav-link" >{name}</a ></li>
                        <ul>
                            <li><Link to="/store-shopping-history">Pedidos de la tienda</Link></li>
                            <li><Link to="/"
                                onClick={() => {
                                    localStorage.clear();
                                }}
                            >Cerrar Sesión</Link></li>
                        </ul>
                    </ul>

                    <div className="nav_mobile">
                        <span className="material-icons" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">menu</span>

                        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header">
                                <img src={logo} width="35" alt="Logo" />
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">RedStore</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div clasNames="offcanvas-body">
                                <ul>
                                    <li><a href="/seller"><MdHome className="nav_mobile_icons" />Home</a></li>
                                    <li><a href="/seller">enlace</a></li>
                                    <li><a href="/seller">enlace</a></li>
                                    <hr />
                                    <li className="mobile_user"><a className="nav_mobile_links" href="/" onClick={() => {
                                        localStorage.clear();
                                    }}>{name}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavDashboard;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFromLocal } from "../../../utils/localStorage";

const InfoTienda = () => {
    const store = getFromLocal('tienda');
    const name = getFromLocal('nombre');
    return(
        <article id="popular_products">
            <div className="container padding_bottom_box">
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-6 imagen_container margin_bottom">
                        <h2>{store}</h2>
                    </div>
                   
                    <div className="col-12 col-sm-4 col-md-6">
                        <h6>Nombre Vendedor:  <span>{name}</span> </h6>
                       
                        <h6>Stock De Productos: <span></span> </h6>
                        <h6>Categoría: <span></span> </h6>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default InfoTienda;
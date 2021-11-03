import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFromLocal } from "../../../utils/localStorage";
import apiBaseUrl from '../../../utils/Api';
import axios from 'axios';

const InfoTienda = () => {
    const store = getFromLocal('tienda');
    const name = getFromLocal('nombre');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
        .get(`${apiBaseUrl}/get-products-${store}`)
        .then((res) => {
            setProducts(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <article id="popular_products">
            <div className="container padding_bottom_box">
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-6 imagen_container margin_bottom">
                        <h2>{store}</h2>
                    </div>

                    <div className="col-12 col-sm-4 col-md-6">
                        <h6>Nombre Vendedor:  <span>{name}</span> </h6>
                        <h6>Stock De Productos: {products.length}<span></span> </h6>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default InfoTienda;
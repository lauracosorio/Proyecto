import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import apiBaseUrl from '../../../../utils/Api';
import axios from 'axios';
import { getFromLocal } from "../../../../utils/localStorage";
import { Link } from "react-router-dom";
import { width } from "dom-helpers";

const ArticleNew = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${apiBaseUrl}/get-products`)
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
            <div className="container padding_bottom_box ">
                <div className="row margin_bottom">
                    <h1 >Productos De Todas Las Tiendas</h1>
                </div>
                <div className="row">
                    {products != undefined || products.length > 0 ?
                        products.map((item, index) => {
                            return (
                                <div className="col-12 col-sm-4 col-md-4 imagen_container margin_bottom" key={index}>
                                    <img className="imagen_fill" src={item.image} alt="Popular product" />
                                    <span>{item.price}</span>
                                    <h5>{item.name}</h5>
                                    <h6> Store: {item.store} </h6>
                                    <small>{item.category}</small>
                                    <small>Stock:{item.stock}</small>
                                    <div className="buttons ">
                                        <span style={{width: 10}}>Comprar</span>
                                    </div>
                                    
                                </div>
                            )
                        })
                        : null}
                </div>
            </div>
        </article>
    );
}

export default ArticleNew;
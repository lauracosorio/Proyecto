import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import apiBaseUrl from '../../../../utils/Api';
import axios from 'axios';
import { getFromLocal } from "../../../../utils/localStorage";
import { Link } from "react-router-dom";

const ArticlePopular = () => {

    const [products, setProducts] = useState([]);
    const tienda = getFromLocal("tienda");

    useEffect(() => {
        axios
            .get(`${apiBaseUrl}/get-products-${tienda}`)
            .then((res) => {
                setProducts(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [tienda]);

    return (
        <article id="popular_products">
            <div className="container padding_bottom_box">
                <div className="row margin_bottom">
                    <h1>Mis Productos</h1>
                </div>
                <div className="row">

                    {products != undefined || products.length > 0 ?
                        products.map((item, index) => {
                            return (
                                <div className="col-12 col-sm-4 col-md-4 imagen_container margin_bottom" key={index}>
                                    <Link to="/seller-dashboard"><img className="imagen_fill" src={item.image} alt="Popular product" /></Link>
                                    <span>{item.price}</span>
                                    <h5>{item.name}</h5>
                                    <small>{item.category}</small>
                                    <small>Stock:{item.stock}</small>
                                    <div className="buttons ">
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

export default ArticlePopular;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import image3 from '../../../shared/components/images/producto8.png'

 const ArticleNew = () =>{
    return(
        <article id="list_products">
        <div className="container padding_bottom_box">
            <div className="row margin_bottom">
                <h1>Productos Populares</h1>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-3 editar">
                <img className="editar-img" src={image3} alt="List Product"/>
                </div>
                <div className="col-12 col-sm-4 col-md-4 imagen_container">
                    <span>$1.200.000</span>
                    <h5>Nombre producto</h5>
                    <small>Categoría</small>
                </div>
                <div className="col-12 col-sm-12 col-md-5 buttons">
                    <span>Editar</span>
                    <span>Inhabilitar</span>
                    <span>X</span>
                </div>
                
            </div>
        </div>
    </article>
    );
}

export default ArticleNew;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../../shared/components/images/producto8.png'
import image2 from '../../../shared/components/images/producto8.png'
import image3 from '../../../shared/components/images/producto8.png'

const ArticleNew = () => {
    return (

        <article id="popular_products">
            <div className="container padding_bottom_box">
                <div className="row margin_bottom">
                    <h1>Productos Populares</h1>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-4 imagen_container margin_bottom">
                        <a href="/"><img className="imagen_fill" src={image1} alt="Popular product" /></a>
                        <span>$1.200.000</span>
                        <h5>Nombre producto</h5>
                        <small>Categoría</small>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 imagen_container margin_bottom">
                        <a href="/"><img className="imagen_fill" src={image2} alt="Popular product" /></a>
                        <span>$1.200.000</span>
                        <h5>Nombre producto</h5>
                        <small>Categoría</small>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 imagen_container margin_bottom">
                        <a href="/"><img className="imagen_fill" src={image3} alt="Popular product" /></a>
                        <span>$1.200.000</span>
                        <h5>Nombre producto</h5>
                        <small>Categoría</small>
                        <div className="buttons">
                        <span>Editar</span>
                        <span>Eliminar</span>
                        </div>

                    </div>
                    
                </div>
            </div>
        </article>

    );
}

export default ArticleNew;
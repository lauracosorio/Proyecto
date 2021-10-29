import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import producto4 from '../../../../shared/components/images/producto4.png';
import producto5 from '../../../../shared/components/images/producto5.png';
import producto6 from '../../../../shared/components/images/producto6.png';
import producto7 from '../../../../shared/components/images/producto7.png';
import producto8 from '../../../../shared/components/images/producto8.png';
import producto9 from '../../../../shared/components/images/producto9.png';
import producto10 from '../../../../shared/components/images/producto10.png';
import producto11 from '../../../../shared/components/images/producto11.png';


const ArticleLast = () => {
    return(
        <article id="last_products">
            <div className="container padding_bottom_box padding_top_box">
                <div className="row">
                    <h1>Últimos Productos</h1>
                </div>
                <div className="row">
                    <ol>
                        <li><a href="/" className="breadcumb">Todos los productos</a></li>
                        <li><a href="/" className="breadcumb">categoría</a></li>
                        <li><a href="/" className="breadcumb">categoría</a></li>
                        <li><a href="/" className="breadcumb">categoría</a></li>
                        <li><a href="/" className="breadcumb">categoría</a></li>
                    </ol>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3 imagen_container">
                        <a href="/"><img className="imagen_fill" src={producto4} alt="Popular product"/></a>
                        <h5>Nombre producto</h5>
                        <small>Categoría</small>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 imagen_container">
                        <a href="/"><img className="imagen_fill" src={producto5} alt="Popular product"/></a>
                        <h5>Nombre producto</h5>
                        <small>Categoría</small>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 imagen_container">
                        <a href="/"><img className="imagen_fill" src={producto6} alt="Popular product"/></a>
                        <h5>Nombre producto</h5>
                        <small>Categoría</small>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 imagen_container">
                        <a href="/"><img className="imagen_fill" src={producto7} alt="Popular product"/></a>
                        <h5>Nombre producto</h5>
                        <small>Categoría</small>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 imagen_container">
                        <a href="/"><img className="imagen_fill" src={producto8} alt="Popular product"/></a>
                        <h5>Nombre producto</h5>
                        <small>Categoría</small>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 imagen_container">
                        <a href="/"><img className="imagen_fill" src={producto9} alt="Popular product"/></a>
                        <h5>Nombre producto</h5>
                        <small>Categoría</small>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 imagen_container">
                        <a href="/"><img className="imagen_fill" src={producto10} alt="Popular product"/></a>
                        <h5>Nombre producto</h5>
                        <small>Categoría</small>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 imagen_container">
                        <a href="/"><img className="imagen_fill" src={producto11} alt="Popular product"/></a>
                        <h5>Nombre producto</h5>
                        <small>Categoría</small>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ArticleLast;
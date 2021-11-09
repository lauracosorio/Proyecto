import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import apiBaseUrl from '../../../utils/Api';
import axios from 'axios';
import { getFromLocal } from "../../../utils/localStorage";
import UpdateProduct from "../Modals/UpdateProduct";
import DeleteProduct from "../Modals/DeleteProduct";

const ArticleNew = () => {
    //Modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nombre, setNombre] = useState("");
    const [sku, setSku] = useState("");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [store, setStore] = useState("");
    const [image, setImage] = useState("");
    const [fallo1, guardarFallo1] = useState(false);
    const [error1, guardarError1] = useState();
    const [data, setData] = useState();

    const [products, setProducts] = useState([]);
    const tienda = getFromLocal("tienda");

    useEffect(() => {
        getProducts();
    }, [tienda]);


    const getProducts = () => {
        axios
            .get(`${apiBaseUrl}/get-products-${tienda}`)
            .then((res) => {
                setProducts(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    let componente;
    if (fallo1) {
        componente = error1
        console.log(componente)
    } else {
        componente = null
    }

    const onSubmit = e => {
        e.preventDefault();
        //datosConsulta1(nombre, sku, stock, price, category, store, image);
        if (nombre === '' || sku === '' || stock === '', price === '', category === '', store === '', image === '') {
            guardarFallo1(true);
            guardarError1("Todos los campos son requeridos")

        } else {
            e.target.reset()
            setNombre('');
            setSku('');
            setStock('');
            setPrice('');
            setCategory('');
            setStore('');
            setImage('');
            guardarFallo1(false);

        }
    }

    const agregar = e => {
        e.preventDefault();
    }

    const registerProducts = async () => {

        try {
            axios.post(`${apiBaseUrl}/register-product`, {
                name: nombre,
                sku: sku,
                stock: stock,
                price: price,
                category: category,
                store: tienda,
                image: image
            }).then((res) => {
                setData(res.data);
                console.log(res.data)
                getProducts();
                handleClose();
            }).catch((error) => {
                console.error(error)
                componente = "Error al crear el producto"
            })
        } catch (e) {
            componente = "Error al crear el producto"
            console.log(e)
        }
    }

    return (
        <>
            <article id="product_list" className=" padding_bottom_box">
                <div className="container">
                    <div className="row margin_bottom">
                        <h1>Lista de productos</h1>
                    </div>
                    <div className="row filtrar">
                        <form className="col-12 col-md-12 col-lg-8 filter_form" onSubmit={agregar}>
                            <button className="button_secundary" onClick={handleShow}>Agregar</button>
                        </form>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Crear Producto</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <form className="row g-3 registrar_form" onSubmit={onSubmit}>
                                    <div className="col-md-6">
                                        <label for="nombre_producto" className="form-label">Nombre del producto</label>
                                        <input type="text" className="form-control" name="nombre_producto" id="nombre_producto" maxLength="50" placeholder="Nombre del producto" required onChange={e => setNombre(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="sku" className="form-label">SKU</label>
                                        <input type="number" className="form-control" name="sku" id="sku" maxLength="2" placeholder="1" required onChange={e => setSku(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="stock" className="form-label">Stock (cantidad disponible)</label>
                                        <input type="number" className="form-control" name="stock" id="stock" maxLength="2" placeholder="1" required onChange={e => setStock(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="precio" className="form-label">Precio</label>
                                        <input type="text" className="form-control" name="precio" id="precio" placeholder="$1'000.000" required onChange={e => setPrice(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="categoria" className="form-label">Categoría del producto</label>
                                        <input id="categoria" name="categoria" className="form-control" required onChange={e => setCategory(e.target.value)} placeholder="Tecnología" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="image" class="form-label">Imágenes</label>
                                        <input class="form-control" type="text" id="image" name="image" required onChange={e => setImage(e.target.value)} placeholder="URL de la imágen" />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="tienda" class="form-label">Tienda</label>
                                        <input class="form-control" type="text" id="tienda" name="tienda" placeholder={tienda} disabled />
                                    </div>
                                </form>

                                {/*   <form
                                onSubmit={onSubmit}
                            >
                                <div className="campo-form">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        placeholder="Nombre"
                                        onChange={e => setNombre(e.target.value)}
                                    />
                                </div>

                                <div className="campo-form">
                                    <label htmlFor="sku">Sku</label>
                                    <input
                                        type="text"
                                        id="sku"
                                        name="sku"
                                        placeholder="Sku"
                                        onChange={e => setSku(e.target.value)}

                                    />
                                </div>

                                <div className="campo-form">
                                    <label htmlFor="stock">Stock</label>
                                    <input
                                        type="text"
                                        id="stock"
                                        name="stock"
                                        placeholder="Stock"
                                        onChange={e => setStock(e.target.value)}

                                    />
                                </div>

                                <div className="campo-form">
                                    <label htmlFor="ciudad">Precio</label>
                                    <input
                                        type="text"
                                        id="precio"
                                        name="precio"
                                        placeholder="Precio"
                                        onChange={e => setPrice(e.target.value)}

                                    />
                                </div>

                                <div className="campo-form">
                                    <label htmlFor="categoria">Categoria</label>
                                    <input
                                        type="text"
                                        id="categoria"
                                        name="categoria"
                                        placeholder="Categoria"
                                        onChange={e => setCategory(e.target.value)}

                                    />
                                </div>

                                <div className="campo-form">
                                    <label htmlFor="Store">Tienda</label>
                                    <input
                                        type="text"
                                        id="store"
                                        name="store"
                                        placeholder={tienda}
                                        disabled

                                    />
                                </div>

                                <div className="campo-form">
                                    <label htmlFor="image">Imagen</label>
                                    <input
                                        type="text"
                                        id="image"
                                        name="image"
                                        placeholder="Image"
                                        onChange={e => setImage(e.target.value)}

                                    />
                                </div>
                            </form> */}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="danger" onClick={registerProducts}>Registrar Producto</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    {products != undefined || products.length > 0 ?
                        products.map((item, index) => {
                            return (


                                <div className="row product_item">
                                    <div className="col-6 col-md-3">
                                        <img className="imagen_fill" src={item.image} alt="Popular product" />
                                    </div>
                                    <div className="col-5 col-md-3">
                                        <span className="tag">{item.price}</span>
                                        <h5>{item.name}</h5>
                                        <small>{item.category}</small>
                                        <small>Stock:{item.stock}</small>
                                    </div>
                                    <div className="col-4 col-md-6">
                                        <UpdateProduct className="button_secundary" product={item} />
                                        <DeleteProduct className="button_secundary" product={item} />
                                    </div>
                                </div>

                            )
                        })
                        : null}
                </div>
            </article>
        </>

    );
}

export default ArticleNew;
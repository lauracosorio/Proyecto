import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import apiBaseUrl from '../../../../utils/Api';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { getFromLocal, removeFromLocal } from "../../../../utils/localStorage";

const ArticleNew = () => {

    //Modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState();
    const [cantidad, setCantidad] = useState(1)
    const [factura, setFactura] = useState(0)
    const [data, setData] = useState(0)
    const [update, setUpdate] = useState()
    const [sku, setSku] = useState()
    const id = getFromLocal('id');
    const rol = getFromLocal('rol');
    console.log(rol);

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

    const onSubmit = e => {
        e.preventDefault();
        //datosConsulta1(nombre, sku, stock, price, category, store, image);
        if (cantidad === '' || cantidad === 0) {
            alert('Debe ingresar una cantidad válida')

        } else {
            e.target.reset()
            setCantidad('');
        }
    }

    const comprar = async () => {
        try {
            axios.post(`${apiBaseUrl}/register-invoice`, {
                product: product,
                amount: cantidad,
                user: id
            }).then((res) => {
                setData(res.data);
                console.log(res.data)
            }).catch((error) => {
                console.error(error)
            })

            axios.put(`${apiBaseUrl}/update-product-${sku}`, {
                name: product.name,
                stock: product.stock - cantidad,
                price: product.price,
                category: product.category,
                store: product.store,
                sku: product.sku,
                image: product.image
            }).then((res) => {
                setUpdate(res.data);
                console.log(res.data)
                window.location.reload(true);
                handleClose();
            }).catch((error) => {
                console.error(error)
            })

            setSku('')

        } catch (error) {
            console.log(error);
        }
    }


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
                                    <span>${item.price}</span>
                                    <h5>{item.name}</h5>
                                    <h6> Store: {item.store} </h6>
                                    <small>{item.category}</small>
                                    <small>Stock:{item.stock}</small>
                                    <div className="buttons ">
                                        {rol === undefined || rol === null ?
                                            null
                                            : <button className="button"
                                            data-target={`#id${item.sku}`}

                                            onClick={() => {
                                                setSku(item.sku)
                                                handleShow();
                                                setProduct({
                                                    name: item.name,
                                                    store: item.store,
                                                    stock: item.stock,
                                                    price: item.price,
                                                    category: item.category,
                                                    sku: item.sku,
                                                    image: item.image,
                                                    date: new Date(),
                                                })

                                            }}>
                                            Comprar</button>}
                                    </div>
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop=""
                                        keyboard={false}
                                        id={`id${item.sku}`}
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Comprar Producto</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form className="row g-3 registrar_form" onSubmit={onSubmit}>
                                                <div className="col-md-7">
                                                    <label for="nombre_producto" className="form-label">Cantidad del producto a comprar</label>
                                                    <input type="text" className="form-control" name="nombre_producto" id="nombre_producto" maxLength="50" placeholder="Nombre del producto" required value={cantidad} onChange={e => setCantidad(e.target.value)} />
                                                </div>

                                            </form>

                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="danger" onClick={comprar}>Comprar Producto</Button>
                                        </Modal.Footer>
                                    </Modal>

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
import React, { useState } from 'react'
import axios from "axios";
import apiBaseUrl from '../../../utils/Api';
import { getFromLocal } from "../../../utils/localStorage";
import { Button, Modal } from 'react-bootstrap';
import '../../../shared/components/Styles/update.css'

const UpdateProduct = ({ product }) => {

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

    const tienda = getFromLocal("tienda");

    console.log(product)

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

    const updateProducts = async () => {

        try {
            axios.put(`${apiBaseUrl}/update-product-${sku}`, {
                name: nombre,
                stock: stock,
                price: price,
                category: category,
                store: tienda,
                image: image
            }).then((res) => {
                setData(res.data);
                console.log(res.data)
                window.location.reload(true);
                handleClose();
            }).catch((error) => {
                console.error(error)
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="product_item">
                <button className="button_secundary" data-target={`#id${product.sku}`} onClick={() => {
                    handleShow();
                    setNombre(product.name)
                    setSku(product.sku)
                    setStock(product.stock)
                    setPrice(product.price)
                    setCategory(product.category)
                    setStore(product.store)
                    setImage(product.image)
                }}>
                    Editar
                </button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                id={`id${product.sku}`}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Crear Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3 registrar_form" onSubmit={onSubmit}>
                        <div className="col-md-6">
                            <label for="nombre_producto" className="form-label">Nombre del producto</label>
                            <input type="text" className="form-control" name="nombre_producto" id="nombre_producto" maxLength="50" placeholder="Nombre del producto" required value={nombre} onChange={e => setNombre(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label for="sku" className="form-label">SKU</label>
                            <input type="number" className="form-control" name="sku" id="sku" maxLength="2" placeholder="1" required value={sku} onChange={e => setSku(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label for="stock" className="form-label">Stock (cantidad disponible)</label>
                            <input type="number" className="form-control" name="stock" id="stock" maxLength="2" placeholder="1" required value={stock} onChange={e => setStock(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label for="precio" className="form-label">Precio</label>
                            <input type="text" className="form-control" name="precio" id="precio" placeholder="$1'000.000" required value={price} onChange={e => setPrice(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label for="categoria" className="form-label">Categoría del producto</label>
                            <input id="categoria" name="categoria" className="form-control" required onChange={e => setCategory(e.target.value)} value={category} placeholder="Tecnología" />
                        </div>
                        <div class="col-md-6">
                            <label for="image" class="form-label">Imágenes</label>
                            <input class="form-control" type="text" id="image" name="image" required value={image} onChange={e => setImage(e.target.value)} placeholder="URL de la imágen" />
                        </div>
                        <div class="col-md-12">
                            <label for="tienda" class="form-label">Tienda</label>
                            <input class="form-control" type="text" id="tienda" name="tienda" placeholder={tienda} value={store} disabled />
                        </div>
                    </form>
                    {/*  <form
                        onSubmit={onSubmit}
                    >
                        <div className="campo-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Nombre"
                                value={nombre}
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
                                value={sku}
                                onChange={e => setSku(sku)}
                                disabled

                            />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="stock">Stock</label>
                            <input
                                type="text"
                                id="stock"
                                name="stock"
                                placeholder="Stock"
                                value={stock}
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
                                value={price}
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
                                value={category}
                                onChange={e => setCategory(e.target.value)}

                            />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="Store">Tienda</label>
                            <input
                                type="text"
                                id="store"
                                name="store"
                                value={store}
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
                                value={image}
                                onChange={e => setImage(e.target.value)}

                            />
                        </div>
                    </form> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={updateProducts}>Actualizar Producto</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateProduct

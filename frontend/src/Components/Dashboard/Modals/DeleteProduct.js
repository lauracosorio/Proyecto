import React, {useState} from 'react'
import axios from "axios";
import apiBaseUrl from '../../../utils/Api';
import { getFromLocal } from "../../../utils/localStorage";
import { Button, Modal } from 'react-bootstrap';

const DeleteProduct = ({product}) => {

    console.log(product)

    //Modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sku = product.sku

    const updateProducts = async () => {

        try {
            axios.delete(`${apiBaseUrl}/delete-product-${sku}`).then((res) => {
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
        <div>

        <span data-target={`#id${product.sku}`} onClick={() => { 
            handleShow(); 
            }}>
            Eliminar Producto
        </span>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            id={`id${product.sku}`}
        >
            <Modal.Header closeButton>
                <Modal.Title>Eliminar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span>Está seguro de que desea eliminar este producto?</span>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="danger"  onClick={updateProducts}>Eliminar Producto</Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default DeleteProduct

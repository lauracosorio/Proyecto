import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from "react-icons/md";
import apiBaseUrl from "../../utils/Api";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CompraTienda({ id }) {
    console.log(id)
    const [invoice, setInvoice] = useState()
    const [total, setTotal] = useState()
    
    useEffect(() => {
        axios.get(`${apiBaseUrl}/get-invoice-${id}`).then((res) => {
            setInvoice(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [id])
    return (
        <article id="detalle_compra" className="padding_top_box padding_bottom_box">
            <div className="container">
                <div className="row">
                    <div className="mb-3">
                        <h1>Detalle de la compra</h1>
                    </div>
                    {invoice !== undefined ?
                        <>
                            <div className="mt-3 mb-3 detalle_header">
                                <div>
                                    <span>
                                        {invoice.name}
                                    </span>
                                    <span>
                                        {invoice.amount} {invoice.amount === 1 ? 'Unidad' : 'Unidades'}
                                    </span>
                                </div>
                                <div>
                                    <img src={invoice.image} alt="Imagen del producto" />
                                </div>
                            </div>
                            <div className="mt-3 mb-3 detalle_body">
                                <div className="detalle_h">
                                    <div>
                                        <h6>{invoice.store}</h6>
                                        <small>ID #{invoice._id}</small><span> | </span>
                                        <small>{invoice.date.slice(0, -14)}</small>
                                    </div>
                                    <div>
                                        <small>{invoice.user.name}</small>
                                    </div>
                                </div>
                                <div className="detalle_b">
                                <small>${invoice.price} por Unidad</small>
                                </div>
                                <div className="detalle_b">
                                    <span>Valor Total: ${invoice.amount * invoice.price}</span>
                                    <p className="mt-3 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad quasi iusto adipisci eius veniam laboriosam id architecto quae vero! Dolorem, eos laudantium quibusdam consectetur numquam rerum recusandae architecto modi.</p>
                                </div>
                                <div className="detalle_f">
                                    <Link to="/store-shopping-history" className="button_secundary">Volver</Link>
                                </div>
                            </div>
                            <div className="mt-3 mb-3 detalle_footer">
                                <div>
                                    <h5>Ayuda con la compra</h5>
                                </div>
                                <div>
                                    <a href="#">El pedido no ha podido ser despachado</a>
                                </div>
                                <div>
                                    <a href="#">Reenviar información al usuario</a>
                                </div>
                            </div>
                        </>
                        : null}
                </div>
            </div>
        </article>
    );
}
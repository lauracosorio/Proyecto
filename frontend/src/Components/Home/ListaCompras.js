import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";
import apiBaseUrl from "../../utils/Api";
import axios from "axios";
import { getFromLocal } from "../../utils/localStorage";

export default function ListaCompras() {

    const [invoice, setInvoice] = useState();
    const email = getFromLocal('email');
    console.log(email)
    let id;

    useEffect(() => {
        axios
            .get(`${apiBaseUrl}/get-invoices-${email}`)
            .then((res) => {
                setInvoice(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <article id="historial_producto" className="padding_top_box padding_bottom_box">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="mb-3">Historial de compras</h1>
                    </div>

                    {invoice !== undefined ? invoice.map((item, index) => {
                        console.log(item._id)
                        return (
                            <div className="col-12 detalle_compra" key={index}>
                                <div className="detalle_header">
                                    <span>{item.date.slice(0, -14)}</span>
                                </div>
                                <div className="detalle_body">
                                    <div>
                                        <img src={item.image} alt="Imagen del producto" />
                                    </div>
                                    <div>
                                        <span><MdOutlinePayment /> Facturada</span>
                                        <span><em> {item.amount} Unidad</em></span>
                                        <span>{item.name}</span>
                                    </div>
                                    <div>
                                        <Link to={{pathname: "/purchase-detail",  state: {id: item._id}}}className="button"
                                             >Detalle</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null}


                </div>
            </div>
        </article>
    );
}
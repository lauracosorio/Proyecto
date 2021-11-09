import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiBaseUrl from '../../utils/Api';
import { saveToLocal } from "../../utils/localStorage";
import swal from "sweetalert2";

const SignUpForm = () => {

    //State Iniciar Sesion
    let expresion_correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-.]+$/;
    let expresion_password = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/;
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pais, setPais] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [rol, setRol] = useState("");
    const [nombreTienda, setNombreTienda] = useState("");
    const [password, setPassword] = useState("");
    const [fallo1, guardarFallo1] = useState(false);
    const [error1, guardarError1] = useState();

    const datosConsulta1 = (dato1, dato2, dato3, dato4, dato5, dato6) => {
        if (dato1 === '' || dato2 === '' || dato3 === '' || dato4 === '', dato5 === '' || dato6 === '') {
            guardarFallo1(true);
            guardarError1("Todos los campos son requeridos");
            console.log(error1)
            return;
        }

        if (!expresion_correo.test(dato2)) {
            guardarFallo1(true);
            guardarError1("Por favor digite un email valido")
            return;
        }

        if (dato5.length < 8) {
            guardarFallo1(true);
            guardarError1("La contraseña debe contener más de 8 caracteres")
            return;
        }

        if (!expresion_password.test(dato5)) {
            guardarFallo1(true);
            guardarError1("La contraseña debe contener una mayúscula, un caracter especial, un número y más de 8 caracteres")
            return;
        }

        guardarError1(false);
    }

    let componente;
    if (fallo1) {
        componente = error1
        console.log(componente)
    } else {
        componente = null
    }


    const register = async () => {

        axios.post(`${apiBaseUrl}/register`, {
            name: nombre,
            email: email,
            country: pais,
            city: ciudad,
            password: password,
            rol: rol,
            store: nombreTienda
        }).then((res) => {

            const nombre = res.data.name;
            saveToLocal("nombre", nombre);

            const rol = res.data.rol;
            saveToLocal("rol", rol);

            if (rol.toLowerCase() === "vendedor") {
                const tienda = res.data.store;
                saveToLocal("tienda", tienda);
                swal.fire({
                    title: "Bienvenido!",
                    text: "Registro completado con éxito",
                    icon: "success",
                    confirmButtonText: "Ok",
                });
                setTimeout(function () { window.location.href = "/seller-dashboard" }, 1000);
            } else {
                swal.fire({
                    title: "Bienvenido!",
                    text: "Registro completado con éxito",
                    icon: "success",
                    confirmButtonText: "Ok",
                });
                setTimeout(function () { window.location.href = "/user"; }, 1000);
            }
        }).catch((error) => {
            swal.fire({
                title: "Error!",
                text: "No se pudo realizar el registro del usuario",
                icon: "error",
                confirmButtonText: "Ok",
            });
            console.error(error);
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        datosConsulta1(nombre, email, pais, ciudad, password, rol, nombreTienda);
    }

    return (
        <article id="sign_up" className="padding_top_box padding_bottom_box">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="margin_bottom signup_title">
                            <h1>Registrarse</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id quae reiciendis voluptates totam non dolor cupiditate magnam voluptate</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <form className="sign_up_form margin_top" onSubmit={onSubmit}>
                            <label for="fullname" id="fullname" className="form-label">Nombre completo</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Usuario</span>
                                <input type="text" aria-label="First name" name="fullname" id="fullname" className="form-control" placeholder="Nombre Completo" onChange={e => setNombre(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <label for="correo" className="form-label">Correo electrónico</label>
                                <input type="email" className="form-control" name="correo" id="correo" aria-describedby="ayuda" placeholder="correo@dominio.com"
                                    onChange={e => setEmail(e.target.value)} />
                                <div id="ayuda" className="form-text">Nunca compartiremos tu correo con nadie</div>
                            </div>
                            <span>Contraseña</span>
                            <div className="input-group mb-3 mt-2">
                                <label for="password" className="input-group-text">Contraseña</label>
                                <input type="password" className="form-control" name="password" id="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <label for="fullname" id="fullname" className="form-label">Region</label>
                            <div className="input-group">
                                <input className="form-control" name="Pais" placeholder="País" onChange={e => setPais(e.target.value)} />
                                <input className="form-control" name="Ciudad" placeholder="Ciudad" onChange={e => setCiudad(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label for="tienda" className="form-label"></label>
                            </div>

                            <div className="input-group mb-3 mt-2">
                                <label for="rol" className="input-group-text">Rol</label>
                                <input type="text" className="form-control" name="rol" id="rol" placeholder="Vendedor/Usuario" onChange={e => setRol(e.target.value)} />
                                {rol.toLowerCase() === "vendedor" ? <>
                                    <label for="tienda" className="input-group-text">Nombre Tienda</label>
                                    <input type="text" className="form-control" name="tienda" id="tienda" placeholder="Red store" onChange={e => setNombreTienda(e.target.value)} />
                                </> : <>
                                    <label for="tienda" className="input-group-text">Nombre Tienda</label>
                                    <input type="text" className="form-control" name="tienda" id="tienda" placeholder="Red store" disabled />
                                </>
                                }
                            </div>


                            <div className="d-flex mt-3 mb-3 form-check signup_buttons">
                                <button type="submit" className="ms-auto button" onClick={register}>Registrarse</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default SignUpForm;
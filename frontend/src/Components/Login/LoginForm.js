import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apiBaseUrl from '../../utils/Api';
import axios from 'axios';
import { saveToLocal } from "../../utils/localStorage";
import swal from "sweetalert2";

const LoginForm = () => {

    let expresion_correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-.]+$/;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fallo, guardarFallo] = useState(false);
    const [error, guardarError] = useState();



    const datosConsulta = (dato, dato1) => {
        if (dato === '' || dato1 === '') {
            guardarFallo(true);
            guardarError("Todos los campos son requeridos");
            return;
        }

        if (!expresion_correo.test(dato)) {
            guardarFallo(true);
            guardarError("Por favor digite un email valido")
            return;
        }

        if (dato1.length < 8) {
            guardarFallo(true);
            guardarError("Digite Password mayor a 8 caracteres")
            return;
        }
    }

    //Cargar componente condicionalmente
    let componente;
    if (fallo) {
        componente = error
    } else {
        componente = null
    }

    const loginPage = async () => {

        axios.post(`${apiBaseUrl}/login`, {
            email: email,
            password: password
        }).then((res) => {
            console.log(res)
            if (res.data.email === email) {

                const nombre = res.data.name;
                saveToLocal("nombre", nombre);
                
                const id = res.data._id;
                saveToLocal("id", id)

                const email = res.data.email;
                saveToLocal("email", email)

                const rol = res.data.rol;
                saveToLocal("rol", rol);

                if (rol.toLowerCase() === "vendedor") {
                    const tienda = res.data.store;
                    saveToLocal("tienda", tienda);
                    swal.fire({
                        title: "Bienvenido!",
                        text: "Se pudo iniciar sesión correctamente",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                    setTimeout(function () { window.location.href = "/seller-dashboard" }, 1000);
                } else {
                    swal.fire({
                        title: "Bienvenido!",
                        text: "Se pudo iniciar sesión correctamente",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                    setTimeout(function () { window.location.href = "/user"; }, 1000);
                }
            } else {
                swal.fire({
                    title: "Error!",
                    text: "Correo y/o contraseña inválidos",
                    icon: "error",
                    confirmButtonText: "Ok",
                });
                console.error("No se pudo iniciar sesión");
            }

        }).catch((error) => {
            swal.fire({
                title: "Error!",
                text: "Correo y/o contraseña inválidos",
                icon: "error",
                confirmButtonText: "Ok",
            });
            console.error(error)
        })
    }

    //Cuando Inicie Sesion
    const onSubmit = e => {
        e.preventDefault();
        datosConsulta(email, password);
    }

    return (

        <article id="login" className="padding_top_box padding_bottom_box">
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                        <div className="margin_bottom login_title">
                            <h1>Iniciar Sesión</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id quae reiciendis voluptates totam non dolor cupiditate magnam voluptate</p>
                        </div>
                        <form className="login_form margin_top" onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    aria-describedby="ayuda"
                                    onChange={e => setEmail(e.target.value)} />
                                <div id="ayuda" className="form-text">Nunca compartiremos tu correo con nadie</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="recordarme" />
                                <label className="form-check-label" for="recordarme">Recordarme</label>
                            </div>
                            <div className="login_buttons">
                                <button type="submit" className="button" onClick={loginPage}>Ingresar</button>
                                <Link to={`/sign-up`} className="button">
                                    Registrarse
                                </Link>
                            </div>
                            <div className=" error" style={{ color: 'white', borderRadius: 9, textAlign: 'center' }} >
                                    {componente}
                                </div>
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </article>
    );
}



export default LoginForm;
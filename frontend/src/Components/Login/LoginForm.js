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
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark" >
                <h1 className="header-login">Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Correo Electrónico"
                            onChange={e => setEmail(e.target.value)}

                        />

                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            onChange={e => setPassword(e.target.value)}

                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className=" btn-primario btn-block" onClick={loginPage}
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>

                <div>
                    <Link to={`/sign-up`} className="enlace-cuenta">
                        Registrarse
                    </Link>
                    <div className=" error" style={{ color: 'yellow', borderRadius: 9, textAlign: 'center' }} >
                        {componente}
                    </div>
                </div>
            </div>
        </div>

    );
}



export default LoginForm;
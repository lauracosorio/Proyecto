import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apiBaseUrl from '../../utils/Api';
import axios from 'axios';
import Error from '../Error/Error';
import { saveToLocal } from "../../utils/localStorage";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, guardarError] = useState(false);

    const datosConsulta = (dato, dato1) => {
        if (dato === '' || dato1 === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
    }

    //Cargar componente condicionalmente
    let componente;
    if (error) {
        componente = <Error mensaje='Ambos campos son obligatorios'></Error>
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

                if(rol.toLowerCase() === "vendedor"){
                    const tienda = res.data.store;
                    saveToLocal("tienda", tienda);
                    window.location.href = "/seller-dashboard";
                }else{
                    window.location.href = "/user-dashboard";
                }

                
            } else {
                console.error("No se pudo iniciar sesión");
            }

        }).catch((error) => {
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
                            type="email"
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
                {componente}
                </div>
            </div>
        </div>

    );
}



export default LoginForm;
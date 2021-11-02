import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiBaseUrl from '../../utils/Api';
import Error from '../Error/Error';
import { saveToLocal } from "../../utils/localStorage";

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

    const datosConsulta1 = (dato1, dato2, dato3, dato4, dato5, dato6 ) => {
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

        if(dato5.length <  8){
            guardarFallo1(true);
            guardarError1("Digite Password mayor a 8 caracteres")
            return;    
        }

        if (!expresion_password.test(dato5)) {
            guardarFallo1(true);
            guardarError1("Incluya mayusculas y caracteres especiales")
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
            nameStore: nombreTienda
        }).then((res) => {

            const nombre = res.data.name;
            saveToLocal("nombre", nombre);

            const rol = res.data.rol;
            saveToLocal("rol", rol);

            if (rol.toLowerCase() === "vendedor") {
                const tienda = res.data.store;
                saveToLocal("tienda", tienda);
            }

            window.location.href = "/dashboard";
        }).catch((error) => {
            console.error(error);
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        datosConsulta1(nombre,email, pais, ciudad, password, rol);
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark" >
                <h1>Obtener una cuenta</h1>

                <form
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
                        <label htmlFor="pais">Pais</label>
                        <input
                            type="text"
                            id="pais"
                            name="pais"
                            placeholder="Pais"
                            onChange={e => setPais(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="ciudad">Ciudad</label>
                        <input
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            placeholder="Ciudad"
                            onChange={e => setCiudad(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}

                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="Rol">Rol</label>
                        <input
                            type="text"
                            id="rol"
                            name="rol"
                            placeholder="Vendedor/Usuario"
                            onChange={e => setRol(e.target.value)}

                        />
                    </div>

                    {rol.toLowerCase() === "vendedor" ? <div className="campo-form">
                        <label htmlFor="nombreTienda">Nombre Tienda</label>
                        <input
                            type="text"
                            id="nombreTienda"
                            name="nombreTienda"
                            placeholder="nombre Tienda"
                            onChange={e => setNombreTienda(e.target.value)}

                        />
                    </div> : null}



                    <div className="campo-form">
                        <input type="submit" className=" btn-primario btn-block" onClick={register}
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={'/login'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>
                <div className=" error" style={{ color: 'yellow', borderRadius: 9, textAlign: 'center' }} >
                    {componente}
                </div>
            </div>
        </div>

    );
}

export default SignUpForm;
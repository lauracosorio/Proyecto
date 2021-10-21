import React, { useState } from 'react';
//import { Card, Container, Button } from "react-bootstrap";
import clsx from 'clsx';
import { Container, Box, Button, FormControl, FormLabel, FormControlLabel, FormHelperText, InputLabel, Input, TextField, Radio, RadioGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../shared/components/Color';

const signUpSchema = Yup.object().shape({
    name: Yup.string().min(2, "Ingresa un nombre válido").required("Ingresa tu nombre completo"),
    email: Yup.string().email('Correo Invalido').required('Ingresa una direccion de correo electrónico'),
    country: Yup.string().min(5, "Ingresa el nombre de tu pais").required("Ingresa un país"),
    city: Yup.string().min(2, "Ingresa el nombre de tu ciudad").required("Ingresa una ciudad"),
    password: Yup.string().required('Ingresa una contraseña').matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/, 'La contraseña debe contener una mayúscula, un caracter especial, un número y más de 8 caracteres'),
    picked: Yup.number(!1 || !2 || !3).required("Escoja un rol"), // Este es el rol
    store: Yup.string().min(2, "Ingresa un nombre válido").required("Ingresa el nombre de la tienda"),
});

const FormFormik = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            country: '',
            city: '',
            password: '',
            picked: '',
            store: ''
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        },
        margin: {
            marginRight: theme.spacing(2),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
        },
        buttonColor: {
            backgroundColor: 'pink',
            color: 'red'
        }
    }));


    const classes = useStyles();
    const btn = styles.btn();
    const input = styles.input();

    return (
        <Container maxWidth="sm">
            <form className={classes.root} onSubmit={formik.handleSubmit}>

                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Nombre Completo"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    className={classes.textField}
                    fullWidth
                    id="country"
                    name="country"
                    label="País"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    error={formik.touched.country && Boolean(formik.errors.country)}
                    helperText={formik.touched.country && formik.errors.country}
                />
                <TextField
                    className={classes.textField}
                    fullWidth
                    id="city"
                    name="city"
                    label="Ciudad"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Correo"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Contraseña"
                    type="password"
                    //value={formik.values.password}
                    onChange={e=>{setEmail(e.target.value); console.log(e.target.value)}}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    className={input.name}
                />
            
                    <FormLabel className={classes.withoutLabel} component="legend">Rol</FormLabel>
                    <RadioGroup aria-label="picked" className={classes.margin, classes.textField}
                        fullWidth
                        id="picked"
                        name="picked"
                        value={formik.values.picked}
                        onChange={formik.handleChange}
                        error={formik.touched.picked && Boolean(formik.errors.picked)}
                        helperText={formik.touched.picked && formik.errors.picked}>
                        <FormControlLabel value="1" control={<Radio />} label="Administrador" />
                        <FormControlLabel value="2" control={<Radio />} label="Vendedor" />
                        <FormControlLabel value="3" control={<Radio />} label="Usuario" />
                    </RadioGroup>
               {/*  <TextField
                  
                    fullWidth
                    id="store"
                    name="store"
                    label="Nombre de la tienda"
                    type="store"
                    value={formik.values.store}
                    onChange={formik.handleChange}
                    error={formik.touched.store && Boolean(formik.errors.store)}
                    helperText={formik.touched.store && formik.errors.store}
                /> */}
                <Button className={classes.withoutLabel, btn.pink} variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    )
}

export default FormFormik;

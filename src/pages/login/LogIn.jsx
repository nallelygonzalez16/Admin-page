//Imports de React
import { useContext, useEffect } from "react"

//Imports de terceros
import { useNavigate } from "react-router-dom";

import { Button, FormControl, InputLabel, Input,
         FormHelperText } from "@mui/material";
import Paper from "@mui/material/Paper";

//Imports propios
import { UserContext } from "../../context/UserContext"
import { validateUserPassword } from './helpers/validateUserPassword'
import { useForm } from "../hooks/useForm";
import './LogIn.css'



export const LogIn = () => {
    
    const { formState, onInputChange, onResetForm } = useForm({
        user: "",
        password: ""
    })

    const { user, password } = formState;

    const navigate = useNavigate();
    const { logedIn, setLogedIn } = useContext(UserContext);
    
    const hadleOnFormSubmit = (e) => {
        e.preventDefault();

        const acceptedLogIn = validateUserPassword( formState );

        if( acceptedLogIn ) { setLogedIn( true ); }

        onResetForm();
    }

    useEffect(() => {
        //Si el usuario está logueado, se envía a la página de administración
        if( logedIn ) { navigate('/admin') }
    }, [logedIn])

    return (
        <form className="LogIn-Form" onSubmit={ hadleOnFormSubmit }>
            <Paper sx={{ padding: 4 }} >

                <FormControl sx={{ margin: 1 }}>
                    <InputLabel htmlFor="user">Nombre de usuario</InputLabel>
                    <Input id="user" aria-describedby="Nombre de usuario" name="user" onChange={onInputChange} value={ user }/>
                    <FormHelperText id="user-helperText">Digite su nombre de usuario</FormHelperText>
                </FormControl>

                <FormControl sx={{ margin: 1 }}>
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Input id="password" aria-describedby="contraseña" type="password" name="password" onChange={onInputChange} value={ password }/>
                    <FormHelperText id="password-helperText">Ingrese su contraseña</FormHelperText>
                </FormControl>

                <Button sx={{ margin: 1 }} type="submit">
                    Ingresar
                </Button>

            </Paper>
        </form>
    )

}

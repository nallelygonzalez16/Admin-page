
//Funcion que debe retornar los datos de acceso del administrador
const getAdminUserAndPassword = () => {
    return {
        adminUser: "Nallely",
        adminPassword: "Nallely"
    }
}

//Se valida la existencia del usuario
export const validateUserPassword = ({ user, password }) => {
    const { adminUser, adminPassword } = getAdminUserAndPassword();


    if( adminUser === user && adminPassword === password ) {return true;}

    return false;
}


//Imports de React
import { useContext, useEffect } from "react"

//Imports de terceros
import { useNavigate } from "react-router-dom";

//Imports propios
import { UserContext } from "../../context/UserContext"
import { AddButtonAndSearchBar } from "./components/AddButtonAndSearchBar";
import { NavBar } from "./components/NavBar";
import { TableDisplay } from './components/TableDisplay'


export const Admin = () => {
  
  const navigate = useNavigate();
  const { logedIn, setLogedIn } = useContext(UserContext);

  useEffect(() => {
    //Si el usuario no está logueado, se envía a la página de LogIn
      if( !logedIn ) { navigate('/login') }
  }, [logedIn])

  return (
      <>
        <NavBar />
        <AddButtonAndSearchBar />
        <TableDisplay />
      </>
  )
}

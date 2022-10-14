

import { useState } from "react"
import { UserContext } from "./UserContext"



export const UserProvider = ({ children }) => {
    const [logedIn, setLogedIn] = useState(false);
    
    
    return (
        <UserContext.Provider value={{ 
            logedIn,
            setLogedIn
         }}>
            { children }
        </UserContext.Provider>
    )
}

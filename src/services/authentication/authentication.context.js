import { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({children}) => {

    const [isLoading, setIsLoading] =useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const onLogin  = async(email, password) => {
     try{

            setIsLoading(true)
            const res = await loginRequest(email, password)
            console.log(res)
            setUser(res)
            setIsLoading(false)
        } catch(error){
            setIsLoading(false)
            setError(error)
        }
 

    }
    return (
        <AuthenticationContext.Provider
        value={{
            user,
            isLoading,
            error,
            onLogin,
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}
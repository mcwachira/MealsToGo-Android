import React , {useState, createContext, useEffect} from "react"
import { locationRequest, locationTransform } from "./location.services"


export const LocationContext = createContext()


export const LocationContextProvider = ({children}) => {

    const [location, setLocation] = useState("");
    const [keyword, setKeyword] = useState("san Francisco");
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const onSearch= (searchKeyword) => {
   
        setIsLoading(true)
       
        setKeyword(searchKeyword)
    }

    useEffect(() => {
        if (!keyword.length) {
            return
        }

        locationRequest(keyword.toLowerCase()).then(locationTransform)
            .then((results) => {
                setIsLoading(false)
                setLocation(results)
            }).catch((error) => {
                setIsLoading(false)
                setError(error)
            })

    }, [keyword])
   

    
    // useEffect(() => {
    //     onSearch(keyword)
    // }, [])
  

    const value= {location,keyword,  isLoading, error, search: onSearch}
    return (
        <LocationContext.Provider value={value}>
            {children}
        </LocationContext.Provider>
    )
}
import React ,{useState, createContext, useEffect, useMemo, useContext } from 'react'
import{ restaurantsTransform, restaurantsRequest } from "./restaurants.service"

export const RestaurantContext = createContext()

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const retrieveRestaurants = () => {
        setIsLoading(true)
  
        setTimeout(() => {
            restaurantsRequest().then(restaurantsTransform)
            .then((results) => {
                setIsLoading(false)
                setRestaurants(results)
            }).catch((error) => {
                setIsLoading(false)
                setError(error)
            })

        }, 2000)

    }

    useEffect(() => {
        retrieveRestaurants()
    }, [])
    // console.log(restaurants)
    // const value ={
     
    // }
    return(
        <RestaurantContext.Provider value={{
            restaurants,
            isLoading,
            error,
}}>
            {children}
        </RestaurantContext.Provider>
    )
}
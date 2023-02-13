 import React , {createContext, useState} from 'react'

 export const  FavoriteContext = createContext()

 export const FavoriteContextProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])


    const add = (restaurant) => {
        setFavorites([...favorites, restaurant])
    }


    const remove = (restaurant) => {
        // const index = favorites.findINdex(restaurant)

        // return favorites.splice(index, 1)

        const newFavorites = favorites.filter((x) => x.placeId != restaurant.placeId)
    }

    const value ={
        favorites,
        addToFavorites:add,
        removeFromFavorites:remove

    }

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
 }

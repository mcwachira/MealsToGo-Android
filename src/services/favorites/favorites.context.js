 import React , {createContext, useEffect, useState} from 'react'
 import AsyncStorage from '@react-native-async-storage/async-storage'

 export const  FavoriteContext = createContext()

 export const FavoriteContextProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])


    const saveFavorites = async(value) => {
        try{
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@favorites', jsonValue);

        }catch(e){
            console.log('error storing ', e)
        }
    }




     const loadFavorites = async () => {
         try {
             const value = await AsyncStorage.getItem('@favorites');
             if(value !== null){
            setFavorites(JSON.parse(value))
             }

         } catch (e) {
             console.log('error fetching ', e)
         }
     }

    const add = (restaurant) => {
        setFavorites([...favorites, restaurant])
    }


    const remove = (restaurant) => {
        // const index = favorites.findINdex(restaurant)

        // return favorites.splice(index, 1)

        const newFavorites = favorites.filter((x) => x.placeId !== restaurant.placeId)

        setFavorites(newFavorites)
        
    }

    //load favorites stored in storage
    useEffect(() => {
        loadFavorites()
    }, [])

    //save to storage every time the favorites array changes
    useEffect(() => {
        saveFavorites(favorites)
    }, [favorites])

    const value ={
        favorites,
        addToFavorites:add,
        removeFromFavorites:remove

    }

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
 }

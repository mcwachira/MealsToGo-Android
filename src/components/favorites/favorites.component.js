import React , {useContext} from 'react'
import { FavoriteContext } from '../../services/favorites/favorites.context'
import styled from 'styled-components/native'
import {AntDesign} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const FavoriteButton = styled(TouchableOpacity)`
position:absolute;
top:25px;
right:25px;
z-index:9;
`
const Favorite= ({restaurant}) => {

    const {favorites, addToFavorites, removeFromFavorites}= useContext(FavoriteContext)

    const isFavorite = favorites.find((fav) => fav.placeId ===restaurant.placeId )
  return (
   <FavoriteButton
   onPress={() => !isFavorite ? addToFavorites(restaurant) :removeFromFavorites(restaurant)}>
    <AntDesign name={isFavorite ? "heart": 'hearto'} size={24} color={isFavorite? 'red' :'white'}/>
   </FavoriteButton>
  )
}

export default Favorite

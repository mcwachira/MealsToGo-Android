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
const Favorite= () => {

    const {favorites, addToFavorites, removeFromFavorites}= useContext(FavoriteContext)
  return (
   <FavoriteButton>
    <AntDesign name='heart' size={24} color='red'/>
   </FavoriteButton>
  )
}

export default Favorite

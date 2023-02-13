import React from 'react'
import { ScrollView, TouchableOpacity } from "react-native";
import styled from 'styled-components/native'
import { SpacerComponent } from '../spacer/spacer.component'
import CompactRestaurantInfo from '../restaurant/Compact-Restaurant-Info.component'
import { Text } from '../typography/text.component'



const FavoritesWrapper = styled.View`
padding:10px;
`
const FavoritesBar = ({favorites, onNavigate}) => {

    if(!favorites.length){
        return null
    }
  return (
   <FavoritesWrapper>

<SpacerComponent variant='left.large'>
    <Text variant="caption">Favorite</Text>
</SpacerComponent>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {favorites.map((restaurant) => {
                  const key = restaurant.name;
                  return (
                      <SpacerComponent key={key} position="left" size="medium">
                          <TouchableOpacity
                              onPress={() =>
                                  onNavigate("RestaurantDetail", {
                                      restaurant,
                                  })
                              }
                          >
                              <CompactRestaurantInfo restaurant={restaurant} />
                          </TouchableOpacity>
                      </SpacerComponent>
                  );
              })}
          </ScrollView>
   </FavoritesWrapper>

  )
}

export default FavoritesBar

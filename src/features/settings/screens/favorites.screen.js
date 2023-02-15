import React, { useContext } from "react";

import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import { FavoriteContext } from "../../../services/favorites/favorites.context";
import RestaurantInfoCard from "../../restaurant/components/restaurant-info-card";
import { RestaurantList } from "../../restaurant/components/restaurant-list.styles";
import { SpacerComponent } from "../../../components/spacer/spacer.component";

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoriteContext);

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <SpacerComponent position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </SpacerComponent>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites yet</Text>
    </NoFavoritesArea>
  );
};

export default FavoritesScreen;

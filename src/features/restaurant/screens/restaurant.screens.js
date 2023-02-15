import React, { useContext, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList, View, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card";
import styled from "styled-components/native";
import Favorite from "../../../components/favorites/favorites.component";
import { RestaurantList } from "../components/restaurant-list.styles";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import Search from "../components/search.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavoriteContext } from "../../../services/favorites/favorites.context";
import FavoritesBar from "../../../components/favorites/favorites-bar.component";
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const RestaurantScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantContext);
  const { favorites } = useContext(FavoriteContext);
  const [isToggled, setIsToggled] = useState(false);

  // console.log(restaurants)
  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={60} animating={true} color={MD2Colors.blue800} />
          </LoadingContainer>
        )}
        <Search
          isFavoritesToggled={isToggled}
          onFavoritesToggle={() => setIsToggled(!isToggled)}
        />

        {isToggled && (
          <FavoritesBar
            favorites={favorites}
            onNavigate={navigation.navigate}
          />
        )}

        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            // console.log(item)
            return (
              <TouchableOpacity
                onPress={() =>
                  //passing restaurant on route params
                  navigation.navigate("RestaurantDetails", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          //ionline styling for a flat ist
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default RestaurantScreen;

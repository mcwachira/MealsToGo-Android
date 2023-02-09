import React, {useContext} from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card";
import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const SearchContainer = styled.View`s
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const Loading = styled(ActivityIndicator)`
margin-left: -25px;
`

const LoadingContainer = styled.View`
position:absolute;
 top:50%;
 left:50%;

`
const RestaurantScreen = () => {

  const {isLoading, error, restaurants} = useContext(RestaurantContext)

  
  // console.log(restaurants)
  return (

      <>
        <SafeArea>
          {isLoading && (
          <LoadingContainer>
              <Loading size={60} animating={true} color={MD2Colors.blue800} />
            </LoadingContainer>
          )}
          <SearchContainer>
            <Searchbar placeholder="Search" value="" />
          </SearchContainer>
          <RestaurantListContainer>
            <FlatList
              data={restaurants}
              renderItem={({ item }) => {
                // console.log(item)
                return (<RestaurantInfoCard restaurant={item} />
                )
              }
              }
              keyExtractor={(item) => item.name}

              //ionline styling for a flat ist
              contentContainerStyle={{ padding: 16 }}
            />
          </RestaurantListContainer>
        </SafeArea>
        <ExpoStatusBar style="auto" />
      </>
    
  )
}

export default RestaurantScreen;

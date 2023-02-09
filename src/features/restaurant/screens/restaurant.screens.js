import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card";
import styled from "styled-components/native";

const SearchContainer = styled.View`s
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar placeholder="Search" value="" />
        </SearchContainer>
        <RestaurantListContainer>
          <FlatList
            data={[
              { name: 1 },
              { name: 2 },
              { name: 3 },
              { name: 4 },
              { name: 5 },
              { name: 6 },
              { name: 7 },
              { name: 8 },
            ]}
            renderItem={() => <RestaurantInfoCard />}
            keyExtractor={(item) => item.name}

            //ionline styling for a flat ist
            contentContainerStyle={{ padding: 16 }}
          />
        </RestaurantListContainer>
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default RestaurantScreen;

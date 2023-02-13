import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Title,
  Icon,
  Info,
  Section,
  Rating,
  SectionEnd,
} from "./restaurant-info-card.styles";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { SpacerComponent } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import Favorite from "../../../components/favorites/favorites.component";
const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    placeId,
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <View>

   
      <Favorite restaurant={restaurant}/>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />

      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={`star-${placeId}-${index}`} xml={star} width={20} height={20} />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <SpacerComponent position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </SpacerComponent>
            <SpacerComponent position="left" size="large">
            <Icon source={{ uri: icon }} />
            </SpacerComponent>
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
      </View>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;

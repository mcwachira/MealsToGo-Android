import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card'
import { SafeArea } from '../../../components/utils/safe-area.component'

const RestaurantDetailScreen = ({route}) => {

  const [breakfastExpanded, setBreakfastExpanded] = React.useState(false);
  const [lunchExpanded, setLunchExpanded] = React.useState(false);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [drinksExpanded, setDrinksExpanded] = React.useState(false);



  const {restaurant} = route.params
  return (
    <>

    <SafeArea>
    <RestaurantInfoCard restaurant={restaurant}/>
        <ScrollView>

    



        <List.Accordion
          title="Breakfast"
            left={props => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={props => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
                  onPress={() => setLunchExpanded(!lunchExpanded)}>
          <List.Item title="Burger w/fries" />
          <List.Item title="Steak Sandwich" />
   
            <List.Item title="Mushroom Soup" />
        </List.Accordion>


      <List.Accordion
        title="Dinner"
        left={props => <List.Icon {...props} icon="food-variant" />}
        expanded={dinnerExpanded}
                onPress={() => setDinnerExpanded(!dinnerExpanded)}>
            <List.Item title="Burger w/fries" />
            <List.Item title="Steak Sandwich" />

            <List.Item title="Mushroom Soup" />
      </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={props => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
           onPress={() => setDrinksExpanded(!drinksExpanded)}>
          <List.Item title="Bloody Mary" />
          <List.Item title="Long Island" />
        </List.Accordion>


        </ScrollView>
    </SafeArea>
        </>
  )
}

export default RestaurantDetailScreen


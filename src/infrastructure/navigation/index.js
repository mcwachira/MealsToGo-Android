import React, {useContext} from 'react'
import {View, Text} from 'react-native'
import AppNavigator from './app.navigation'
import { AuthenticationContext } from '../../services/authentication/authentication.context'
import { NavigationContainer } from '@react-navigation/native'
import AccountNavigator from './account.navigator'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
const  Navigation = () => {

  const {isAuthenticated}  = useContext(AuthenticationContext)
  return (
    <NavigationContainer>
      {isAuthenticated ?
        (<AppNavigator />):(
      <AccountNavigator />
      )

      }
    </NavigationContainer>
  )

}

export default Navigation


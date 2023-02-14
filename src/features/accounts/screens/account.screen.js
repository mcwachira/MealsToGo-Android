import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SpacerComponent } from '../../../components/spacer/spacer.component'
import { AccountBackground, AccountCover, AccountContainer ,AuthButton ,Title} from '../components/account.styles'

const AccountScreen = ({navigation}) => {
  return (
      <AccountBackground>
          <AccountCover />
      <Title>Meals To Go</Title>
          <AccountContainer>

<AuthButton
icon='lock-open-outline'
color='black'
mode='contained'
onPress={() =>navigation.navigate("Login")}>
  Login
</AuthButton>

<SpacerComponent size='large'>
          <AuthButton
            icon='lock-open-outline'
            color='black'
            mode='contained'
            onPress={() =>navigation.navigate("Register")}>
            Register
          </AuthButton>
</SpacerComponent>
       
          </AccountContainer>
      </AccountBackground>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})
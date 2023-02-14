import styled from 'styled-components/native'

import React, {useState, useContext} from 'react'
import { AccountBackground , AccountContainer, AuthButton , AuthInput, Title , ErrorContainer} from '../components/account.styles'
import { TextInput } from 'react-native-paper'
import { SpacerComponent } from '../../../components/spacer/spacer.component'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { Text } from '../../../components/typography/text.component'
import { getAuth } from 'firebase/auth'
const LoginContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
width:80%;
   padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]}
`;
const Input = styled(TextInput)`
width:100%
`
const LoginScreen = ({navigation}) => {
const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = getAuth();

  const { onLogin, error } = useContext(AuthenticationContext);
  return (
      <AccountBackground>

      <Title>Meals To Go</Title>
        <AccountContainer>

        <AuthInput
        label='E-mail'
        value={email}
        textContentType='emailAddress'
        keyBoardType='email-address'
        autoCapitalize='none'
          onChangeText={(u) => setEmail(u)}
        />
        <SpacerComponent size='large'>
          <AuthInput
            label="Password"
            value={password}
            textContentType='password'

            //difference between secure entry and secure
            secureTextEntry
            autoCapitalize='none'
            secure
            onChangeText={p => setPassword(p)}
          />
</SpacerComponent>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <SpacerComponent size='large'>
          <AuthButton
            icon='lock-open-outline'
            mode='contained'
            onPress={() => onLogin(email, password, auth)}>

            Login
          </AuthButton>
        </SpacerComponent>
   
        </AccountContainer>

      <SpacerComponent size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </SpacerComponent>
    
      </AccountBackground>
  )
}

export default LoginScreen

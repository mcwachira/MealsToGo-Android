import styled from "styled-components/native";
import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";
import { SpacerComponent } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyBoardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <SpacerComponent size="large">
          <AuthInput
            label="Password"
            value={confirmPassword}
            textContentType="password"
            //difference between secure entry and secure
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setConfirmPassword(p)}
          />
        </SpacerComponent>

        <SpacerComponent size="large">
          <AuthInput
            label="Confirm Password"
            value={password}
            textContentType="password"
            //difference between secure entry and secure
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </SpacerComponent>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <SpacerComponent size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, confirmPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.blue300} />
          )}
        </SpacerComponent>
      </AccountContainer>

      <SpacerComponent size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </SpacerComponent>
    </AccountBackground>
  );
};

export default RegisterScreen;

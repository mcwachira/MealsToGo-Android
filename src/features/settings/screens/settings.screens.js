import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { SpacerComponent } from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;
const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(
      `@profilePicture${currentUser.uid}-photo`
    );
    setPhoto(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getProfilePicture(user);

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [user])
  );

  // useFocusEffect(() => {
  //   getProfilePicture(user);
  // }, [user]);
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182bd" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182bd"
            />
          )}
        </TouchableOpacity>
        <SpacerComponent position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </SpacerComponent>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <List.Item
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingsScreen;

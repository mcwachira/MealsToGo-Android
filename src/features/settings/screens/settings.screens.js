import React, { useContext } from "react";
import styled from "styled-components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { SpacerComponent } from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;
const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182bd" />

        <SpacerComponent position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </SpacerComponent>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
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

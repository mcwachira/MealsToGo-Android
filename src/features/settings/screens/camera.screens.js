import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Button } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const CameraContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const CameraButton = styled(Button).attrs({
  mode: "contained",
  icon: "camera",
})`
  position: absolute;
  top: 525px;
  left: 140px;
`;
const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const cameraRef = useRef();

  const { user } = useContext(AuthenticationContext);

  const snapPhoto = async () => {
    if (cameraRef && cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();

      //storing our photo in  our phones storage
      AsyncStorage.setItem(`@profilePicture${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <CameraContainer>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </CameraContainer>
    );
  }

  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        ratio={"16:9"}
        type={Camera.Constants.Type.front}
      />

      <CameraButton onPress={snapPhoto}>Snap</CameraButton>
    </CameraContainer>
  );
};

export default CameraScreen;

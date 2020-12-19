import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Album } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("AlbumScreen", { albumId: props.album.id });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        <Text style={styles.text}> {props.album.artistsHeadline} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumComponent;

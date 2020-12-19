import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Album } from "../../types";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import albumDetails from "../../data/albumDetails";
import SongListItem from "../../components/SongListItem";
import { FlatList } from "react-native-gesture-handler";
import AlbumHeader from "./../../components/AlbumHeader/index";

export type AlbumScreenProps = {};

const AlbumScreen = (props: AlbumScreenProps) => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <FlatList
        ListHeaderComponent={AlbumHeader}
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AlbumScreen;

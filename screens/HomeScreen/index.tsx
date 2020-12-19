import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Album from "../../components/AlbumComponent";
import AlbumCategory from "../../components/AlbumCategory";
import albumCategories from "../../data/albumCategories";

const HomeScreen = () => {
  return (
    <FlatList
      data={albumCategories}
      renderItem={({ item }) => (
        <AlbumCategory title={item.title} albums={item.albums} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default HomeScreen;

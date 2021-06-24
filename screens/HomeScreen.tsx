import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AlbumCategory from "../components/AlbumCategory";
import styles from "../components/SingleAlbum/styles";
import AlbumCategories from "../data/AlbumCategories";

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={AlbumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          />
        }
      />
    </View>
  );
}

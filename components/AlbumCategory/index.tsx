import React from "react";
import { View, Text, FlatList } from "react-native";
import { Album } from "../../types";
import SingleAlbum from "../SingleAlbum";
import styles from "./styles";

export type AlbumCategoryProps = {
  title: string;
  albums: [Album];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      {/* title of category */}

      {/* list of album */}
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <SingleAlbum album={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AlbumCategory;

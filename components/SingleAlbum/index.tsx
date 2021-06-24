import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Album } from "../../types";

export type AlbumPorps = {
  album: Album;
};

const SingleAlbum = (props: AlbumPorps) => {
  return (
    <View style={styles.container}>
      {/* image of the album */}
      <Image source={{ uri: props.album.imageUri }} style={styles.image} />

      {/* artist headlline */}
      <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
  );
};

export default SingleAlbum;

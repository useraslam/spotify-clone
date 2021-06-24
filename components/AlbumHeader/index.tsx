import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Album } from "../../types";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

type AlbumHeaderProps = {
  album: Album;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;

  return (
    <View style={styles.container}>
      {/* image */}
      <Image source={{ uri: album.imageUri }} style={styles.image} />
      {/* title */}
      <Text style={styles.title}>{album.name}</Text>
      {/* info */}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.by}>BY {album.by}</Text>
        <Text style={styles.by}> {album.likes} likes</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#1DB954",
          flex: 1,
          width: 60,
          height: 60,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <FontAwesome
          style={{
            paddingLeft: 5,
          }}
          name="play"
          size={28}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;

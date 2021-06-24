import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const song = {
  id: 1,
  imageUri:
    "https://images-na.ssl-images-amazon.com/images/I/71ZgMvfWOML._SX466_.jpg",
  title: "Mothership",
  artist: "Led Zepplin",
};

const SongListItem = () => {
  return (
    <View style={styles.container}>
      {/* cover */}
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      {/* details */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <View style={styles.subContainer}>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: 100,
        }}
      >
        <FontAwesome5 name="heart" size={20} color="#979797" />

        <FontAwesome name="play" size={20} color="white" />
      </View>
    </View>
  );
};

export default SongListItem;

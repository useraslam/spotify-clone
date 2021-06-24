import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Song } from "../../types";
import { Entypo } from "@expo/vector-icons";

type SongListItemProps = {
  song: Song;
};

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;
  return (
    <View style={styles.container}>
      {/* cover */}
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      {/* details */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <View style={styles.subContainer}>
          <Text
            style={{
              backgroundColor: "grey",
              color: "black",
              fontSize: 8,
              padding: 1,
              borderRadius: 2,
              textAlign: "center",
              textTransform: "uppercase",
              marginRight: 5,
              letterSpacing: 1,
            }}
          >
            Lyrics
          </Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Entypo name="dots-three-vertical" size={16} color="#979797" />
      </View>
    </View>
  );
};

export default SongListItem;

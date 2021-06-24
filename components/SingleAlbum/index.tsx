import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackComponent,
} from "react-native";
import styles from "./styles";
import { Album } from "../../types";
import { useNavigation } from "@react-navigation/native";

export type AlbumPorps = {
  album: Album;
};

const SingleAlbum = (props: AlbumPorps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("AlbumScreen", { id: props.album.id });
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {/* image of the album */}

        <Image source={{ uri: props.album.imageUri }} style={styles.image} />

        {/* artist headlline */}
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SingleAlbum;

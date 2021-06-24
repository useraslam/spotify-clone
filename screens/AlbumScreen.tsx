import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";
import AlbumDetails from "../data/AlbumDetails";
import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";

const AlbumScreen = () => {
  // const route = useRoute();

  // useEffect(() => {
  //   console.log(route);
  // }, []);

  return (
    <View>
      <FlatList
        data={AlbumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        ListHeaderComponent={
          <View>
            <AlbumHeader album={AlbumDetails} />
          </View>
        }
        keyExtractor={(item) => item.id.toString()}
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
};

export default AlbumScreen;

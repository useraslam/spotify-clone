/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Premium: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album = {
  id: string;
  imageUri: string;
  artistsHeadline: string;
  name: string;
  by: string;
  likes: number;
};

export type Song = {
  id: number;
  imageUri: string;
  title: string;
  artist: string;
};

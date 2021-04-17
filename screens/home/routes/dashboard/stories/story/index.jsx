import {
  storyStyles,
  nameStyles,
  React,
  View,
  Text,
  ProfileImage,
} from "./utils";

export function useStory({ name, source }) {
  return (
    <View style={storyStyles}>
      <ProfileImage source={source} />

      <Text style={nameStyles}>{name}</Text>
    </View>
  );
}

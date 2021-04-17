import { imageStyles, containerStyles, React, Image, View } from "./utils";

export function useProfileImage({ source, style }) {
  return (
    <View style={{ ...containerStyles, ...style }}>
      <Image style={imageStyles} source={source} />
    </View>
  );
}

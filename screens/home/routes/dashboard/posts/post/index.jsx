import {
  postStyles,
  headerStyles,
  nameStyles,
  profileImageStyles,
  postImageStyles,
  profileStyles,
  React,
  View,
  ProfileImage,
  Text,
  Image,
  Entypo,
  Footer,
} from "./utils";

export function usePost({
  profileImageSource,
  name,
  postImageSource,
  likes,
  caption,
  time,
}) {
  return (
    <View style={postStyles}>
      <View style={headerStyles}>
        <View style={profileStyles}>
          <ProfileImage
            source={profileImageSource}
            style={profileImageStyles}
          />

          <Text style={nameStyles}>{name}</Text>
        </View>

        <Entypo name="dots-three-vertical" size={16} />
      </View>

      <Image style={postImageStyles} source={postImageSource} />

      <Footer likes={likes} caption={caption} time={time} />
    </View>
  );
}

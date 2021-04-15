import {
  postStyles,
  headerStyles,
  nameStyles,
  profileImageStyles,
  postImageStyles,
  captionStyles,
  timeStyles,
  footerStyles,
  likesStyles,
  React,
  View,
  ProfileImage,
  Text,
  Image,
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
        <ProfileImage source={profileImageSource} style={profileImageStyles} />

        <Text style={nameStyles}>{name}</Text>
      </View>

      <Image style={postImageStyles} source={postImageSource} />

      <View style={footerStyles}>
        <Text style={likesStyles}>{likes} likes</Text>
        <Text style={captionStyles}>{caption}</Text>
        <Text style={timeStyles}>{time} ago</Text>
      </View>
    </View>
  );
}

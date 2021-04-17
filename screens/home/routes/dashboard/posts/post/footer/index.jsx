import {
  footerStyles,
  footerIconsStyles,
  footerIconsLeftStyles,
  likesStyles,
  captionStyles,
  timeStyles,
  React,
  AntDesign,
  Fontisto,
  FontAwesome,
  Ionicons,
  View,
  Text,
  useStore,
} from "./utils";

export function useFooter({ likes, caption, time }) {
  const { isLiked, likesCount, like, countLikes } = useStore();

  return (
    <View style={footerStyles}>
      <View style={footerIconsStyles}>
        <View style={footerIconsLeftStyles}>
          <AntDesign
            color={isLiked ? "#e73838" : "#545454"}
            name={isLiked ? "heart" : "hearto"}
            size={25}
            onPress={() => {
              like(!isLiked);
              if (!isLiked) {
                countLikes(likesCount + 1);
                return;
              }
              countLikes(likesCount - 1);
            }}
          />

          <Fontisto color="#545454" name="comment" size={23} />
          <Ionicons color="#545454" name="paper-plane-outline" size={25} />
        </View>

        <FontAwesome color="#545454" name="bookmark-o" size={25} />
      </View>

      <Text style={likesStyles}>{likes + likesCount} likes</Text>
      <Text style={captionStyles}>{caption}</Text>
      <Text style={timeStyles}>{time} ago</Text>
    </View>
  );
}

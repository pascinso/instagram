import { storiesStyles, stories, React, View, Story, FlatList } from "./utils";

export function useStories() {
  return (
    <View style={storiesStyles}>
      <FlatList
        data={stories}
        keyExtractor={({ name }) => name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: { name, profileImageURL } }) => (
          <Story name={name} source={profileImageURL} />
        )}
      />
    </View>
  );
}

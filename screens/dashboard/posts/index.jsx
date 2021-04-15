import { profiles, React, Post, FlatList } from "./utils";

export function usePosts() {
  return (
    <FlatList
      data={profiles}
      keyExtractor={({ profileImageURL, name }) => profileImageURL + name}
      renderItem={({ item: { profileImageURL, name, posts } }) => (
        <Post
          profileImageSource={profileImageURL}
          name={name}
          postImageSource={posts[0].imageURL}
          caption={posts[0].caption}
          likes={posts[0].likes}
          time={posts[0].time}
        />
      )}
    />
  );
}

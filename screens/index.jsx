import {
  screenOptions,
  tabBarOptions,
  React,
  Navigator,
  Screen,
  useHome,
  useDiscovery,
  usePost,
  useNotifications,
  useProfile,
} from "./utils";

export function useNavigator() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={screenOptions}
      tabBarOptions={tabBarOptions}
    >
      <Screen name="home" component={useHome} />
      <Screen name="discovery" component={useDiscovery} />
      <Screen name="post" component={usePost} />
      <Screen name="notifications" component={useNotifications} />
      <Screen name="profile" component={useProfile} />
    </Navigator>
  );
}

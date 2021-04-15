import { React, Navigator, Screen, useDashboard } from "./utils";

export function useNavigator() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={useDashboard} />
    </Navigator>
  );
}

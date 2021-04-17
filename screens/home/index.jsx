import { React, Navigator, Screen, options, useDashboard } from "./utils";

export function useHome() {
  return (
    <Navigator>
      <Screen name="home" component={useDashboard} options={options} />
    </Navigator>
  );
}

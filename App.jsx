import "react-native-gesture-handler";
import {
  React,
  StatusBar,
  NavigationContainer,
  Navigator,
  SafeAreaView,
} from "./utils";

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar />

        <Navigator />
      </NavigationContainer>
  );
}

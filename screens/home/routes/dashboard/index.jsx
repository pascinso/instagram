import { homeStyles, Posts, React, SafeAreaView, Stories } from "./utils";

export function useDashboard() {
  return (
    <SafeAreaView style={homeStyles}>
      <Stories />
      <Posts />
    </SafeAreaView>
  );
}

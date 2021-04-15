import { dashboardStyles, Posts, React, SafeAreaView, Stories } from "./utils";

export function useDashboard() {
  return (
    <SafeAreaView style={dashboardStyles}>
      <Stories />
      <Posts />
    </SafeAreaView>
  );
}

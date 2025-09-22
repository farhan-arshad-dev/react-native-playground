import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.homePage}
    >
      <Text>Hello World!</Text>

      {/* Web Scentric way to navigation a screen, Show the file name in href cuz of file base router.
          Login Should be defined as Stack.Screen in _layout.tsx. and onClick of the Link navigation to the
          login page.
      */}
      <Link href="/login" style={styles.navButton}>Login Page</Link>
    </View>
  );
}

// defines the styles
const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    width: 100,
    height: 24,
    margin: 8,
    backgroundColor: "coral",
    borderRadius: 8,
    textAlign: "center",
    textAlignVertical: "center"
  }
})

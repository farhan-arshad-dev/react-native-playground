import { useAuth } from "@/lib/auth-context";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View
      style={styles.homePage}
    >
      <Text>Hello World!</Text>
      <Button mode="text" onPress={signOut} icon={"logout"}>Sign Out</Button>
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

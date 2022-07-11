import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text> */}
      <Text style={{ margin: 16, borderWidth: 4, borderColor: "red", padding: 16 }}>
        Hello Everyone, My name is tep
      </Text>
      <Button title="Hello ja" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

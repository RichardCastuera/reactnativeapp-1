import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#00f" }}>Hello World!</Text>
      <TextInput style={styles.style1} placeholder="Input Text" />
      <Button title="Submit" />
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
  style1: {
    borderWidth: 2,
    borderColor: "black",
    padding: 8,
  },
});

import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.userGoals}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button style={styles.styleButton} title="Add Goal" />
      </View>
      <View style={styles.userAddedGoals}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  userGoals: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccccc",
    flex: 1,
    padding: 8,
  },
  styleButton: {
    padding: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    color: "green",
  },
  userAddedGoals: {
    marginVertical: 20,
  },
});

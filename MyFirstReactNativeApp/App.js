import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.styleTitle}>My Goals</Text>
      </View>
      <View style={styles.userGoals}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.userAddedGoals}>
        {courseGoals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  styleTitle: {
    fontSize: 34,
    fontWeight: "bold",
  },
  userGoals: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#cccccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccccc",
    flex: 0.95,
    padding: 8,
  },
  userAddedGoals: {
    flex: 4,
    marginVertical: 20,
  },
});

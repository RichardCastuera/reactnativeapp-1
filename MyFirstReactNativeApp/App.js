import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
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
        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <View style={styles.listGoalItemStyle}>
                <Text style={styles.listGoalTextStyle}>
                  {itemData.item.text}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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
    flex: 5,
    marginVertical: 20,
  },
  listGoalItemStyle: {
    marginVertical: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#C9E4DE",
    borderRadius: 8,
  },
  listGoalTextStyle: {
    fontSize: 18,
    color: "white",
  },
});

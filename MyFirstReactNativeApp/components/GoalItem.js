import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.listGoalItemStyle}>
        <Text style={styles.listGoalTextStyle}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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

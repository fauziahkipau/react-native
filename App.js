import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, sentEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    sentEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.styleInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="ADD GOALS" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
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
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#efefefef",
  },
  styleInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "70%",
    marginRight: 5,
  },
  goalsContainer: {
    flex: 4,
  },
});

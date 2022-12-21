import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function showAddGoalHandler(show)  {
        setModalIsVisible(show);
    };

    function addGoalHandler(enteredGoalText) {
        setCourseGoals(currentCourseGoals => [
            ...currentCourseGoals,
            {text: enteredGoalText, id: Math.random().toString()}
        ]);
        setModalIsVisible(false);
    };

    function deleteGoalHandler(id) {
        setCourseGoals(currentCourseGoals =>  {
            return currentCourseGoals.filter((goal) => goal.id !== id );
        });
    };

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color={"#5e0acc"} onPress={() => showAddGoalHandler(true)} />
      <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={() => showAddGoalHandler(false)}
      />
      <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => {
                return (
                    <GoalItem
                        item={item}
                        onDeleteItem={deleteGoalHandler}
                    />
                )
            }}
            alwaysBounceVertical={false}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 7,
    },
});

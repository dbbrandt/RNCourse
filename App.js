import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandler(enteredGoalText) {
        setEnteredGoalText(enteredGoalText);
    };

    function addGoalHandler() {
        setCourseGoals(currentCourseGoals => [
            ...currentCourseGoals,
            {text: enteredGoalText}
        ]);
    };
  return (
    <View style={styles.appContainer}>
      <View  style={styles.inputContainer}>
          <TextInput
              style={styles.textInput}
              placeholder='Your course goal!'
              onChangeText={goalInputHandler}/>
          <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => {
              return (
                  <View style={styles.goalItem}>
                      <Text style={styles.goalText} >{item.text}</Text>
                  </View>
                  );
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
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 7,
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
    },
    goalText: {
        color: 'white'
    }
});

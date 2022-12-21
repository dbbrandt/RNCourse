import {StyleSheet, Text, View, Pressable, Modal} from "react-native";

function GoalItem(props) {

    return (
            <View style={styles.goalItem}>
                <Pressable
                    android_ripple={{ color: '#210644'}}
                    onPress={() => props.onDeleteItem(props.item.id)}
                    style={( {pressed} ) => pressed && styles.pressedItem }
                >
                    <Text style={styles.goalText} >{props.item.text}</Text>
                </Pressable>
            </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
    },
    pressedItem: {
      opacity: 0.5,
    },
    goalText: {
        color: 'white'
    }
});
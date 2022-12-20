import {StyleSheet, Text, View, Pressable} from "react-native";

function GoalItem(props) {

    return (
        <Pressable onPress={() => props.onDeleteItem(props.item.id)} >
            <View style={styles.goalItem}>
                <Text style={styles.goalText} >{props.item.text}</Text>
            </View>
        </Pressable>
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
    goalText: {
        color: 'white'
    }
});
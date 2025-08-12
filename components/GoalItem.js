import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.index)}>
            <View>
                <Text key={props.index} style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create(
    {
        goalText: {
            fontSize: 16,
            padding: 10,
            marginVertical: 5,
            backgroundColor: '#FFFF',
            borderRadius: 5,
            borderLeftWidth: 3,
            borderLeftColor: '#007AFF'
        }
    }
);

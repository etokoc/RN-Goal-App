import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
    return (
        <View>
            <Text key={props.index} style={styles.goalText}>{props.text}</Text>
        </View>);
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


import { StyleSheet, View, Text, TextInput, Button } from "react-native";

function GoalInput(props) {
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder='Your course goal'
            onChangeText={props.onTextChanged}
            value={props.enteredText}
        />
        <Button title='Add Goal' onPress={props.onAddGoal} />
    </View>
}


export default GoalInput;


const styles = StyleSheet.create(
    {
        inputContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 8,
            // Android için gölge
            elevation: 8,
            borderColor: "#fff"
        },
        input: {
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            margin: 10,
            borderRadius: 5,
            backgroundColor: "#f0f0f0",
        },
    }
);

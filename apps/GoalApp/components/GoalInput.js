import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Modal } from "react-native";


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        if (enteredText != null && enteredText.trim() != '') {
            setEnteredGoalText(enteredText);
        }
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        props.onCancel();
    }

    function cancelHandler() {
        setEnteredGoalText('');
        props.onCancel();
    }

    return (
        <Modal visible={props.modalVisible} animationType="fade" transparent={true}>
            <View style={styles.modalOverlay}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Your course goal'
                        onChangeText={goalInputHandler}
                        value={enteredGoalText}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title='Add Goal' onPress={addGoalHandler} />
                        <Button title='Cancel' onPress={cancelHandler} color="#d60000" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}


export default GoalInput;


const styles = StyleSheet.create(
    {
        modalOverlay: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        inputContainer: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: "#2B303A",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 8,
            // Android için gölge
            elevation: 8,
            borderColor: "#fff",
            borderRadius: 10,
            minHeight: 200,
            minWidth: 350
        },
        input: {
            borderWidth: 2,
            borderColor: '#ccc',
            padding: 10,
            width: '100%',
            margin: 10,
            minWidth: 300,
            borderRadius: 5,
            backgroundColor: "#f0f0f0",
        },
        buttonContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
        }
    }
);

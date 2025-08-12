import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    const [pressed, setPressed] = useState(false);

    const handlePressed = (pressed) => {
        setPressed(pressed);
    };

    return (
        <Pressable
            android_ripple={{ color: "#000" }}
            style={({ pressed }) => handlePressed(pressed)}
            onPress={props.onDeleteItem.bind(this, props.index)}
        >
            <View>
                <Text
                    key={props.index}
                    style={[styles.goalText, pressed && styles.goalTextPressed]}
                >
                    {props.text}
                </Text>
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
            backgroundColor: '#FFF',
            borderRadius: 5,
            borderLeftWidth: 3,
            borderLeftColor: '#007AFF'
        },
        goalTextPressed: {
            backgroundColor: '#d60000',
            color: "#FFF",
            transform: [{ scale: 0.98 }]
        }
    }
);

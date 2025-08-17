import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Image } from 'react-native';
import Toast from 'react-native-toast-message';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {

  const [courseGoals, setCountCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function modalVisibleHandler() {
    setModalVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim() !== '') {
      let _id = Math.random().toString();
      setCountCourseGoals(currentGoals => {
        return [...currentGoals, { text: enteredGoalText, id: _id }];
      });

      Toast.show({
        type: 'success',
        text1: 'Başarılı!',
        text2: `"${enteredGoalText} ${_id}" hedefi eklendi`,
        position: 'bottom',
        visibilityTime: 3000,
      });
    }
  }

  function modalVisibleHandler() {
    setModalVisible(!modalVisible);
  }

  function deleteGoalHandler(id) {
    setCountCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id)
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./assets/goal.png')} style={styles.image} resizeMode='contain' />
        <Text style={styles.headerText}>Goal App</Text>
      </View>
      <Button title='Add Goal' style={styles.button} onPress={modalVisibleHandler} />
      <GoalInput onAddGoal={addGoalHandler} modalVisible={modalVisible} onCancel={modalVisibleHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renƒderItem={(itemData) => {
          return <GoalItem index={itemData.item.id} text={itemData.item.text}
            onDeleteItem={deleteGoalHandler} />
        }}
        />
      </View>

      <StatusBar style="light" />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 44,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    marginHorizontal: 16,
    padding: 10,
    gap: 10,
    backgroundColor: "#2937ff",
    borderLeftWidth: 10,
    borderLeftColor: "#007AFF",
    borderRightWidth: 10,
    borderRightColor: "#007AFF",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: 600
  },
  container: {
    flex: 1,
    backgroundColor: "#2B303A",
  },
  goalsContainer: {
    flex: 4,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#c9f0ff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  image: {
    width: 60,
    height: 60
  }
});

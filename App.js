import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import Toast from 'react-native-toast-message';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {

  const [courseGoals, setCountCourseGoals] = useState([]);



  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim() !== '') {
      setCountCourseGoals(currentGoals => {
        return [...currentGoals, enteredGoalText];
      });

      Toast.show({
        type: 'success',
        text1: 'Başarılı!',
        text2: `"${enteredGoalText}" hedefi eklendi`,
        position: 'bottom',
        visibilityTime: 3000,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}><Text style={styles.headerText}>Goal App</Text></View>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem index={itemData.index} text={itemData.item} />
        }}
        />
      </View>

      <StatusBar style="auto" />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: 600
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#2B303A",
  },
  goalsContainer: {
    flex: 4,
    marginTop: 16,
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
  }
});

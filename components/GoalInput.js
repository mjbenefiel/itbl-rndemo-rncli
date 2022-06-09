import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">

      <View style={styles.inputContainer}>
      <View>
      <Image style={styles.image} source={require('../assets/images/iterable.png')} />
      <TextInput
      multiline={true}
      style={styles.textInput}
      placeholder="Your course goal"
      onChangeText={goalInputHandler}
      value={enteredGoalText}
    />
      </View>

        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="Add Goal" onPress={addGoalHandler} color="#0056ee" />
        </View>

        <View style={styles.button}>
        <Button title="Cancel" onPress={props.onCancel} color="#f15f0d"/> 
        </View>
    
        </View>
        
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignSelf: 'stretch',
    textAlign: 'center',
    // backgroundColor: '#311b6b'
    
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: '100%',
    padding: 8,
    alignSelf: 'stretch',
    // testtextAlign: 'center',
    borderColor: '#c8c8c8',
    borderRadius: 6,
    backgroundColor: '#fbfbfb',
    color: '#474747'
  },

  buttonContainer: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },

  button: {
      width: 100,
      marginHorizontal: 8,
      
  },

  image: {
    alignSelf: 'center',
    marginBottom: 24,
    height: 99,
    width: 125
  }
});

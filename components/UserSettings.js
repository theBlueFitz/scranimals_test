import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { updatePetName } from "../utils/dbCalls";

export const UserSettings = ({ navigation, route }) => {
  const { currUser, setCurrUser } = useContext(UserContext);
  const [petName, setPetName] = useState("");
  const handleNameInput = (newName) => {
    setPetName(newName);
  };
  const handleNameChange = () => {
    // Alert.alert(
    //   "Change Pet Name",
    //   "Are you sure you want to change your pet's name?",
    //   [
    //     {
    //       text: "Yes",
    //       onPress: () => {
    // updatePetName(currUser, setCurrUser, petName);
    // alert(`Pet name changed successfully. Say hello to ${petName}!`);
    //       },
    //     },
    //     {
    //       text: "Cancel",
    //       onPress: () => {},
    //       style: "cancel",
    //     },
    //   ]
    // );
    if (confirm("Are you sure you want to change your pet name?")) {
      updatePetName(currUser, setCurrUser, petName);
      alert(`Pet name changed successfully. Say hello to ${petName}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        title="New Pet"
        onPress={() => navigation.navigate("PickPet")}
      >
        <Text style={styles.buttonText}>Adopt New Pet</Text>
      </Pressable>
      <View>
        <TextInput
          onChangeText={handleNameInput}
          style={styles.textBoxes}
          placeholder="New Pet Name"
          label={"newName"}
        />
        <Pressable
          style={styles.button}
          title="Change Name"
          onPress={handleNameChange}
        >
          <Text style={styles.buttonText}>Change Pet Name</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE89E",
  },
  textBoxes: {
    backgroundColor: "#ffffff",
    width: 250,
    height: 60,
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 10,
    marginLeft: 15,
  },
  button: {
    width: 280,
    height: 70,
    borderRadius: 100 / 5,
    backgroundColor: "#3BCEAC",
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    paddingVertical: 15,
  },
});

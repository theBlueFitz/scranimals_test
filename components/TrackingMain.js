import {
  View,
  ImageBackground,
  Text,
  Pressable,
  Image,
  Button,
  StyleSheet,
} from "react-native";
// import { styles } from "../Styles";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export const TrackingMain = ({ navigation, route }) => {
  const { currUser } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        title="Track Water"
        onPress={() => navigation.navigate("TrackingWater")}
      >
        <Text style={styles.buttonText}>Track Water</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        title="Track Steps"
        onPress={() => navigation.navigate("Pedometer")}
      >
        <Text style={styles.buttonText}>Track Steps</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        title="Track Food"
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Track Food</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        title="Scranimal"
        onPress={() => navigation.navigate("Scranimal")}
      >
        <Text style={styles.buttonText}>Scranimal</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        title="Diary"
        onPress={() => navigation.navigate("Diary")}
      >
        <Text style={styles.buttonText}>My Diary</Text>
      </Pressable>
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

  button: {
    width: 280,
    height: 70,
    borderRadius: 100 / 5,
    backgroundColor: "#3BCEAC",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    paddingVertical: 15,
  },
});

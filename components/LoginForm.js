import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import { ref, set, get, child, getDatabase, push } from "firebase/database";
import { database } from "../firebase";
import { UserContext } from "../contexts/User";
import { getUser, postUser } from "../utils/dbCalls";

export const LoginForm = ({ navigation, route }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    wallet: 0,
    pet: "",
    inventory: "",
  });
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { setCurrUser, currUser, isLoggedIn, setIsLoggedIn } =
    useContext(UserContext);

  const handleEmailChange = (email) => {
    setUser((prevUser) => {
      const copyUser = { ...prevUser };
      copyUser.email = email;
      return copyUser;
    });
  };

  const handlePasswordChange = (password) => {
    setUser((prevUser) => {
      const copyUser = { ...prevUser };
      copyUser.password = password;
      return copyUser;
    });
  };

  const handleLogin = () => {
    setIsError(false);
    return getUser(user).then((arr) => {
      if (arr.length < 1) {
        setIsError(true);
        setErrorMsg("User does not exist. Please register.");
      } else if (arr[0].password !== user.password) {
        setIsError(true);
        setErrorMsg("Invalid password.");
      } else {
        navigation.navigate("TrackingMain"),
          setCurrUser(arr[0]),
          setIsLoggedIn(true);
      }
    });
  };
  const handleSignUp = () => {
    setIsError(false);
    return getUser(user).then((arr) => {
      if (arr.length > 0) {
        setIsError(true);
        setErrorMsg("User already exists. Please login.");
      } else if (user.email === "" || !user.email.includes("@")) {
        setIsError(true);
        setErrorMsg("Please enter a valid email.");
      } else if (
        user.password === "" ||
        user.password.length < 8 ||
        user.password.length >= 20
      ) {
        setIsError(true);
        setErrorMsg(
          "Please enter a valid password. Minimum of 8 characters and maximum 20."
        );
      } else {
        return postUser(user, setCurrUser, setIsLoggedIn, navigation.navigate);
      }
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img_assets/Autumn_Landscape.jpg")}
        resizeMode="cover"
        style={styles.img}
      >
        <View>
          <TextInput
            onChangeText={handleEmailChange}
            style={styles.textBoxes}
            placeholder="email"
            label={"email"}
          />
          <TextInput
            onChangeText={handlePasswordChange}
            style={styles.textBoxes}
            placeholder="password"
            secureTextEntry={true}
            label={"password"}
          />
        </View>
        {/* Conditional rendering for error msg */}
        {isError && (
          <View>
            <Text style={styles.error}>{errorMsg}</Text>
          </View>
        )}
        <Pressable title="Login" style={styles.buttons} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable
          title="Register"
          style={styles.buttons}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBox: {
    flexDirection: "row",
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  textBoxes: {
    backgroundColor: "#ffffff",
    width: 250,
    height: 60,
    margin: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  img: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3BCEAC",
    justifyContent: "space-evenly",
    height: 60,
    width: 200,
    borderRadius: 100 / 2,
    marginBottom: 10,
  },
  login: {
    backgroundColor: "#000000",
    color: "#000",
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  error: {
    fontSize: 30,
    textAlign: "center",
  },
});

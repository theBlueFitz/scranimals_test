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
  });
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { setCurrUser, currUser, isLoggedIn, setIsLoggedIn } =
    useContext(UserContext);
  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.dir(e.target.placeholder)
    setUser((prevUser) => {
      const copyUser = { ...prevUser };
      copyUser[e.target.placeholder] = e.target.value;
      return copyUser;
    });
  };

  const handleLogin = () => {
    setIsError(false);
    return getUser(user)
      .then((arr) => {
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
      })
      .catch((error) => {
        console.error;
      });
  };
  const handleSignUp = () => {
    setIsError(false);
    return getUser(user)
      .then((arr) => {
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
          return postUser(
            user,
            setCurrUser,
            setIsLoggedIn,
            navigation.navigate
          );
        }
      })
      .catch(console.log);
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
            onChange={handleChange}
            style={styles.textBoxes}
            placeholder="email"
            label={"email"}
          />
          <TextInput
            onChange={handleChange}
            style={styles.textBoxes}
            placeholder="password"
            secureTextEntry={true}
            label={"password"}
          />
        </View>
        {/* Conditional rendering for error msg */}
        {isError && (
          <View>
            <Text>{errorMsg}</Text>
          </View>
        )}
        <Pressable title="Login" style={styles.buttons} onPress={handleLogin}>
          <Text>Login!</Text>
        </Pressable>
        <Pressable
          title="Register"
          style={styles.buttons}
          onPress={handleSignUp}
        >
          <Text>Register</Text>
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
    alignSelf: "center",
    backgroundColor: "#0EAD69",
    justifyContent: "space-evenly",
    height: 60,
    width: 200,
    borderRadius: 100 / 2,
  },
  login: {
    backgroundColor: "#000000",
    color: "#000",
  },
});

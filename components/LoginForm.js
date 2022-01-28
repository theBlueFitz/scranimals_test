import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set, get, child, getDatabase, push } from "firebase/database";
import { database } from "../firebase";

export const LoginForm = ({ navigation, route }) => {
  const [user, setUser] = useState({ email: "", password: "", wallet: 0 });
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.dir(e.target.placeholder)
    setUser((prevUser) => {
      const copyUser = { ...prevUser };
      copyUser[e.target.placeholder] = e.target.value;
      console.log(user);
      return copyUser;
    });
  };

  const handleLogin = () => {
    setIsError(false);
    const logInDbRef = ref(database);
    get(child(logInDbRef, `/Users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersArray = [];
          // convert JSON to array
          for (const key in snapshot.val()) {
            usersArray.push(snapshot.val()[key]);
          }
          // filter out matching user
          const matchingUser = usersArray.filter((userObj) => {
            return userObj.email === user.email;
          });
          console.log(user, matchingUser);
          // if matchingUser is empty, error is true and set error msg
          matchingUser.length < 1
            ? (setIsError(true),
              setErrorMsg("User does not exist. Please register."))
            : // if matchingUser[0]
            matchingUser[0].password !== user.password
            ? (setIsError(true), setErrorMsg("Invalid password."))
            : navigation.navigate("TrackingMain");
        }
      })
      .catch((error) => {
        console.error;
      });
  };

  // const auth = getAuth();

  const handleSignUp = () => {
    const signUpDbRef = ref(database, "/Users");
    const newUserId = push(signUpDbRef);
    set(newUserId, user);
    navigation.navigate("PickPet");
    // createUserWithEmailAndPassword(auth, user.email, user.password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user
    //     console.log(user.email)
    //   })
    //   .catch((error) => alert(error.message))
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

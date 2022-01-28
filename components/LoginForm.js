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

export const LoginForm = ({ navigation, route }) => {
  const [user, setUser] = useState({ email: "", password: "", wallet: 0 });
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { setCurrUser, currUser, isLoggedin, setIsLoggedIn } =
    useContext(UserContext);
  console.log({ currUser });

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
    const logInDbRef = ref(database);
    get(child(logInDbRef, `/Users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userArray = [];
          for (const obj in snapshot.val()) {
            if (snapshot.val()[obj].email === user.email) {
              userArray.push({ ...snapshot.val()[obj], userId: obj });
            }
          }
          console.log(userArray);
          if (userArray.length < 1) {
            setIsError(true);
            setErrorMsg("User does not exist. Please register.");
          } else if (userArray[0].password !== user.password) {
            setIsError(true);
            setErrorMsg("Invalid password.");
          } else {
            navigation.navigate("TrackingMain"),
              setCurrUser(userArray[0]),
              setIsLoggedIn(!isLoggedin);
          }
        }
      })
      .catch((error) => {
        console.error;
      });
  };

  console.log({ currUserId });

  const handleSignUp = () => {
    setIsError(false);
    // const logInDbRef = ref(database);
    // get(child(logInDbRef, `/Users`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       const usersArray = [];
    //       for (const key in snapshot.val()) {
    //         usersArray.push({ [key]: snapshot.val()[key] });
    //       }
    //       const matchingUser = usersArray.filter((userObj) => {
    //         for (let key in userObj) {
    //           return userObj[key].email === user.email;
    //         }
    //       });
    //       setCurrUserId(Object.keys(matchingUser[0])[0]);
    //       if (matchingUser.length > 0) {
    //         setIsError(true),
    //           setErrorMsg("User already exists. Please log in.");
    //       } else {
    //         const signUpDbRef = ref(database, "/Users");
    //         const newUserId = push(signUpDbRef);
    //         return set(newUserId, user);
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     console.error;
    //   });
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

import { ref, child, get, push, set } from "firebase/database";
import { database } from "../firebase";

export const getUser = (userObject) => {
  const logInDbRef = ref(database);
  return get(child(logInDbRef, `/Users`)).then((snapshot) => {
    if (snapshot.exists()) {
      const userArray = [];
      for (const obj in snapshot.val()) {
        if (snapshot.val()[obj].email === userObject.email) {
          userArray.push({ ...snapshot.val()[obj], userId: obj });
        }
      }
      return userArray;
    }
  });
};

export const postUser = (userObject, setCurrUser, setIsLoggedIn, nav) => {
  const signUpDbRef = ref(database, "/Users");
  const newUserId = push(signUpDbRef);
  set(newUserId, userObject)
    .then(() => {
      return getUser(userObject);
    })
    .then((arr) => {
      nav("PickPet");
      setCurrUser(arr[0]);
      setIsLoggedIn(true);
    });
};

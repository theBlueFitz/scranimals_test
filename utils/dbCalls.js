import {
  ref,
  child,
  get,
  push,
  set,
  update,
  query,
  orderByKey,
} from "firebase/database";
import { database } from "../firebase";
import { getCurrentDate } from "./utils";

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

export const getUserWater = (userId) => {
  return get(
    query(ref(database, `/Users/` + userId + "/water"), orderByKey())
  ).then((snapshot) => {
    if (snapshot.exists()) {
      const sortedWaterArray = [];
      for (const obj in snapshot.val()) {
        sortedWaterArray.push({ [obj]: snapshot.val()[obj].water });
      }
      return sortedWaterArray.reverse();
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

export const patchUserPet = (userId, petObj, setCurrUser, nav) => {
  const dbRef = ref(database);
  const usersRef = child(dbRef, `/Users/` + userId);
  update(usersRef, {
    pet: petObj,
  })
    .then(() => {
      return get(child(dbRef, `/Users/` + userId));
    })
    .then((snapshot) => {
      const updatedUser = { userId };
      for (const key in snapshot.val()) {
        updatedUser[key] = snapshot.val()[key];
      }
      setCurrUser(updatedUser);
      nav("TrackingMain");
    });
};

export const patchUserWater = (userId, water, today, currUser, setCurrUser) => {
  const waterRef = ref(database, `/Users/` + userId + `/water/${today}`);
  set(waterRef, {
    water,
  });
  getUser(currUser).then((arr) => {
    setCurrUser({ ...arr[0] });
  });
};

export const patchUserSteps = (userId, steps, today, currUser, setCurrUser) => {
  const stepRef = ref(database, `/Users/` + userId + `/steps/${today}`)
  set(stepRef, {
    steps,
  });
  getUser(currUser).then((arr) => {
    setCurrUser({ ...arr[0] });
  });
};

export const patchWallet = (currUser, cost) => {
  const dbRef = ref(database);
  const userRef = child(dbRef, `/Users/` + currUser.userId);
  let wallet = (currUser.wallet += cost);
  update(userRef, {
    wallet: wallet,
  });
};

export const patchUserInventory = (itemObj, currUser, setCurrUser) => {
  const dbRef = ref(database, `/Users/` + currUser.userId + `/inventory`);
  const newItem = push(dbRef);
  set(newItem, itemObj);
  patchWallet(currUser, -itemObj.itemCost);
  getUser(currUser).then((arr) => {
    setCurrUser({ ...arr[0] });
  });
};

export const removeUserItem = (itemObj, currUser, setCurrUser) => {
  const dbRef = ref(database);
  const usersRef = child(dbRef, `/Users/` + currUser.userId + `/inventory`);
  // Update itemId with null, deletes the item
  update(usersRef, {
    [itemObj.itemId]: null,
  });
  getUser(currUser).then((arr) => {
    setCurrUser({ ...arr[0] });
  });
};

export const updatePetName = (currUser, setCurrUser, newName) => {
  const dbRef = ref(database);
  const usersRef = child(dbRef, `/Users/` + currUser.userId + `/pet`);
  update(usersRef, {
    petName: newName,
  });
  getUser(currUser).then((arr) => {
    setCurrUser({ ...arr[0] });
  });
};

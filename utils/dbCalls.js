import { ref, child, get, push, set, update } from "firebase/database";
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

export const patchWallet = (currUser, setCurrUser, cost) => {
  const dbRef = ref(database);
  const userRef = child(dbRef, `/Users/` + currUser.userId);
  let wallet = 0;
  setCurrUser((curr) => {
    const newWallet = { ...curr };
    newWallet.wallet += cost;
    wallet = newWallet.wallet;
    return newWallet;
  });
  update(userRef, {
    wallet: wallet,
  });
};

export const patchUserInventory = (itemObj, currUser, setCurrUser) => {
  const dbRef = ref(database, `/Users/` + currUser.userId + `/inventory`);
  const newItem = push(dbRef);
  set(newItem, itemObj);
  patchWallet(currUser, setCurrUser, -itemObj.itemCost)
    .then(() => {
      return getUser(currUser);
    })
    .then((arr) => {
      setCurrUser(arr[0]);
    });
};

export const removeUserItem = (itemObj, currUser, setCurrUser) => {
  const dbRef = ref(database);
  const usersRef = child(dbRef, `/Users/` + currUser.userId + `/inventory`);
  // Update itemId with null, deletes the item
  update(usersRef, {
    [itemObj.itemId]: null,
  })
    .then(() => {
      console.log("Item deleted.");
      // Fetch user in database with updated items
      return getUser(currUser);
    })
    .then((arr) => {
      // set UserContext with updated user
      setCurrUser(arr[0]);
    });
};

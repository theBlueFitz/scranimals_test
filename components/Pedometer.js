import { useEffect, useState, useContext } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Pressable,
  TextInput,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import { getCurrentDate } from '../utils/utils';
import { patchUserSteps, patchWallet } from '../utils/dbCalls';
import { UserContext } from '../contexts/User';

export const Pedometer = ({ navigation, route }) => {
  const [stepCount, setStepCount] = useState(0);
  const { currUser, setCurrUser } = useContext(UserContext);
  const [isPos, setIsPos] = useState(true);
  console.log({ isPos });
  useEffect(() => {
    patchUserSteps(currUser.userId, stepCount, today, currUser, setCurrUser);
  }, [stepCount]);
  const today = getCurrentDate();

  const addSteps = () => {
    setIsPos(true);
    setStepCount((currentSteps) => {
      const newStepCnt = currentSteps + 500;
      return newStepCnt;
    });
    patchWallet(currUser, 1)
  };

  const lessSteps = () => {
    setStepCount((currSteps) => {
      if (currSteps === 0) {
        return currSteps;
      } else {
        const newSteps = currSteps - 500;
        return newSteps;
      }
    });
    patchWallet(currUser, -1)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{getCurrentDate()}</Text>
      <View style={styles.counterBox}>
        <Text style={styles.count}>{stepCount}</Text>
      </View>
      <View style={styles.buttonz}>
        <Pressable onPress={lessSteps}>
          <Text style={styles.minus}>-</Text>
        </Pressable>
        <Pressable onPress={addSteps}>
          <Text style={styles.plus}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  glassCnt: {
    width: 250,
    height: 408,
    borderBottomColor: '#000',
    borderWidth: 3,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  glassBtm: {
    width: 250,
    height: 48,
    borderBottomColor: '#000',
    borderWidth: 3,
    borderTopWidth: 0,
    borderBottomLeftRadius: 100 / 2,
    borderBottomRightRadius: 100 / 2,
    backgroundColor: 'skyblue',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffd23f',
  },
  date: {
    fontSize: 50,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  counterBox: {
    width: 250,
    height: 100,
    backgroundColor: 'white',
    opacity: 1,
    borderWidth: 20,
    borderRadius: 10,
  },
  count: {
    fontSize: 50,
    textAlign: 'center',
  },
  buttonz: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
  },
  plus: {
    fontSize: 40,
    backgroundColor: 'green',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    color: '#fff',
  },
  minus: {
    fontSize: 40,
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    color: '#fff',
  },
});

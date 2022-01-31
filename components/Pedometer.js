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
import { patchUserWater } from '../utils/dbCalls';
import { UserContext } from '../contexts/User';

export const Pedometer = ({ navigation, route }) => {
  const [stepCount, setStepCount] = useState(0);
  const { currUser, setCurrUser } = useContext(UserContext);
  useEffect(() => {
    patchUserSteps(currUser.userId, stepCount, currUser.wallet);
    setCurrUser((curr) => {
      return { ...curr, wallet: curr.wallet + 1 };
    });
    // console.log(currUser);
  }, [stepCount]);

  const addSteps = () => {
    setStepCount((currentSteps) => {
      const newStepCnt = currentSteps + 500;
      return newStepCnt;
    });
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
  };

  return (
    <View style={styles.container}>
      <Text>{getCurrentDate()}</Text>

      <Text>{stepCount}</Text>
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
    justifyContent: 'center',
    backgroundColor: '#ffd23f',
  },
  waterBoxStart: {
    width: 250,
    height: 48,
    backgroundColor: 'skyblue',
    opacity: 1,
    marginTop: 1,
    borderBottomLeftRadius: 3 / 20,
    borderBottomRightRadius: 3 / 20,
  },
  waterBox: {
    width: 250,
    height: 48,
    backgroundColor: 'skyblue',
    opacity: 1,
    marginTop: 1,
    marginBottom: 1,
    borderWidth: 3,
    borderTopWidth: 0,
    borderBottomWidth: 0,
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

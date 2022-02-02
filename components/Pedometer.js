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
import { getCurrentDate, dateConverter } from '../utils/utils';
import { patchUserSteps, patchWallet } from '../utils/dbCalls';
import { UserContext } from '../contexts/User';


export const Pedometer = ({ navigation, route }) => {
  const [stepCount, setStepCount] = useState(0);
  const { currUser, setCurrUser } = useContext(UserContext);
  const [isPos, setIsPos] = useState(true);
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
      <Text style={styles.heading}>{dateConverter(today)}</Text>
      <View style={styles.counterBox}>
        <Text style={styles.count}>{stepCount}</Text>
      </View>
      <Text style={styles.heading}>Press plus to add 500 steps</Text>
      <View style={styles.buttonz}>
        <Pressable onPress={lessSteps}>
        <Image
            source={{
              uri: 'https://i.ibb.co/4g0R3Yj/minus-circle-solid-whitebg.png',
            }}
            style={styles.icon}
          />
        </Pressable>
        <Pressable onPress={addSteps}>
        <Image
            source={{
              uri: 'https://i.ibb.co/J7f3gC3/plus-circle-solid-whitebg.png',
            }}
            style={styles.icon}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffd23f',
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#540D6E",
    marginTop: 50,
  },
  counterBox: {
    width: 250,
    height: 100,
    backgroundColor: '#3bceac',
    opacity: 1,
    borderWidth: 20,
    borderRadius: 10,
    borderColor: '#fff',
  },
  count: {
    fontSize: 50,
    textAlign: 'center',
    color: '#fff',
  },
  buttonz: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
    marginBottom: 100,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

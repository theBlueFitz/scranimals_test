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
import { patchUserWater, patchWallet } from '../utils/dbCalls';
import { UserContext } from '../contexts/User';

export const TrackingWater = ({ navigation, route }) => {
  const [cupCount, setCupCount] = useState(0);
  const { currUser, setCurrUser } = useContext(UserContext);

  console.log (currUser);
  useEffect(() => {
    patchUserWater(currUser.userId, cupCount, today);
  }, [cupCount]);

  const addCup = () => {
    setCupCount((currentCup) => {
      if (cupCount === 8) {
        return cupCount;
      } else {
        patchWallet(currUser, 1)
        const newCupCnt = currentCup + 1;
        return newCupCnt;
      }
    });
  };

  const lessCup = () => {
    setCupCount((currCup) => {
      if (currCup === 0) {
        return currCup;
      } else {
        patchWallet(currUser, -1)
        const newCup = currCup - 1;
        return newCup;
      }
    });
  };
  const howMoist = (cupCount) => {
    const wetArray = [];
    for (let x = 1; x <= cupCount; x++) {
      wetArray.push(<View style={styles.waterBox} key={x} />);
    }
    if (wetArray.length >= 8) {
      return wetArray;
    } else return wetArray;
  };
  const today = getCurrentDate()
  return (
    <View style={styles.container}>
      <Text>{today}</Text>
      <View style={styles.glassCnt}>
        {howMoist(cupCount).map((div) => div)}
      </View>
      <View style={styles.glassBtm} />
      <Text>{cupCount}</Text>
      <View style={styles.buttonz}>
        <Pressable onPress={lessCup}>
          <Text style={styles.minus}>-</Text>
        </Pressable>
        <Pressable onPress={addCup}>
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

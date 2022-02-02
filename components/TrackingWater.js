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
import { patchUserWater, patchWallet } from '../utils/dbCalls';
import { UserContext } from '../contexts/User';

export const TrackingWater = ({ navigation, route }) => {
  const [cupCount, setCupCount] = useState(0);
  const { currUser, setCurrUser } = useContext(UserContext);

  useEffect(() => {
    patchUserWater(currUser.userId, cupCount, today, currUser, setCurrUser);
  }, [cupCount]);

  const addCup = () => {
    setCupCount((currentCup) => {
      if (cupCount === 8) {
        return cupCount;
      } else {
        patchWallet(currUser, 1);
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
        patchWallet(currUser, -1);
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
  const today = getCurrentDate();
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{dateConverter(today)}</Text>
      <View style={styles.bottleCntr}>
        <Image
          source={require('../img_assets/water_bottle_empty.png')}
          style={styles.bottle}
        />
        <View style={styles.glassCnt}>
          {howMoist(cupCount).map((div) => div)}
        </View>
      </View>
      <View style={styles.buttonz}>
        <Pressable onPress={lessCup}>
          <Image
            source={{
              uri: 'https://i.ibb.co/4g0R3Yj/minus-circle-solid-whitebg.png',
            }}
            style={styles.icon}
          />
        </Pressable>
        <Text style={styles.count}>{cupCount}</Text>
        <Pressable onPress={addCup}>
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
  glassCnt: {
    width: 235,
    height: 408,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 1,
    elevation: 1,
    position: 'absolute',
    bottom: 31,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd23f',
  },
  waterBox: {
    width: 160,
    height: 32,
    backgroundColor: '#c8fff7',
    opacity: 1,
    marginTop: 1,
    marginBottom: 2,
    zIndex: 1,
    elevation: 1,
  },
  buttonz: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  bottleCntr: {
    width: 168,
    height: 485,
    alignItems: 'center',
  },
  bottle: {
    height: 485,
    width: 166,
    zIndex: 5,
    elevation: 5,
  },
  date: {
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
    color: '#540D6E',
  },
  count: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#540D6E',
  },
});

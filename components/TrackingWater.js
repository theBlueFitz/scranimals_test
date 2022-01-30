import { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Pressable,
  TextInput,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import { waterTracker } from '../utils/utils';

export const TrackingWater = ({ navigation, route }) => {
  const [cupCount, setCupCount] = useState(0);
  const [waterInput, setWaterInput] = useState(0);

  // This function updates waterInput upon user interaction
  const onChangeText = (e) => {
    setWaterInput(Number(e));
  };

  // This function does the following:
  // - updates the current cupCount (displayed)
  const addCup = () => {
    setCupCount((currentCup) => {
      const newCupCnt = currentCup + 1;
      return newCupCnt;
    });
  };
  
  const lessCup = () => {
    setCupCount((currCup) => {
      if(currCup === 0) {
        return currCup
      } else {
        const newCup = currCup - 1;
        return newCup;
      }
    })
  }

  // When firebase is working, this will mount the current cupCount of the user everytime cupCount gets updated and updates firebase
  // useEffect(() => {
  //   console.log({ water: { ml: cupCount } });
  // }, [cupCount]);

  return (
    <View style={styles.container}>
        <View style={styles.glassCnt}>
          <View style={styles.waterBox} />
          <View style={styles.waterBox} />
          <View style={styles.waterBox} />
          <View style={styles.waterBox} />
          <View style={styles.waterBox} />
          <View style={styles.waterBox} />
          <View style={styles.waterBox} />
          <View style={styles.waterBox} />

        </View>
        <Text>{cupCount}</Text>
        <View style={styles.buttonz}>
          <Pressable onPress={lessCup}>
            <Text style={styles.minus}>-</Text>
          </Pressable>
          < Pressable onPress={addCup}>
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
    backgroundColor: 'blue',
    opacity: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd23f'
  },
  waterBox: {
    width: 240,
    height: 48,
    backgroundColor: 'skyblue',
    opacity: 1,
    marginTop: 2,
  },
  buttonz: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250
  },
  plus: {
    fontSize: 40,
    backgroundColor: 'green',
    width: 40,
    height:40,
    borderRadius: 40/2,
    color: '#fff'
  },
  minus: {
    fontSize: 40,
    backgroundColor: 'red',
    width: 40,
    height:40,
    borderRadius: 40/2,
    color: '#fff'
  }
})
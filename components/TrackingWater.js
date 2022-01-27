import { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  Pressable,
  TextInput,
  Image,
  Button,
} from 'react-native';
import { styles } from '../Styles';
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
      return waterTracker(currentCup, waterInput, 15);
    });
  };

  // When firebase is working, this will mount the current cupCount of the user everytime cupCount gets updated and updates firebase
  useEffect(() => {
    console.log({ water: { ml: cupCount } });
  }, [cupCount]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img_assets/garden_generated.jpg')}
        resizeMode='cover'
        style={styles.img}
      >
        <Text>{cupCount}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          defaultValue={waterInput}
          placeholder='0'
          keyboardType='numeric'
        />
        <Pressable title='Add Cup' onPress={addCup}>
          <Text>&#43;</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

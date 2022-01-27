import { useState } from 'react';
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
  const onChangeText = (e) => {
    setWaterInput(e.target.value);
  };
  console.log(waterInput);
  const addCup = () => {
    setCupCount((currentCup) => {
      return waterTracker(currentCup, waterInput, 15);
    });
  };

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
          keyboardType='numeric'
        />
        <Pressable title='Add Cup' onPress={addCup}>
          Add Cup
        </Pressable>
      </ImageBackground>
    </View>
  );
};

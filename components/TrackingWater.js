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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const TrackingWater = ({ navigation, route }) => {
  const [cupCount, setCupCount] = useState(0);
  const [waterInput, setWaterInput] = useState(0);
  const onChangeText = (e) => {
    setWaterInput(Number(e));
  };
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
          defaultValue={waterInput}
          placeholder='0'
          keyboardType='numeric'
        />
        <Pressable title='Add Cup' onPress={addCup}>
          <FontAwesomeIcon icon={faPlus} />
        </Pressable>
      </ImageBackground>
    </View>
  );
};

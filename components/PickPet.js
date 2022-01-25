import React, { useState } from 'react';
const {
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
  Image,
} = require('react-native');
import { styles } from '../Styles';
import bg from '../img_assets/Autumn_Landscape.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  logIfNoNativeHook,
  logToConsole,
} from 'react-native/Libraries/Utilities/RCTLog';
import petAvatar1 from '../img_assets/moaner.png';
import petAvatar3 from '../img_assets/shouty.png';
import petAvatar4 from '../img_assets/sick.png';
import petAvatar2 from '../img_assets/purple.png';
import { indexCarousel } from '../utils/utils';

export const PickPet = ({ navigation, route }) => {
  const images = [petAvatar1, petAvatar2, petAvatar3, petAvatar4];

  const [petAvatarIndex, setPetAvatarIndex] = useState(0);
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode='cover' style={styles.img}>
        <View>
          <Text>Pick Your Pet</Text>
        </View>
        <View>
          <Pressable onPress={() => {
              setPetAvatarIndex((current) => {
                console.log(current);
                return indexCarousel(current, -1, 3)
              });
            }}>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
          />
          </Pressable>
          <Image source={images[petAvatarIndex]} style={styles.sick} />
          <Pressable onPress={() => {
              setPetAvatarIndex((current) => {
                console.log(current);
                return indexCarousel(current, 1, 3);
              });
            }}>
          <FontAwesomeIcon
            icon={faChevronCircleRight}
          /></Pressable>
        </View>
        <Pressable
          title='Pick'
          style={styles.buttons}
          onPress={() => navigation.navigate('Home')}
        >
          <Text>I Choose You</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

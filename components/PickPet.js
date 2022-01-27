import React, { useState } from 'react';
const {
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Image,
} = require('react-native');
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
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
      <ImageBackground
        source={require('../img_assets/Autumn_Landscape.jpg')}
        resizeMode='cover'
        style={styles.img_bg}
      >
        <View>
          <Text style={styles.header}>Pick Your Pet</Text>
        </View>
        <View style={styles.selectionBox}>
          <Pressable
            onPress={() => {
              setPetAvatarIndex((current) => {
                return indexCarousel(current, -1, 3);
              });
            }}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} style={styles.arrows} />
          </Pressable>
          <Image source={images[petAvatarIndex]} style={styles.petImage} />
          <Pressable
            onPress={() => {
              setPetAvatarIndex((current) => {
                return indexCarousel(current, 1, 3);
              });
            }}
          >
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              style={styles.arrows}
            />
          </Pressable>
        </View>
        <Pressable
          title='Pick'
          onPress={() => navigation.navigate('TrackingMain')}
        >
          <Text>I Choose You</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img_bg: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
  },
  selectionBox: {
    flexDirection: 'row',
  },
  petImage: {
    width: 150,
    height: 150,
  },
  arrows: {
    color: '#0EAD69',
  },
});

import React from 'react';
const {
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
  Image
} = require('react-native')
import {styles} from "../Styles"
import bg from "../img_assets/Autumn_Landscape.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

export const PickPet = ({ navigation, route }) => {

  return <View style={styles.container}> 
    <ImageBackground
        source={bg}
        resizeMode="cover"
        style={styles.img}
      >
        <View>
          <Text>Pick Your Pet</Text>
        </View>
        <View>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
          <Image
            source={require('../img_assets/sick.png')}
            style={styles.sick}
          />
        <FontAwesomeIcon icon={faChevronCircleRight} />
        </View>
        <Pressable title="Pick" style={styles.buttons} onPress={() => navigation.navigate('Home')}>
          <Text>I Choose You</Text>
        </Pressable>
      </ImageBackground>
  </View>;
}

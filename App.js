import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  TextInput,
} from 'react-native';
import { styles } from './Styles';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./img_assets/garden_generated.jpg')}
        resizeMode='cover'
        style={styles.img}
      >
        <View style={styles.buttons}>
          <Button title={'login'} color='#000000' />
          <Button title={'create account'} color='#000000' />
        </View>
        <View style={[styles.imgBox, styles.bordered]}>
          <Image
            source={require('./img_assets/moaner.png')}
            style={styles.moaner}
          />
          <Image
            source={require('./img_assets/sick.png')}
            style={styles.sick}
          />
          <Image
            source={require('./img_assets/shouty.png')}
            style={styles.shouty}
          />
          <Image
            source={require('./img_assets/purple.png')}
            style={styles.purple}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

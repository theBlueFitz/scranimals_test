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

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./img_assets/garden_generated.jpg')}
        resizeMode='cover'
        style={styles.img}
      >
        <View style={styles.buttons}>
          <Button title={'login'} />
          <Button title={'create account'} />
        </View>
        <View style={styles.imgBox}>
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

const styles = StyleSheet.create({
  imgBox: {
    flexDirection: 'row',
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
  },
  container: {
    flex: 1,
    borderWidth: 3,
  },
  img: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'flex-end',
    borderWidth: 3,
  },
  moaner: {
    marginBottom: 80,
    width: 100,
    height: 100,
  },
  shouty: {
    marginLeft: -20,
    marginBottom: 50,
    width: 100,
    height: 100,
  },
  purple: {
    marginLeft: -20,
    marginBottom: 80,
    width: 100,
    height: 100,
  },
  sick: {
    marginLeft: -20,
    marginBottom: 50,
    width: 100,
    height: 100,
  },
  buttons: {
    alignSelf: 'center',
    borderWidth: 3,
    justifyContent: 'space-evenly',
    height: 200,
    width: 300,
  },
});

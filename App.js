import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img_assets/garden_generated.jpg')} resizeMode='cover' style={styles.img}>
        <Image source={require('./img_assets/moaner.png')} style={styles.moaner}/>
        <Image source={require('./img_assets/sick.png')} style={styles.sick}/>
        <Image source={require('./img_assets/shouty.png')} style={styles.shouty}/>
        <Image source={require('./img_assets/purple.png')} style={styles.purple}/>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'flex-end',
  },
  moaner: {
    marginLeft: 10,
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
});

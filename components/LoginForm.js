const { View, ImageBackground, Text } = require("react-native")
import { StyleSheet } from "react-native";

export const LoginForm = ({navigation, route}) => {
   return <View style={styles.container}>
        <ImageBackground source={require('../img_assets/Autumn_Landscape.jpg')}
        resizeMode='cover' style={styles.img}/>
    </View>

}

const styles = StyleSheet.create({
    imgBox: {
      flexDirection: 'row',
      marginTop: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      
    },
    img: {
      flex: 1,
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'flex-end',
      
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
      
      justifyContent: 'space-evenly',
      height: 200,
      width: 300,
    },
    login: {
      backgroundColor: '#000000',
      color: '#000',
    },
  });
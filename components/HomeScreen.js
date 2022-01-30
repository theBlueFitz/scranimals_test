import {
  View,
  ImageBackground,
  Image,
  Button,
  Pressable,
  Text,
} from 'react-native';
import { styles } from '../Styles';

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img_assets/garden_generated.jpg')}
        resizeMode='cover'
        style={styles.img}
      >
        <View style={styles.buttons}>
          <Button
            title={'login'}
            onPress={() => navigation.navigate('LoginForm')}
            color='#000000'
          />
          <Button title={'create account'} color='#000000' />
        </View>
        <Pressable
          title='Login'
          style={styles.buttons}
          onPress={() => navigation.navigate('TrackingWater')}
        >
          <Text>Agua</Text>
        </Pressable>
        <View style={[styles.imgBox, styles.bordered]}>
          <Image
            source='https://i.ibb.co/b6bTHxR/monster-7.png'
            style={styles.moaner}
          />
          <Image
            source='https://i.ibb.co/7W3zL4C/monster-1.png'
            style={styles.sick}
          />
          <Image
            source='https://i.ibb.co/PM9ZMyW/monster-3.png'
            style={styles.shouty}
          />
          <Image
            source='https://i.ibb.co/p35FN8g/monster-4.png'
            style={styles.purple}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

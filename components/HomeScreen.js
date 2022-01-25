import {
    View,
    ImageBackground,
    Image,
    Button,
  } from 'react-native';
  import { styles } from '../Styles'




export function HomeScreen({navigation})  {


return  (<View style={styles.container}>
      <ImageBackground
        source={require('../img_assets/garden_generated.jpg')}
        resizeMode='cover'
        style={styles.img}
      >
        <View style={styles.buttons}>
          <Button title={'login'} onPress={() => navigation.navigate('LoginForm')} color='#000000' />
          <Button title={'create account'} color='#000000' />
        </View>
        <View style={[styles.imgBox, styles.bordered]}>
          <Image
            source={require('../img_assets/moaner.png')}
            style={styles.moaner}
          />
          <Image
            source={require('../img_assets/sick.png')}
            style={styles.sick}
          />
          <Image
            source={require('../img_assets/shouty.png')}
            style={styles.shouty}
          />
          <Image
            source={require('../img_assets/purple.png')}
            style={styles.purple}
          />
        </View>
      </ImageBackground>
    </View>)
}
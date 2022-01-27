import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
} from 'react-native'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export const LoginForm = ({ navigation, route }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.dir(e.target.placeholder)
    setUser((prevUser) => {
      const copyUser = { ...prevUser }
      copyUser[e.target.placeholder] = e.target.value
      console.log(user)
      return copyUser
    })
  }

  const auth = getAuth()

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log(user.email)
      })
      .catch((error) => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img_assets/Autumn_Landscape.jpg')}
        resizeMode="cover"
        style={styles.img}
      >
        <View>
          <TextInput
            onChange={handleChange}
            style={styles.textBoxes}
            placeholder="email"
            label={'email'}
          />
          <TextInput
            onChange={handleChange}
            style={styles.textBoxes}
            placeholder="password"
            secureTextEntry={true}
            label={'password'}
          />
        </View>
        <Pressable
          title="Login"
          style={styles.buttons}
          onPress={() => navigation.navigate('PickPet')}
        >
          <Text>Login!</Text>
        </Pressable>
        <Pressable
          title="Register"
          style={styles.buttons}
          onPress={handleSignUp}
        >
          <Text>Register</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
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
  textBoxes: {
    backgroundColor: '#ffffff',

    width: 250,
    height: 60,
    margin: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  img: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    alignSelf: 'center',
    backgroundColor: '#0EAD69',
    justifyContent: 'space-evenly',
    height: 60,
    width: 200,
    borderRadius: 100 / 2,
  },
  login: {
    backgroundColor: '#000000',
    color: '#000',
  },
})

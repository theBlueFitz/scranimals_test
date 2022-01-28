import { View, Text, StyleSheet } from 'react-native-web'

export const MenuPopover = ({ navigation }) => {
  const [popover, setPopover] = useState(false)
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (popover === false) {
            setPopover(true)
          } else if (popover === true) {
            setPopover(false)
          }
        }}
      >
        <Text>Show popover</Text>
      </TouchableOpacity>
      <Popover
        from={new Rect(5, 100, 20, 40)}
        isVisible={popover}
        onRequestClose={() => {
          setPopover(false)
        }}
      >
        <View
          onPress={() => {
            if (popover === false) {
              setPopover(true)
            } else if (popover === true) {
              setPopover(false)
            }
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate('LoginForm')
            }}
          >
            <Text>My Scranimal</Text>
          </Pressable>
          <Pressable>
            <Text>Track Water</Text>
          </Pressable>
          <Pressable>
            <Text>Track Food</Text>
          </Pressable>
          <Pressable>
            <Text>Pet Shop</Text>
          </Pressable>
          <Pressable>
            <Text>My Inventory</Text>
          </Pressable>
        </View>
      </Popover>
    </View>
  )
}

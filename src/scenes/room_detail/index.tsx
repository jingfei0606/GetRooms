import React from 'react'
import { View, Text, TextStyle } from 'react-native'
import { Typography, Colors } from '../../styles'
import RoomDetail from '../../components/RoomDetail'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'
interface IRoomDetailScreen extends NavigationComponentProps {

}
const RoomDetailScreen: React.FC<IRoomDetailScreen> = (props) => {
  const { componentId } = props
  const buttonText = <View>
    <Text style={Typography.font({ size: 21, color: Colors.PRIMARY }) as TextStyle}>Proceed to Reservation</Text>
  </View>

  const data = {
    background: require('_assets/images/bed_room.png'),
    name: 'Deluxe Room',
    rating: { score: 4.3, reviews: 127 },
    description: 'ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonText
  }

  return (
    <RoomDetail data={data}
      onPress={() => Navigation.push(componentId, {
        component: {
          name: SceneNames.GuestDetailScreen
        }
      })}
      isRoom
      componentId={componentId}
    />
  )
}

export default RoomDetailScreen

// const styles = StyleSheet.create({
// })
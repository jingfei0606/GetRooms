import React from 'react'
import { StyleSheet, View, Text, TextStyle } from 'react-native'
import { Typography, Mixins, Colors } from '../../styles'
import RoomDetail from '../../components/RoomDetail'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'

const buttonTextStyle = { size: 21, color: Colors.PRIMARY }
interface IHotelDetailScreen extends NavigationComponentProps {

}
const HotelDetailScreen: React.FC<IHotelDetailScreen> = (props) => {
  const { componentId } = props
  const buttonText = <View style={{ ...Mixins.row, alignItems: 'flex-end' }}>
    <Text style={Typography.font({ ...buttonTextStyle }) as TextStyle}>Choose Rooms from </Text>
    <Text style={Typography.font({ ...buttonTextStyle, family: Typography.FONT_WALSHRIM_BOLD }) as TextStyle}>$47</Text>
    <Text style={styles.night}>/night</Text>
  </View>

  const data = {
    background: require('_assets/images/bed_room.png'),
    name: 'Sheraton Hotel',
    rating: { score: 4.3, reviews: 127 },
    description: 'ALorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonText,
    showMap: true
  }

  return (
    <RoomDetail
      data={data}
      onPress={() => Navigation.push(componentId, {
        component: {
          name: SceneNames.RoomListScreen
        }
      })}
      componentId={componentId}
    />
  )
}

export default HotelDetailScreen

const styles = StyleSheet.create({
  night: {
    ...Typography.font({ size: 10, color: Colors.PRIMARY, family: Typography.FONT_WALSHRIM_REGULAR }),
    ...Mixins.margin(0, 0, 3, 5)
  } as TextStyle
})
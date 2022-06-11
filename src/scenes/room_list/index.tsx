import React from 'react'
import { View } from 'react-native'
import moment from 'moment'
import { Mixins } from '../../styles'
import RoomList from '../../components/RoomList'
import { useProps } from '../../hooks/use-props'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'
interface IRoomListScreen extends NavigationComponentProps {

}
const RoomListScreen: React.FC<IRoomListScreen> = (props) => {
  const { componentId } = props

  const { searchDetail } = useProps()

  const image = require('_assets/images/room.png')
  const menuItems = [
    {
      image,
      title: 'Deluxe Room',
      description: {
        text: '1 King Bed',
        image: require('_assets/images/rooms/1.webp'),
      },
    },
    {
      image,
      title: 'Twin - Bed Room',
      description: {
        text: '2 Twin Bed',
        image: require('_assets/images/rooms/2.jpeg'),
      },
    },
    {
      image,
      title: 'Standard Room',
      description: {
        text: '1 King Bed',
        image: require('_assets/images/rooms/3.jpeg'),
      },
    },
    {
      image,
      title: 'Presdential Room',
      description: {
        text: '1 King Bed',
        image: require('_assets/images/rooms/4.jpeg'),
      },
    },
    {
      image,
      title: 'King Suite Room',
      description: {
        text: '1 King Bed',
        image: require('_assets/images/rooms/5.jpeg'),
      },
    },
    {
      image,
      title: 'Junior Room',
      description: {
        text: '1 King Bed',
        image: require('_assets/images/rooms/6.jpeg'),
      },
    },
  ]
  const data = {
    title: 'Sheraton Addis Hotel',
    date: { from: moment(searchDetail.bookDates.startDate).format('DD MMM'), to: moment(searchDetail.bookDates.endDate).format('DD MMM') },
    guest: '1 guest',
    list: menuItems,
  }

  return (
    <View style={Mixins.container}>
      <RoomList
        data={data}
        onPress={() => Navigation.push(componentId, {
          component: {
            name: SceneNames.RoomDetailScreen
          }
        })}
        componentId={componentId}
      />
    </View>
  )
}

export default RoomListScreen

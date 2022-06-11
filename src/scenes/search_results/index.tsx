import React from 'react'
import { View } from 'react-native'
import moment from 'moment'
import { Mixins, Colors } from '../../styles'
import RoomList from '../../components/RoomList'
import GetStatusBarPlaceHolder from '../../components/statusbar'
import { useProps } from '../../hooks/use-props'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'
interface ISearchResultsScreen extends NavigationComponentProps {

}
const SearchResultsScreen: React.FC<ISearchResultsScreen> = (props) => {
  const { componentId } = props

  const { searchDetail } = useProps()

  const image = require('_assets/images/hotel_room.png')
  const menuItem = [
    {
      image,
      title: 'Sarem Hotel',
      description: {
        text: 'Addis Ababa , Ethiopia',
        image: require('_assets/images/hotels/sarem.jpeg'),
      },
      price: "$90.00"
    },
    {
      image,
      title: 'Golden Tulip Hotel',
      description: {
        text: 'Addis Ababa , Ethiopia',
        image: require('_assets/images/hotels/golden_tulip.webp'),
      },
      price: "$95.00"
    },
    {
      image,
      title: 'Mariott Hotel',
      description: {
        text: 'Addis Ababa , Ethiopia',
        image: require('_assets/images/hotels/mariott.webp'),
      },
      price: "$100.00"
    },
    {
      image,
      title: 'Mado Hotel',
      description: {
        text: 'Addis Ababa , Ethiopia',
        image: require('_assets/images/hotels/mado.jpeg'),
      },
      price: "$105.00"
    },
    {
      image,
      title: 'Getam Hotel',
      description: {
        text: 'Addis Ababa , Ethiopia',
        image: require('_assets/images/hotels/getfam.jpeg'),
      },
      price: "$121.00"
    },
    {
      image,
      title: 'Elgel Hotel',
      description: {
        text: 'Addis Ababa , Ethiopia',
        image: require('_assets/images/hotels/elgel.jpeg'),
      },
      price: "$135.00"
    },
    {
      image,
      title: 'Sheraton Hotel',
      description: {
        text: 'Addis Ababa , Ethiopia',
        image: require('_assets/images/hotels/sheraton.jpeg'),
      },
      price: "$155.00"
    },
    {
      image,
      title: 'Radission Blu Hotel',
      description: {
        text: 'Addis Ababa , Ethiopia',
        image: require('_assets/images/hotels/radission.jpeg'),
      },
      price: "$185.00"
    },
  ]
  const data = {
    title: 'Addis Ababa , Ethiopia',
    date: { from: moment(searchDetail.bookDates.startDate).format('DD MMM'), to: moment(searchDetail.bookDates.endDate).format('DD MMM') },
    guest: '1 guest',
    list: menuItem,
  }

  const itemStyle = {
    borderBottomWidth: 4,
    borderColor: `${Colors.BLACK}a9`,
    borderRadius: 17,
  }
  return (
    <View style={Mixins.container}>
      <GetStatusBarPlaceHolder />
      <RoomList
        data={data}
        itemStyle={itemStyle}
        onPress={() => Navigation.push(componentId, {
          component: {
            name: SceneNames.HotelDetailScreen,
            options: {
              animations: {
                push: {
                  sharedElementTransitions: [
                    {
                      fromId: 'searchDetailImage',
                      toId: 'sourceID',
                    }
                  ]
                }
              }
            }
          }
        })}
        isHotel
        componentId={componentId}
      />
    </View>
  )
}

export default SearchResultsScreen

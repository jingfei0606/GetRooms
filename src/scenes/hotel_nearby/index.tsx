import React from 'react'
import { ScrollView, Dimensions, StyleSheet, View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { Mixins, Typography, Colors } from '../../styles'

import ListItem from '../../components/RoomList/ListItem'
import { TextStyle } from 'react-native'
const { width, height } = Dimensions.get("window")

const HotelNearByScreen = () => {
  const item = {
    image: require('_assets/images/hotel_room.png'),
    title: 'Sheraton Hotel',
    description: {
      text: 'Addis Ababa , Ethiopia',
      image: require('_assets/images/hotels/sheraton.jpeg')
    }
  }

  const itemStyle = {
    borderBottomWidth: 4,
    borderColor: `${Colors.BLACK}a9`,
    borderRadius: 17
  }

  const initRegion = {
    latitude: 9.003657564635287,
    longitude: 38.74784437939525,
    latitudeDelta: 0.7754492123964845,
    longitudeDelta: 0.5650110170245171,
  }

  const markers = [
    {
      title: 'title',
      description: 'descrition',
      latlng: {
        latitude: 8.950455285127038,
        longitude: 38.75253063246608,
      }
    },
    {
      title: 'title',
      description: 'descrition',
      latlng: {
        latitude: 9.00455285127038,
        longitude: 38.80253063246608,
      }
    },
    {
      title: 'title',
      description: 'descrition',
      latlng: {
        latitude: 9.00455285127038,
        longitude: 38.75253063246608,
      }
    }
  ]

  const handleRegionChange = (region) => {
    console.log(region)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Mixins.container}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapStyle}
            initialRegion={initRegion}
            onRegionChange={handleRegionChange}>
            {markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
              />
            ))}
          </MapView>
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>Hotel nearby</Text>
          <ListItem item={item} itemStyle={itemStyle} />
        </View>
      </View>
    </ScrollView>
  )
}

export default HotelNearByScreen

const styles = StyleSheet.create({
  mapContainer: {
    width,
    height: height - 200
  },
  mapStyle: {
    width: '100%',
    height: '100%'
  },
  main: {
    ...Mixins.paddingTop(34),
    ...Mixins.mainWidth
  },
  title: {
    ...Typography.font({ size: 25, family: Typography.FONT_GOTHAM_BLACK }),
    ...Mixins.marginBottom(14)
  } as TextStyle,
})
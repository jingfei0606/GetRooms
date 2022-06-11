import React from 'react'
import { StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, View, Text, TextStyle } from 'react-native'
import { Mixins, Colors, Typography } from '../../styles'
import GetStatusBarPlaceHolder from '../../components/statusbar'
import { Icon } from '../../components/common'
import Title from './Title'
import TextItem from './TextItem'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
// import GoBack from '_components/buttons/GoBack';

const timesIcon = require('_assets/images/times.png')

interface IAmenities extends NavigationComponentProps {

}

const AmenitiesScreen: React.FC<IAmenities> = (props) => {
  const { componentId } = props

  const topFamily = {
    title: 'Top family friendly amenities',
    list: [
      { icon: timesIcon, title: 'Extra beds/cribs' }
    ]
  }

  const popular = {
    title: 'Popular amenities',
    list: [
      { icon: timesIcon, title: 'Free WiFi' },
      { icon: timesIcon, title: 'Parking included' },
      { icon: timesIcon, title: 'Free airport shuttle' },
      { icon: timesIcon, title: 'Aire conditioning' },
      { icon: timesIcon, title: 'Spa' },
      { icon: timesIcon, title: 'Restaurant' },
    ]
  }

  const property = {
    title: 'Property amenities',
    list: [
      {
        icon: timesIcon,
        title: 'Internet',
        description: [
          'Available in all rooms: Free WiFi',
          'Available in some public areas: Free WiFi'
        ]
      },
      {
        icon: timesIcon,
        title: 'Parking and transportation',
        description: [
          'Free self parking on site',
          'Free valet parking on site',
          'Wheelchair-accessible parking available'
        ]
      },
      {
        icon: timesIcon,
        title: 'Food and drink',
        description: [
          'Full breakfast available for a fee daily 6:00',
          '1 restaurant and 1 coffee shop/cafe',
          '2 bars/lounges'
        ]
      }
    ]
  }

  const room = {
    title: 'Room amenities',
    list: [
      {
        icon: timesIcon,
        title: 'Bedroom',
        description: [
          'Air conditioning',
          'Bed sheets',
          'Free cribs/infant beds'
        ]
      },
      {
        icon: timesIcon,
        title: 'Bathroom',
        description: [
          'Bathrobes',
          'Bidet',
          'Free toiletries'
        ]
      }
    ]
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GetStatusBarPlaceHolder />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => Navigation.pop(componentId)
          }
          style={{ zIndex: 1 }}>
          <Icon source={timesIcon} size={20} color={Colors.SECONDARY} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All amenities</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Top family */}
          <View style={[ Mixins.margin(100, 0, 30), { width: '100%' } ]}>
            <Title title={topFamily.title} />
            {topFamily.list.map((item, i) => (
              <TextItem key={i} title={item.title} icon={item.icon} />
            ))}
          </View>

          {/* Popular */}
          <View style={[ Mixins.margin(30, 0), { width: '100%' } ]}>
            <Title title={popular.title} />
            <View style={[ Mixins.row, { flexWrap: 'wrap', justifyContent: 'space-between' } ]}>
              {popular.list.map((item, i) => (
                <TextItem key={i} title={item.title} icon={item.icon} style={{ width: '45%' }} />
              ))}
            </View>
          </View>
          <View style={styles.divider}></View>
          {/* Property */}
          <View style={[ Mixins.margin(30, 0), { width: '100%' } ]}>
            <Title title={property.title} />
            {property.list.map((item, i) => (
              <View key={i} style={Mixins.margin(10, 0)}>
                <TextItem title={item.title} description={item.description} icon={item.icon} />
              </View>
            ))}
          </View>
          <View style={styles.divider}></View>
          {/* Room */}
          <View style={[ Mixins.margin(30, 0), { width: '100%' } ]}>
            <Title title={room.title} />
            {room.list.map((item, i) => (
              <View key={i} style={Mixins.margin(10, 0)}>
                <TextItem title={item.title} description={item.description} icon={item.icon} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AmenitiesScreen

const styles = StyleSheet.create({
  header: {
    ...Mixins.row,
    ...Mixins.position({ top: 10, left: 0, right: 0 }),
    ...Mixins.padding(15, 20),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: `#5C76BF`
  },
  headerTitle: {
    ...Typography.font({ size: 20, color: Colors.SECONDARY }),
    ...Mixins.marginLeft(-20),
    flex: 1,
    textAlign: 'center',
  } as TextStyle,
  container: {
    ...Mixins.container,
    ...Mixins.paddingLeft(10),
    alignItems: 'flex-start',
  },
  divider: {
    height: 1,
    width: Mixins.WINDOW_WIDTH,
    ...Mixins.marginLeft(-10),
    backgroundColor: Colors.GRAY
  }
})
import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Colors, Typography, Spacing } from '../styles'
import { Icon } from '../components/common'

import HomeScreen from '../scenes/home'
import HotelNearByScreen from '../scenes/hotel_nearby'
import ProfileScreen from '../scenes/profile'
import BookingsScreen from '../scenes/bookings'

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
  tabBarOptions: {
    style: {
      height: 70,
      paddingTop: Spacing.SCALE_8,
      paddingBottom: Spacing.SCALE_8,
      backgroundColor: Colors.PRIMARY,
      borderTopColor: Colors.SECONDARY
    },
  }
}

const TabBarIcon = ({ imageSource }) => {
  return <Icon source={imageSource} size={25} color={Colors.SECONDARY} />
}

interface ITabBarLabel {
  tintColor?: string,
  focused: boolean,
  label: string
}

const TabBarLabel = ({ focused, label }: ITabBarLabel) => (
  <Text
    style={{
      color: Colors.WHITE,
      textAlign: 'center',
      fontFamily: focused ? Typography.FONT_GOTHAM_BLACK : Typography.FONT_GOTHAM_THIN
    }}
  >
    {label}
  </Text>
)

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: () => <TabBarIcon imageSource={require('_assets/images/relax.png')} />,
      tabBarLabel: props => <TabBarLabel label="Search" {...props} />,
    },
  },
  HotelMap: {
    screen: HotelNearByScreen,
    navigationOptions: {
      tabBarIcon: () => <TabBarIcon imageSource={require('_assets/images/marker.png')} />,
      tabBarLabel: props => <TabBarLabel label="Hotel Nearby" {...props} />,
    },
  },
  Bookings: {
    screen: BookingsScreen,
    navigationOptions: {
      tabBarIcon: () => <TabBarIcon imageSource={require('_assets/images/reserve.png')} />,
      tabBarLabel: props => <TabBarLabel label="Bookings" {...props} />,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: () => <TabBarIcon imageSource={require('_assets/images/male-user.png')} />,
      tabBarLabel: props => <TabBarLabel label="Profile" {...props} />,
    },
  },
}

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)

export default AppNavigator

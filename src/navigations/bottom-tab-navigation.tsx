import React from 'react'
import { LayoutBottomTabs, Navigation } from 'react-native-navigation'
import { SceneNames } from '../scenes/SceneNames'

import HomeScreen from '../scenes/home'
import HotelNearByScreen from '../scenes/hotel_nearby'
import ProfileScreen from '../scenes/profile'
import BookingsScreen from '../scenes/bookings'
import { Provider } from 'react-redux'
import { store } from '../states/store'

Navigation.registerComponent(
  SceneNames.HomeScreen,
  () => props =>
    <Provider store={store}>
      <HomeScreen {...props} />
    </Provider>,
  () => HomeScreen
)

Navigation.registerComponent(
  SceneNames.HotelNearByScreen,
  () => props =>
    <Provider store={store}>
      <HotelNearByScreen {...props} />
    </Provider>,
  () => HotelNearByScreen
)

Navigation.registerComponent(
  SceneNames.BookingsScreen,
  () => props =>
    <Provider store={store}>
      <BookingsScreen {...props} />
    </Provider>,
  () => BookingsScreen
)

Navigation.registerComponent(
  SceneNames.ProfileScreen,
  () => props =>
    <Provider store={store}>
      <ProfileScreen {...props} />
    </Provider>,
  () => ProfileScreen
)

export const bottomTabs: LayoutBottomTabs = {
  id: 'BOTTOM_TABS_LAYOUT',
  children: [
    {
      stack: {
        id: 'HOME_TAB',
        children: [
          {
            component: {
              id: 'HOME_SCREEN',
              name: SceneNames.HomeScreen,
            }
          }
        ],
        options: {
          bottomTab: {
            icon: require('_assets/images/relax.png'),
            text: 'Search'
          }
        }
      }
    },
    {
      stack: {
        id: 'HOTEL_NEARBY_TAB',
        children: [
          {
            component: {
              id: 'HOTEL_NEARBY_SCREEN',
              name: SceneNames.HotelNearByScreen
            }
          }
        ],
        options: {
          bottomTab: {
            icon: require('_assets/images/marker.png'),
            text: 'Hotel Nearby'
          }
        }
      }
    },
    {
      stack: {
        id: 'BOOKING_TAB',
        children: [
          {
            component: {
              id: 'BOOKING_SCREEN',
              name: SceneNames.BookingsScreen
            }
          }
        ],
        options: {
          bottomTab: {
            icon: require('_assets/images/reserve.png'),
            text: 'Bookings'
          }
        }
      }
    },
    {
      stack: {
        id: 'PROFILE_TAB',
        children: [
          {
            component: {
              id: 'PROFILE_SCREEN',
              name: SceneNames.ProfileScreen,
            }
          }
        ],
        options: {
          bottomTab: {
            icon: require('_assets/images/male-user.png'),
            text: "Profile"
          }
        }
      }
    },
  ]
}
import React from 'react'
import { Navigation } from 'react-native-navigation'
import { SceneNames } from '../scenes/SceneNames'
import { Provider } from 'react-redux'
import { store } from '../states/store'

import DestinationScreen from '../scenes/destination'
import GuestsScreen from '../scenes/guests'
import SearchResultsScreen from '../scenes/search_results'
import HotelDetailScreen from '../scenes/hotel_detail'
import RoomListScreen from '../scenes/room_list'
import RoomDetailScreen from '../scenes/room_detail'
import RoomViewScreen from '../components/RoomDetail/view'
import GuestDetailScreen from '../scenes/guest_detail'
import CheckoutScreen from '../scenes/checkout'
import BookingDetailScreen from '../scenes/booking_detail'
import ThankYouScreen from '../scenes/thank_you'
import WebViewScreen from '../scenes/web_view'
import CalendarScreen from '../scenes/calendar'
import AmenitiesScreen from '../scenes/amenities'

Navigation.registerComponent(
  SceneNames.DestinationScreen,
  () => props =>
    <Provider store={store}>
      <DestinationScreen {...props} />
    </Provider>,
  () => DestinationScreen
)

Navigation.registerComponent(
  SceneNames.GuestDetailScreen,
  () => props =>
    <Provider store={store}>
      <GuestDetailScreen {...props} />
    </Provider>,
  () => GuestDetailScreen
)

Navigation.registerComponent(
  SceneNames.SearchResultsScreen,
  () => props =>
    <Provider store={store}>
      <SearchResultsScreen {...props} />
    </Provider>,
  () => SearchResultsScreen
)

Navigation.registerComponent(
  SceneNames.RoomDetailScreen,
  () => props =>
    <Provider store={store}>
      <RoomDetailScreen {...props} />
    </Provider>,
  () => RoomDetailScreen
)

Navigation.registerComponent(
  SceneNames.RoomListScreen,
  () => props =>
    <Provider store={store}>
      <RoomListScreen {...props} />
    </Provider>,
  () => RoomListScreen
)

Navigation.registerComponent(
  SceneNames.HotelDetailScreen,
  () => props =>
    <Provider store={store}>
      <HotelDetailScreen {...props} />
    </Provider>,
  () => HotelDetailScreen
)

Navigation.registerComponent(
  SceneNames.CheckoutScreen,
  () => props =>
    <Provider store={store}>
      <CheckoutScreen {...props} />
    </Provider>,
  () => CheckoutScreen
)

Navigation.registerComponent(
  SceneNames.GuestDetailScreen,
  () => props =>
    <Provider store={store}>
      <GuestDetailScreen {...props} />
    </Provider>,
  () => GuestDetailScreen
)

Navigation.registerComponent(
  SceneNames.RoomViewScreen,
  () => props =>
    <Provider store={store}>
      <RoomViewScreen {...props} />
    </Provider>,
  () => RoomViewScreen
)

Navigation.registerComponent(
  SceneNames.WebViewScreen,
  () => props =>
    <Provider store={store}>
      <WebViewScreen {...props} />
    </Provider>,
  () => WebViewScreen
)

Navigation.registerComponent(
  SceneNames.ThankYouScreen,
  () => props =>
    <Provider store={store}>
      <ThankYouScreen {...props} />
    </Provider>,
  () => ThankYouScreen
)

Navigation.registerComponent(
  SceneNames.BookingDetailScreen,
  () => props =>
    <Provider store={store}>
      <BookingDetailScreen {...props} />
    </Provider>,
  () => BookingDetailScreen
)

Navigation.registerComponent(
  SceneNames.AmenitiesScreen,
  () => props =>
    <Provider store={store}>
      <AmenitiesScreen {...props} />
    </Provider>,
  () => AmenitiesScreen
)

Navigation.registerComponent(
  SceneNames.CalendarScreen,
  () => props =>
    <Provider store={store}>
      <CalendarScreen {...props} />
    </Provider>,
  () => CalendarScreen
)

Navigation.registerComponent(
  SceneNames.GuestsScreen,
  () => props =>
    <Provider store={store}>
      <GuestsScreen {...props} />
    </Provider>,
  () => GuestsScreen
)


export const stackNavigation = {
  children: [
    {
      component: {
        name: SceneNames.AmenitiesScreen,
      },
    },
    {
      component: {
        name: SceneNames.DestinationScreen,
      },
    },
    {
      component: {
        name: SceneNames.GuestDetailScreen,
      },
    },
    {
      component: {
        name: SceneNames.SearchResultsScreen,
      },
    },
    {
      component: {
        name: SceneNames.HotelDetailScreen,
      },
    },
    {
      component: {
        name: SceneNames.RoomListScreen,
      },
    },
    {
      component: {
        name: SceneNames.RoomDetailScreen,
      },
    },
    {
      component: {
        name: SceneNames.RoomViewScreen,
      },
    },
    {
      component: {
        name: SceneNames.GuestDetailScreen,
      },
    },
    {
      component: {
        name: SceneNames.CheckoutScreen,
      },
    },
    {
      component: {
        name: SceneNames.BookingDetailScreen,
      },
    },
    {
      component: {
        name: SceneNames.ThankYouScreen,
      },
    },
    {
      component: {
        name: SceneNames.WebViewScreen,
      },
    },
    {
      component: {
        name: SceneNames.CalendarScreen,
      },
    },
  ],
}
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from '../scenes/unlogged/LoginScreen'
import RegistrationScreen from '../scenes/unlogged/RegistrationScreen'
import AppNavigator from './app-navigator'
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

const LandingNavConfig = {
  initialRouteName: 'Login',
  header: null,
  // headerMode: 'none',
}

const RouteConfigs = {
  Login: LoginScreen,
  Registration: RegistrationScreen,
  App: AppNavigator,
  Destination: DestinationScreen,
  Guests: GuestsScreen,
  SearchResults: SearchResultsScreen,
  HotelDetail: HotelDetailScreen,
  RoomList: RoomListScreen,
  RoomDetail: RoomDetailScreen,
  RoomView: RoomViewScreen,
  GuestDetail: GuestDetailScreen,
  Checkout: CheckoutScreen,
  BookingDetail: BookingDetailScreen,
  ThankYou: ThankYouScreen,
  WebView: WebViewScreen,
  Calendar: CalendarScreen,
  Amenities: AmenitiesScreen,
}

const LandingNavigator = createStackNavigator(RouteConfigs, LandingNavConfig)

export default LandingNavigator

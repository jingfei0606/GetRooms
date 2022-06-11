import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Image, ImageSourcePropType } from 'react-native'
import { SliderBox } from "react-native-image-slider-box"
import moment from "moment"
import { Mixins } from '../../styles'
import { Outline, Default } from '../../components/buttons'
import GetStatusBarPlaceHolder from '../../components/statusbar'
import { useProps, useActions } from '../../hooks'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'
import SplashScreen from 'react-native-lottie-splash-screen'
interface IItem {
  image: {
    size: number,
    source: ImageSourcePropType,
    color?: string
  },
  description: string,
  title: string,
  onPress(): void
}
interface IHomeScreen extends NavigationComponentProps {

}

const HomeScreen: React.FC<IHomeScreen> = (props) => {
  const { componentId } = props

  const { searchDetail } = useProps()
  const { setAuthUser } = useActions().Authentication

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide() // here      
    }, 3000)
    // This redux rematch effect checks whether user is already login or not
    // If user is logged in, it sets isAuthenticated state true else false
    setAuthUser()
    // .then(() => console.log(Authentication.isAuthenticated))
    // .catch(err => console.log(err))
  }, [])

  const menuIcon = {
    size: 20
  }
  const menu: IItem[] = [
    {
      image: { ...menuIcon, source: require('_assets/images/search.png') },
      description: 'Enter Destination',
      title: searchDetail.destination.description,
      onPress: () => Navigation.push(componentId, {
        component: {
          name: SceneNames.DestinationScreen
        }
      })
    },
    {
      image: { ...menuIcon, source: require('_assets/images/calendar.png') },
      description: 'Select CheckIn - CheckOut Date',
      title: `${moment(searchDetail.bookDates.startDate).fromNow()} - ${moment(searchDetail.bookDates.endDate).fromNow()} ( ${searchDetail.bookDates.nightsCount} Night )`,
      onPress: () => Navigation.push(componentId, {
        component: {
          name: SceneNames.CalendarScreen
        }
      })
    },
    {
      image: { ...menuIcon, source: require('_assets/images/user.png') },
      description: 'Guest',
      title: `${searchDetail.rooms.length} room , 1 guest`,
      onPress: () => Navigation.push(componentId, {
        component: {
          name: SceneNames.GuestsScreen
        }
      })
    }
  ]

  const sliderImages = [
    require('_assets/images/home.png'),
    require('_assets/images/home.png')
  ]

  const handleSearch = () => {
    Navigation.push(componentId, {
      component: {
        name: SceneNames.SearchResultsScreen
      }
    })
  }

  return (
    <SafeAreaView>
      <GetStatusBarPlaceHolder />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Mixins.container}>
          <View style={{ flex: 2 }}>
            <SliderBox
              images={sliderImages}
              sliderBoxHeight={300}
              autoplay
              circleLoop />
          </View>

          <View style={styles.main}>
            <Image source={require('_assets/images/logo.png')} style={Mixins.marginBottom(34)} />

            <View style={Mixins.marginBottom(50)}>
              {menu.map((item, i) => (
                <Outline item={item} onPress={item.onPress} key={i} />
              ))}
            </View>

            <Default
              title={`Search`}
              onPress={handleSearch} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    ...Mixins.padding(25, 30, 0, 20),
    flex: 3
  }
})
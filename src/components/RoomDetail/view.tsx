import React from 'react'
import { StyleSheet, Dimensions, ImageBackground, View, Image, Text, TextStyle } from 'react-native'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient'
import { Typography, Mixins, Colors } from '../../styles'

import { Header } from '../common'

const { width } = Dimensions.get("window")
interface IRoomViewScreen {
  /**
   * this prop is required for react native navigation
   *
   * @type {string}
   * @memberof IGoBack
   */
  componentId: string,
}

const RoomViewScreen: React.FC<IRoomViewScreen> = (props) => {
  const { componentId } = props

  const background = require('_assets/images/rooms/6.jpeg')

  const SwiperItem = () => (
    <ImageBackground source={background} style={styles.background} nativeID="destinationID">
      <LinearGradient colors={[ `${Colors.BLACK}50`, `${Colors.BLACK}50` ]} style={styles.linearGradient}>
        <View style={styles.main}>
          <View>
            <Text style={Typography.font({ size: 16, family: Typography.FONT_GOTHAM_LIGHT }) as TextStyle}>Up Next</Text>
            <Text style={Typography.font({ size: 19, family: Typography.FONT_GOTHAM_BOLD }) as TextStyle}>Living Room</Text>
          </View>

          <Image source={require('_assets/images/hotel_gallery.png')} />
        </View>
      </LinearGradient>
    </ImageBackground>
  )
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={'Bed Room'}
        titleStyle={Typography.font({ size: 23, family: Typography.FONT_GOTHAM_BOLD }) as TextStyle}
        style={Mixins.position({ top: 10, left: 30 })}
        componentId={componentId}
      />
      <Swiper autoplay>
        <SwiperItem />
        <SwiperItem />
      </Swiper>
    </View>
  )
}

export default RoomViewScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    width,
    alignItems: 'center',
  },
  main: {
    ...Mixins.position({ bottom: 50, left: 35, right: 35 }),
    ...Mixins.row,
    justifyContent: 'space-between'
  }
})
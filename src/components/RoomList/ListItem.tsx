import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground, ImageStyle, TextStyle } from 'react-native'
import StarRating from 'react-native-star-rating'
import LinearGradient from 'react-native-linear-gradient'
import { Typography, Mixins, Colors } from '../../styles'
import { Icon } from '../common'
import { ViewStyle } from 'react-native'

const markerIcon = require('_assets/images/marker.png')
const relaxIcon = require('_assets/images/relax.png')
const heartsIcon = require('_assets/images/hearts.png')
interface IListItem {
  item: any,
  itemStyle: ViewStyle,
  onPress?: any,
  isHotel?: boolean
}
const ListItem: React.FC<IListItem> = (props) => {
  const { item, itemStyle, onPress, isHotel } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...Mixins.marginBottom(20), ...itemStyle }}>
        <ImageBackground source={item?.description?.image} style={styles.background} imageStyle={styles.imageStyle} nativeID="searchDetailImage">
          <LinearGradient colors={[ `${Colors.BLACK}10`, `${Colors.BLACK}a9` ]} style={styles.linearGradient}>
            <Icon source={heartsIcon} size={19} style={Mixins.position({ top: 15, right: 30 })} />

            <View style={styles.textBox}>
              <View>
                <Text style={styles.title}>{item?.title}</Text>
                <View style={Mixins.row}>
                  <Icon source={isHotel ? markerIcon : relaxIcon} size={20} />
                  <Text style={styles.text}>{item?.description?.text}</Text>
                </View>
              </View>
              <View>
                <View style={styles.priceWrapper}>
                  <Text style={Typography.font({ size: 18, family: Typography.FONT_GOTHAM_BLACK }) as TextStyle}>{item?.price}</Text>
                  <Text style={styles.nights}>/ nights</Text>
                </View>
                <View style={Mixins.row}>
                  <StarRating
                    disabled={true}
                    maxStars={4}
                    rating={4}
                    starSize={8}
                    fullStarColor={Colors.SECONDARY}
                    starStyle={Mixins.marginRight(3)}
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
  background: {
    height: 210,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 10,
  },
  imageStyle: {
    borderRadius: 10,
  } as ImageStyle,
  textBox: {
    ...Mixins.position({ bottom: 20, left: 20, right: 20 }),
    ...Mixins.row,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  title: {
    ...Typography.font({ size: 18, family: Typography.FONT_GOTHAM_BLACK }),
    ...Mixins.marginBottom(6)
  } as TextStyle,
  text: {
    ...Typography.font({ size: 13, family: Typography.FONT_GOTHAM_LIGHT }),
    ...Mixins.marginLeft(6)
  } as TextStyle,
  priceWrapper: {
    ...Mixins.row,
    alignItems: 'flex-end',
    ...Mixins.marginBottom(5)
  },
  nights: {
    ...Typography.font({ size: 10, family: Typography.FONT_GOTHAM_XLIGHT }),
    ...Mixins.margin(0, 0, 2, 5)
  } as TextStyle,
})
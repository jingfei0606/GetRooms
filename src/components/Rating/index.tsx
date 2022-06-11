import React from 'react'
import { StyleSheet, View, Text, TextStyle, ViewStyle } from 'react-native'
import StarRating from 'react-native-star-rating'
import { Typography, Mixins, Colors } from '../../styles'
interface IRating {
  /**
   * scores props
   *
   * @type {string}
   * @memberof IRating
   */
  score: number,
  /**
   * reviews props
   *
   * @type {string}
   * @memberof IRating
   */
  reviews: number
}

const Rating: React.FC<IRating> = (props) => {
  const { reviews, score } = props

  return (
    <View style={Mixins.row}>
      <StarRating
        disabled={true}
        maxStars={1}
        rating={0}
        starSize={20}
        emptyStarColor={Colors.SECONDARY}
      />
      <Text style={styles.rating}>{score}</Text>
      <View style={styles.divider}></View>
      <Text style={Typography.font({ size: 12, family: Typography.FONT_GOTHAM_LIGHT }) as TextStyle}>
        {reviews} Reviews
      </Text>
    </View>
  )
}
export default Rating

const styles = StyleSheet.create({
  rating: {
    ...Typography.font({ size: 14, family: Typography.FONT_GOTHAM_MEDIUM }),
    ...Mixins.marginLeft(10)
  } as TextStyle,
  divider: {
    width: 1,
    height: 25,
    backgroundColor: Colors.SECONDARY,
    ...Mixins.margin(0, 10, 0, 17)
  } as ViewStyle,
})
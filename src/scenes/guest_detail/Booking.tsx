import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
// import { useSelector } from 'react-redux'
import moment from 'moment'
import StarRating from 'react-native-star-rating'
import { Colors, Mixins, Typography } from '../../styles'
import { TextStyle } from 'react-native'
import { useProps } from '../../hooks'

const image = require('_assets/images/booking_detail.png')

const Booking = () => {
  // const app = useSelector(state => state?.app)
  const { searchDetail } = useProps()

  const bookDates = {
    checkIn: moment(searchDetail.bookDates.startDate).format('MMM DD, YYYY'),
    checkOut: moment(searchDetail.bookDates.endDate).format('MMM DD, YYYY')
  }

  return (
    <View style={Mixins.marginBottom(40)}>
      <Text style={styles.title}>Your Booking</Text>

      <View style={Mixins.row}>
        <View style={styles.section}>
          <Text style={Typography.font({ size: 14, family: Typography.FONT_WALSHRIM_REGULAR }) as TextStyle}>Sheraton Addis Hotel</Text>
          <View style={styles.starWrapper}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={0}
              starSize={8}
              fullStarColor={Colors.SECONDARY}
              emptyStarColor={Colors.SECONDARY}
              starStyle={Mixins.marginRight(5)}
            />
          </View>

          <Image source={image} style={{ width: 144, height: 81 }} />
        </View>
        <View style={styles.divider}></View>

        <View style={styles.section}>
          <Text style={styles.roomName}>Deluxe Room</Text>
          <Text style={styles.text}>CheckIn : {bookDates.checkIn}</Text>
          <Text style={styles.text}>CheckOut : {bookDates.checkOut}</Text>
          <Text style={styles.text}>Guest : {1}</Text>
          <Text style={styles.text}>Price : {`47$`}</Text>
        </View>
      </View>
    </View>
  )
}

export default Booking

const styles = StyleSheet.create({
  title: {
    ...Typography.font({ size: 23, family: Typography.FONT_WALSHRIM_BOLD }),
    ...Mixins.marginBottom(10)
  } as TextStyle,
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: Colors.SECONDARY,
    ...Mixins.margin(0, 10, 0, 17)
  },
  starWrapper: {
    ...Mixins.row,
    ...Mixins.marginBottom(15)
  },
  section: {
    ...Mixins.padding(5, 0, 10)
  },
  roomName: {
    ...Typography.font({ size: 14, family: Typography.FONT_GOTHAM_BOLD }),
    ...Mixins.marginBottom(10)
  } as TextStyle,
  text: {
    ...Typography.font({ size: 14, family: Typography.FONT_WALSHRIM_LIGHT }),
    ...Mixins.marginBottom(10)
  } as TextStyle,
})
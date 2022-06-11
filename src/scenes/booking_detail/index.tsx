import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity, TextStyle } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import StarRating from 'react-native-star-rating'
import { Typography, Colors, Mixins } from '../../styles'
import { Header, Icon } from '../../components/common'
import Rating from '../../components/Rating'
import Input from '../../components/form/Input'
import Default from '../../components/buttons/Default'

const exportIcon = require('_assets/images/export_pdf.png')
interface IBookingDetailScreen {
  /**
   * this prop is required for react native navigation
   *
   * @type {string}
   * @memberof IGoBack
   */
  componentId: string,
}
const BookingDetailScreen: React.FC<IBookingDetailScreen> = (props) => {
  const { componentId } = props
  // const history = [
  //   {
  //     title: 'Sheraton Hotel',
  //     status: 'booked',
  //     balence: {
  //       bank: 10500,
  //       ticket: 650,
  //       tax: 50,
  //       available: 9800
  //     },
  //     time: [
  //       { title: 'Check-In', time: 'Jan 12 , 10 PM' },
  //       { title: 'Check-Out', time: 'Jan 14 , 12 AM' },
  //       { title: 'Nights', time: '12 ' }
  //     ]
  //   },
  //   {
  //     title: 'Godan Express (00000)',
  //     status: 'canceled',
  //     balence: {
  //       bank: 11000,
  //       ticket: 650,
  //       tax: 150,
  //       available: 10500
  //     },
  //     time: [
  //       { title: 'Departs', time: '00:00:PM' },
  //       { title: 'Arrives', time: '00:00:AM' },
  //       { title: 'Duration', time: '00D 00H 00M' }
  //     ]
  //   },
  //   {
  //     title: 'Godan Express (00000)',
  //     status: 'canceled',
  //     balence: {
  //       bank: 10500,
  //       ticket: 650,
  //       tax: 50,
  //       available: 9800
  //     },
  //     time: [
  //       { title: 'Departs', time: '00:00:PM' },
  //       { title: 'Arrives', time: '00:00:AM' },
  //       { title: 'Duration', time: '00D 00H 00M' }
  //     ]
  //   },
  //   {
  //     title: 'Godan Express (00000)',
  //     status: 'booked',
  //     balence: {
  //       bank: 11000,
  //       ticket: 650,
  //       tax: 150,
  //       available: 10500
  //     },
  //     time: [
  //       { title: 'Departs', time: '00:00:PM' },
  //       { title: 'Arrives', time: '00:00:AM' },
  //       { title: 'Duration', time: '00D 00H 00M' }
  //     ]
  //   },
  //   {
  //     title: 'Godan Express (00000)',
  //     status: 'canceled',
  //     balence: {
  //       bank: 10500,
  //       ticket: 650,
  //       tax: 50,
  //       available: 9800
  //     },
  //     time: [
  //       { title: 'Departs', time: '00:00:PM' },
  //       { title: 'Arrives', time: '00:00:AM' },
  //       { title: 'Duration', time: '00D 00H 00M' }
  //     ]
  //   },
  //   {
  //     title: 'Godan Express (00000)',
  //     status: 'booked',
  //     balence: {
  //       bank: 10500,
  //       ticket: 650,
  //       tax: 50,
  //       available: 9800
  //     },
  //     time: [
  //       { title: 'Departs', time: '00:00:PM' },
  //       { title: 'Arrives', time: '00:00:AM' },
  //       { title: 'Duration', time: '00D 00H 00M' }
  //     ]
  //   },

  // ]

  const [ review, setReview ] = useState('')
  const [ rating, setRating ] = useState(0)

  return <SafeAreaView style={Mixins.container}>
    <Header componentId={componentId} />
    <TouchableOpacity style={styles.printPdf} >
      <Icon source={exportIcon} size={25} color={Colors.WHITE} />
      <Text style={Typography.font({ size: 14, family: Typography.FONT_GOTHAM_MEDIUM }) as TextStyle}>Print PDF</Text>
    </TouchableOpacity>

    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} style={Mixins.marginTop(-30)}>
      <View style={Mixins.mainWidth}>
        <View style={[ Mixins.marginBottom(30), { alignItems: 'center' } ]}>
          <View style={styles.qrCode}><QRCode value="abc" color={Colors.PRIMARY} /></View>
          <Text style={Typography.font({ size: 29, family: Typography.FONT_GOTHAM_BLACK }) as TextStyle}>#567892</Text>
        </View>

        <View style={Mixins.row}>
          <View style={styles.verticalLine}></View>
          <View style={Mixins.padding(10, 0)}>
            <Text style={styles.text}>Sheraton Addis Hotel <Text style={styles.subText}>( Deluxe Room )</Text></Text>
            <Text style={styles.text}>CheckIn - <Text style={styles.subText}>Jan 12 , 2021</Text></Text>
            <Text style={styles.text}>CheckOut - <Text style={styles.subText}>Jan 12 , 2021</Text></Text>
            <Text style={styles.text}>Total Paid - <Text style={styles.subText}>USD 40</Text></Text>
            <Text style={styles.text}>Form Of Payment : Visa / MasterCard</Text>
            <Text style={[ styles.text, [ Mixins.marginBottom(0) ] ]}>Transaction Ref : B125678546718</Text>
          </View>
        </View>

        <View style={[ Mixins.margin(30, 0), { alignItems: 'flex-end' } ]}>
          <Rating score={4.3} reviews={127} />
        </View>

        <View>
          <Input
            value={review}
            onChange={e => setReview(e.target.value)}
            multiline
            numberOfLines={7}
            label={`Write a Review`}
          />
        </View>

        <View>
          <Text style={[ Mixins.marginBottom(10), Typography.font({ size: 14, family: Typography.FONT_WALSHRIM_LIGHT }) ] as TextStyle}>Rate Your Stay</Text>
          <View style={{ width: '40%' }}>
            <StarRating
              maxStars={5}
              rating={rating}
              selectedStar={rating => setRating(rating)}
              starSize={20}
              fullStarColor={Colors.SECONDARY}
              emptyStarColor={Colors.SECONDARY}
            />
          </View>
        </View>

        <View style={Mixins.marginTop(50)}>
          <Default title="Post / Submit Review" onPress={() => null} />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
}

export default BookingDetailScreen

const styles = StyleSheet.create({
  printPdf: {
    alignItems: 'center',
    ...Mixins.position({ top: 20, right: 20 })
  },
  qrCode: {
    ...Mixins.padding(7),
    ...Mixins.marginBottom(10),
    borderRadius: 10,
    backgroundColor: Colors.WHITE
  },
  verticalLine: {
    width: 3,
    height: '100%',
    backgroundColor: Colors.SECONDARY,
    ...Mixins.marginRight(26)
  },
  text: {
    ...Typography.font({ size: 15, family: Typography.FONT_GOTHAM_BLACK }),
    ...Mixins.marginBottom(20)
  } as TextStyle,
  subText: {
    ...Typography.font({ size: 12, family: Typography.FONT_GOTHAM_MEDIUM })
  } as TextStyle
})
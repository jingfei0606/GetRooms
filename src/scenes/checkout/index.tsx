import React, { useState } from 'react'
import { StyleSheet, Dimensions, ScrollView, View, Text, TextStyle } from 'react-native'
import { Mixins, Typography } from '../../styles'
import { Default } from '../../components/buttons'
import { Header } from '../../components/common'
import Payment from './Payment'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'

const { width } = Dimensions.get("window")

interface ICheckoutScreen extends NavigationComponentProps {

}
const CheckoutScreen: React.FC<ICheckoutScreen> = (props) => {
  const { componentId } = props

  const paymentList = [
    {
      id: 1,
      title: 'Tele Birr',
      description: 'You can pay at your nearest Commercial Bank Of Ethiopia using your reservation code.',
      image: require('_assets/images/payment/tele.png'),
    },
    {
      id: 2,
      title: 'CBE Branch',
      description: 'You can pay for your reservation from your Tele Birr account.',
      image: require('_assets/images/payment/cbe_branch.png')
    },
    {
      id: 3,
      title: 'Card Payment',
      description: 'Pay from your debit and credit cards to secure your reservation instantly.',
      image: require('_assets/images/payment/visa.png')
    },
    {
      id: 4,
      title: 'CBE - Birr',
      description: 'Secure your payment by paying from your CBE-Birr wallet easily.',
      image: require('_assets/images/payment/cbe_birr.png')
    },
  ]

  const [ selectedPaymentId, setSelectedPaymentId ] = useState(2)

  const handlePress = (id) => {
    setSelectedPaymentId(id)
  }

  const handleBook = () => {
    if (selectedPaymentId === 3) {
      Navigation.push(componentId, {
        component: {
          name: SceneNames.WebViewScreen
        }
      })
      return
    }

    Navigation.push(componentId, {
      component: {
        name: SceneNames.ThankYouScreen
      }
    })
  }

  const HeaderTitle = <View style={styles.headerTitle}>
    <Text style={{ ...styles.title, flex: 1 }}>Checkout</Text>
    <Text style={styles.title}>47$</Text>
  </View>

  return (
    <View style={Mixins.container}>
      <Header title={HeaderTitle} componentId={componentId} />

      <ScrollView showsVerticalScrollIndicator={false} style={Mixins.mainWidth}>
        {paymentList.map(item =>
          <Payment item={item} key={item.id} onPress={handlePress} selected={selectedPaymentId} />
        )}

        <View style={Mixins.marginTop(30)}>
          <Default title={`Book Now`} onPress={handleBook} />
        </View>
      </ScrollView>
    </View>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
  headerTitle: {
    ...Mixins.row,
    width: width - 100,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    ...Typography.font({ size: 18 }),
  } as TextStyle
})
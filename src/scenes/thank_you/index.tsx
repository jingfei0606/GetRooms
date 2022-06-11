import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Text, SafeAreaView, TextStyle } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { Mixins, Typography, Colors } from '../../styles'
import { Default } from '../../components/buttons'
import { Icon } from '../../components/common'
import { Input } from '../../components/form'
import { ImageStyle } from 'react-native'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'

const notepadIcon = require('_assets/images/notepad.png')
const planeIcon = require('_assets/images/paper_plane.png')
interface IThankYouScreen extends NavigationComponentProps {

}
const ThankYouScreen: React.FC<IThankYouScreen> = (props) => {
  const { componentId } = props

  const [ reservation, setReservation ] = useState('')

  const handlePress = () => {
  }

  return (
    <SafeAreaView style={Mixins.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ alignSelf: 'stretch' }}>
        <View style={[ Mixins.container, Mixins.paddingTop(15) ]}>
          <Text style={Typography.font({ size: 40, family: Typography.FONT_GOTHAM_BLACK }) as TextStyle}>Thank You!</Text>

          <View style={styles.status}>
            <Icon source={notepadIcon} size={90} color={Colors.PRIMARY} />
            <View style={Mixins.paddingLeft(10)}>
              <Text style={styles.statusTitle}>Booking Confirmed</Text>
              <Text style={Typography.font({ size: 13, color: Colors.PRIMARY, family: Typography.FONT_WALSHRIM_MEDIUM }) as TextStyle}>
                We have successfully reserved your hotel. Please pay on-time to secure your spot.
              </Text>
            </View>
          </View>

          <View style={Mixins.row}>
            <View style={styles.qrCode}><QRCode value="abc" size={80} color={Colors.PRIMARY} /></View>
            <View>
              <Text style={[ Typography.font({ size: 21 }), Mixins.marginBottom(20) ] as TextStyle}>Booking / Payment Code</Text>
              <Text style={Typography.font({ size: 40, family: Typography.FONT_GOTHAM_BLACK }) as TextStyle}>#561281</Text>
            </View>
          </View>

          <View style={[ Mixins.margin(40), Mixins.mainWidth, { alignItems: 'flex-end' } ]}>
            <Input
              label={`Send my reservation details via email Or sms`}
              value={reservation}
              onChange={val => setReservation(val)}
              labelStyle={Typography.font({ size: 21, family: Typography.FONT_WALSHRIM_REGULAR }) as TextStyle} />

            <Default onPress={handlePress} style={styles.button}>
              <View style={Mixins.row}>
                <Text style={Typography.font({ size: 18, color: Colors.PRIMARY }) as TextStyle}>Send</Text>
                <Icon source={planeIcon} size={25} color={Colors.PRIMARY} style={styles.planeIcon} />
              </View>
            </Default>
          </View>

          <View style={Mixins.marginTop(30)}>
            <Default title={`Back to Home`} onPress={() => Navigation.push(componentId, {
              component: {
                name: SceneNames.HomeScreen
              }
            })} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ThankYouScreen

const styles = StyleSheet.create({
  status: {
    ...Mixins.mainWidth,
    ...Mixins.padding(20, 100, 20, 16),
    ...Mixins.margin(25, 0, 40),
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: Colors.SECONDARY,
  },
  statusTitle: {
    ...Typography.font({ size: 22, color: Colors.PRIMARY, family: Typography.FONT_GOTHAM_BOLD }),
    ...Mixins.margin(10, 0, 20, 10)
  } as TextStyle,
  qrCode: {
    ...Mixins.padding(7),
    ...Mixins.marginRight(20),
    borderRadius: 10,
    backgroundColor: Colors.WHITE
  },
  button: {
    width: 150,
    ...Mixins.padding(10),
  },
  planeIcon: {
    ...Mixins.marginLeft(10),
    transform: [ { rotate: '45deg' } ]
  } as ImageStyle
})
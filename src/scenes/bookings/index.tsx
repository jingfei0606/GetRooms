import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, TextStyle } from 'react-native'

import { Typography, Colors, Mixins } from '../../styles'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'

import ListItem from './ListItem'

interface IBookingScreen extends NavigationComponentProps {

}
const BookingsScreen: React.FC<IBookingScreen> = (props) => {
  const { componentId } = props

  const history = [
    {
      title: 'Sheraton Hotel',
      status: 'booked',
      balence: {
        bank: 10500,
        ticket: 650,
        tax: 50,
        available: 9800
      },
      time: [
        { title: 'Check-In', time: 'Jan 12 , 10 PM' },
        { title: 'Check-Out', time: 'Jan 14 , 12 AM' },
        { title: 'Nights', time: '12 ' }
      ]
    },
    {
      title: 'Godan Express (00000)',
      status: 'canceled',
      balence: {
        bank: 11000,
        ticket: 650,
        tax: 150,
        available: 10500
      },
      time: [
        { title: 'Departs', time: '00:00:PM' },
        { title: 'Arrives', time: '00:00:AM' },
        { title: 'Duration', time: '00D 00H 00M' }
      ]
    },
    {
      title: 'Godan Express (00000)',
      status: 'canceled',
      balence: {
        bank: 10500,
        ticket: 650,
        tax: 50,
        available: 9800
      },
      time: [
        { title: 'Departs', time: '00:00:PM' },
        { title: 'Arrives', time: '00:00:AM' },
        { title: 'Duration', time: '00D 00H 00M' }
      ]
    },
    {
      title: 'Godan Express (00000)',
      status: 'booked',
      balence: {
        bank: 11000,
        ticket: 650,
        tax: 150,
        available: 10500
      },
      time: [
        { title: 'Departs', time: '00:00:PM' },
        { title: 'Arrives', time: '00:00:AM' },
        { title: 'Duration', time: '00D 00H 00M' }
      ]
    },
    {
      title: 'Godan Express (00000)',
      status: 'canceled',
      balence: {
        bank: 10500,
        ticket: 650,
        tax: 50,
        available: 9800
      },
      time: [
        { title: 'Departs', time: '00:00:PM' },
        { title: 'Arrives', time: '00:00:AM' },
        { title: 'Duration', time: '00D 00H 00M' }
      ]
    },
    {
      title: 'Godan Express (00000)',
      status: 'booked',
      balence: {
        bank: 10500,
        ticket: 650,
        tax: 50,
        available: 9800
      },
      time: [
        { title: 'Departs', time: '00:00:PM' },
        { title: 'Arrives', time: '00:00:AM' },
        { title: 'Duration', time: '00D 00H 00M' }
      ]
    },

  ]

  return <SafeAreaView style={{ flex: 1 }}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[ Mixins.container, { paddingTop: 25 } ]}>

        <View style={styles.history}>
          <Text style={Typography.font({ size: 15, color: Colors.GRAY }) as TextStyle}>History</Text>
        </View>
        <View>
          {history.map((item, index) => <ListItem item={item} key={index}
            onPress={() => Navigation.push(componentId, {
              component: {
                name: SceneNames.BookingDetailScreen
              }
            })} />)}
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
}

export default BookingsScreen

const styles = StyleSheet.create({
  history: {
    ...Mixins.mainWidth,
    ...Mixins.marginBottom(20)
  }
})
import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { Colors, Mixins, Typography, Menu } from '../../styles'
import { Header, Icon } from '../common'

import ListItem from './ListItem'
import FiltersButton from './FiltersButton'
import { TextStyle } from 'react-native'
interface IRoomList {
  /**
  * this prop is required for react native navigation
  *
  * @type {string}
  * @memberof IGoBack
  */
  componentId: string,

  data: any,
  onPress(): void,
  itemStyle?: any,
  isHotel?: boolean
}

const RoomList: React.FC<IRoomList> = (props) => {
  const { data, isHotel, itemStyle, onPress, componentId } = props

  return (
    <View>
      <Header title={data?.title} componentId={componentId} />
      {isHotel &&
        <FiltersButton />
      }

      <View style={styles.header}>
        <View style={Mixins.row}>
          <Icon source={require('_assets/images/calendar.png')} size={20} />
          <Text style={styles.dateRange}>{data?.date?.from}, {data?.date?.to}</Text>
        </View>
        <View style={Mixins.row}>
          <Icon source={require('_assets/images/user.png')} size={20} />
          <Text style={styles.guest}>{data?.guest}</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>

          <View style={Menu.menu}>
            {data?.list && data?.list.map((item, i) => (
              <ListItem key={i} item={item} itemStyle={itemStyle} onPress={onPress} isHotel={isHotel} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default RoomList

const styles = StyleSheet.create({
  header: {
    ...Mixins.row,
    justifyContent: 'space-between',
    ...Mixins.paddingBottom(20),
    ...Mixins.marginBottom(20),
    borderBottomWidth: 1,
    borderBottomColor: Colors.WHITE
  },
  dateRange: {
    ...Typography.font({ size: 15 }),
    ...Mixins.marginLeft(15)
  } as TextStyle,
  guest: {
    ...Typography.font({ size: 10, family: Typography.FONT_WALSHRIM_LIGHT }),
    ...Mixins.marginLeft(7)
  } as TextStyle,
  main: {}
})
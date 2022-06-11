import React from 'react'
import { TextStyle } from 'react-native'
import { StyleSheet, View, Text } from 'react-native'
import { Typography, Mixins, Menu } from '../../styles'

import MenuContent from './MenuContent'

const MenuItem = ({ item, onChange }) => {
  const handlePress = (type, direction) => {
    let newVal = item[ type ] + direction
    if (newVal < 0) return

    let _item = { ...item, [ type ]: newVal }
    onChange(_item)
  }

  return (
    <View style={styles.container} >
      <Text style={styles.title}>{item?.title}</Text>
      <MenuContent type={`adults`} value={item.adults} onPress={handlePress} />
      <MenuContent type={`children`} value={item.children} onPress={handlePress} />
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({
  container: {
    ...Menu.menuItem,
    ...Mixins.paddingBottom(0)
  },
  title: {
    ...Typography.font({ size: 20, weight: 'bold' }),
    ...Mixins.marginBottom(34)
  } as TextStyle,
})
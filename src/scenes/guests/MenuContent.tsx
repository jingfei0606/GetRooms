import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, TextStyle } from 'react-native'
import { Mixins, Typography } from '../../styles'
import { Icon } from '../../components/common'

const MenuContent = ({ type, value, onPress }) => {
  const title = type === 'adults' ? 'Adults' : 'Children\n ( 0 - 17 years old )'
  const minusIcon = require('_assets/images/minus.png')
  const addIcon = require('_assets/images/add.png')

  return (
    <View style={{ ...styles.menuContent, ...Mixins.row }}>
      <Text style={Typography.font({ size: 12 }) as TextStyle}>{title}</Text>

      <View style={Mixins.row}>
        <TouchableOpacity onPress={() => onPress(type, -1)}>
          <Icon source={minusIcon} size={17} />
        </TouchableOpacity>

        <Text style={styles.value}>{value}</Text>

        <TouchableOpacity onPress={() => onPress(type, 1)}>
          <Icon source={addIcon} size={17} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MenuContent

const styles = StyleSheet.create({
  menuContent: {
    marginBottom: 22,
    justifyContent: 'space-between'
  },
  value: {
    width: 60,
    textAlign: 'center',
    ...Typography.font({ size: 12 }),
  } as TextStyle,
})
import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, TextStyle } from 'react-native'
import { Colors, Mixins, Typography } from '../../styles'
import { Icon } from '../common'

const mapIcon = require('_assets/images/material_map.png')
const sliderIcon = require('_assets/images/slider.png')

const FiltersButton: React.FC = () => {

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={{ ...styles.button }} onPress={() => null}>
          <Icon source={mapIcon} size={20} color={Colors.WHITE} />
          <Text style={styles.text}>Map</Text>
        </TouchableOpacity>
        <View style={{ ...Mixins.border(0.2, Colors.WHITE), height: '100%' }}></View>
        <TouchableOpacity style={styles.button}>
          <Icon source={sliderIcon} size={20} color={Colors.WHITE} />
          <Text style={styles.text}>Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FiltersButton

const styles = StyleSheet.create({
  container: {
    ...Mixins.position({ bottom: 20, left: 0, right: 0 }),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonGroup: {
    ...Mixins.row,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 50,
  },
  button: {
    ...Mixins.padding(10, 20),
    ...Mixins.row
  },
  text: {
    ...Typography.font({ size: 14 }),
    ...Mixins.marginLeft(10)
  } as TextStyle
})
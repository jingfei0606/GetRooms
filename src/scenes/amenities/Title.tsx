import React from 'react'
import { View, Text, TextStyle } from 'react-native'
import { Typography, Mixins } from '../../styles'

const Title = ({ title }) => {

  return (
    <View style={Mixins.marginBottom(20)}>
      <Text style={Typography.font({ size: 24 }) as TextStyle}>{title}</Text>
    </View>
  )
}

export default Title

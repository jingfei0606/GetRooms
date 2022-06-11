import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { Colors } from '../../styles'
import { Icon } from '../common'
import { Navigation } from 'react-native-navigation'
const arrowIcon = require('_assets/images/left_arrow.png')

interface IGoBack {
  /**
   * this prop is required for react native navigation(wix)
   *
   * @type {string}
   * @memberof IGoBack
   */
  componentId: string,
  /**
   * Icon color the default is secondary
   *
   * @type {string}
   * @memberof IGoBack
   */
  iconColor: string,
  /**
   * optional style for touchable opacity which wraps the icon
   *
   * @type {ViewStyle}
   * @memberof IGoBack
   */
  style?: ViewStyle
}

const GoBack: React.FC<IGoBack> = (props) => {
  const { iconColor = Colors.SECONDARY, style, componentId } = props

  return (
    <TouchableOpacity onPress={() => Navigation.pop(componentId)} style={style} >
      <Icon
        size={45}
        source={arrowIcon}
        color={iconColor}
      />
    </TouchableOpacity>
  )
}

export default GoBack

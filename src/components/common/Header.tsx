import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'
import { StyleSheet, View, Text } from 'react-native'
import { Typography, Mixins, Colors } from '../../styles'
import { GoBack } from '../buttons'

interface IHeader {
  /**
   * this prop is required for react native navigation
   *
   * @type {string}
   * @memberof IGoBack
   */
  componentId: string,
  /**
   * Optional title for header
   *
   * @type {(string | React.ReactElement)}
   * @memberof IHeader
   */
  title?: string | React.ReactElement,
  /**
   * optional props for {@link GoBack} component icon color
   *
   * @type {string}
   * @memberof IHeader
   */
  color?: string,
  /**
   * optinal text style that can possibly override or add styles to the title text
   *
   * @type {TextStyle}
   * @memberof IHeader
   */
  titleStyle?: TextStyle,
  /**
   * optional view style that can override or add styles to the header
   *
   * @type {ViewStyle}
   * @memberof IHeader
   */
  style?: ViewStyle
}

const Header: React.FC<IHeader> = (props) => {
  const { color = Colors.SECONDARY, style, title, titleStyle, componentId } = props

  let titleType = typeof title
  return (
    <View style={{ ...styles.headerView, ...style }}>
      <GoBack iconColor={color} componentId={componentId} />
      {title &&
        titleType === 'string'
        ? <Text style={{ ...styles.title, ...titleStyle }}>{title}</Text>
        : <View>{title}</View>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerView: {
    ...Mixins.mainWidth,
    ...Mixins.row,
    justifyContent: 'space-between',
    ...Mixins.margin(15, 0, 30)
  },
  title: {
    flex: 1,
    textAlign: 'center',
    ...Typography.font({ size: 18 }),
    ...Mixins.marginRight(40)
  } as ViewStyle
})
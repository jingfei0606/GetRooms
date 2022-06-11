import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Colors, Mixins, Typography } from '../../styles'

interface IDefault {
  /**
   * optional title for Default component
   *
   * @type {string}
   * @memberof IDefault
   */
  title?: string,
  /**
   * A function that is called when the default button press event 
   * 
   * @memberof IDefault
   */
  onPress(): void,
  /**
   * child element or text
   *
   * @type {*}
   * @memberof IDefault
   */
  children?: any,

  /**
   * optional view style that might override or add styles to the default component
   *
   * @type {ViewStyle}
   * @memberof IDefault
   */
  style?: ViewStyle
}
const Default: React.FC<IDefault> = (props) => {
  const { title, onPress, children, style } = props
  return (
    <TouchableOpacity style={[ styles.button, style ]} onPress={onPress}>
      {title &&
        <Text style={Typography.font({ size: 22, color: Colors.PRIMARY }) as TextStyle}>{title}</Text>
      }
      {children}
    </TouchableOpacity>
  )
}

export default Default

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    ...Mixins.mainWidth,
    marginBottom: 34,
    ...Mixins.padding(15),
    borderRadius: 10,
    backgroundColor: Colors.SECONDARY
  } as ViewStyle,
})
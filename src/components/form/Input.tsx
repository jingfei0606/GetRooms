import React from 'react'
import { StyleSheet, View, Text, TextInput, TextStyle, ViewStyle } from 'react-native'
import { Colors, Mixins, Typography } from '../../styles'
interface IInput {
  /**
   * This prop is a label text for the {@link TextInput} field
   *
   * @type {string}
   * @memberof IInput
   */
  label?: string,
  /**
   * value to show for the {@link TextInput} field.
   *
   * @type {string}
   * @memberof IInput
   */
  value?: string,
  /**
   * a function called when the {@link TextInput} changes.
   *
   * @param {string} text
   * @memberof IInput
   */
  onChange?(text: any): void,

  type?,
  /**
   * this boolean props shows whether the field is manditory or not.
   * the field is manditory if only this prop is set to true.
   * @type {(boolean | undefined)}
   * @memberof IInput
   */
  required?: boolean | undefined,

  error?,
  /**
   * optional number props which decides the {@link TextInput} supports multiline or not.
   *
   * @type {boolean}
   * @memberof IInput
   */
  multiline?: boolean,
  /**
   * optional number props which sets number of line for {@link TextInput}.
   *
   * @type {number}
   * @memberof IInput
   */
  numberOfLines?: number,
  /**
   * optional textStyle props which might add style override the label style.
   *
   * @type {TextStyle}
   * @memberof IInput
   */
  labelStyle?: TextStyle,
  /**
   * optional string props which is displayed before user start entering text.
   *
   * @type {string}
   * @memberof IInput
   */
  placeholder?: string,

  /**
   * text color for placeholder text.
   *
   * @type {string}
   * @memberof IInput
   */
  placeholderTextColor?: string
}

const Input: React.FC<IInput> = (props) => {

  const { label, value, onChange, type, required, error, multiline, numberOfLines, labelStyle, placeholder, placeholderTextColor } = props

  const errorText = typeof (error) === 'string' ? error : 'This field is required'
  const textContentType = type || 'none'

  return (
    <View style={Mixins.margin(0, 0, 10)}>
      <Text style={[ styles.label, labelStyle ]}>{label} {required && `*`}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        // required={required}
        textContentType={textContentType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      {error &&
        <Text style={styles.error}>{errorText}</Text>
      }
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  label: {
    ...Typography.font({ size: 14, family: Typography.FONT_WALSHRIM_LIGHT }),
    ...Mixins.marginBottom(10)
  } as TextStyle,
  input: {
    ...Typography.font({ size: 16, family: Typography.FONT_WALSHRIM_LIGHT }),
    ...Mixins.border(1, Colors.SECONDARY),
    ...Mixins.padding(10)
  } as ViewStyle,
  error: {
    ...Typography.font({ size: 10, color: Colors.RED, family: Typography.FONT_WALSHRIM_LIGHT }),
    ...Mixins.marginTop(5)
  } as TextStyle
})
import React from 'react'
import { ImageSourcePropType, ViewStyle } from 'react-native'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { Colors, Mixins, Typography } from '../../styles'
import { Icon } from '../common'

interface IItem {
  image: {
    size: number,
    source: ImageSourcePropType,
    color?: string
  },
  description: string,
  title: string,
  onPress(): void
}
interface IOutline {
  /**
   * Item props is menu with details
   *
   * @type {IItem}
   * @memberof IOutline
   */
  item: IItem,
  /**
   * this function is called when the ourline button is clicked
   *
   * @memberof IOutline
   */
  onPress(): void
}

const Outline: React.FC<IOutline> = (props) => {
  const { item, onPress } = props

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {item.image &&
        <Icon source={item.image.source} size={item.image.size} color={item.image.color} />
      }

      <View style={Mixins.paddingLeft(20)}>
        <Text style={{ fontSize: 10, fontFamily: Typography.FONT_WALSHRIM_LIGHT, color: Colors.WHITE }}>{item.description}</Text>
        <Text style={{ fontSize: 20, color: Colors.WHITE }}>{item?.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Outline

const styles = StyleSheet.create({
  button: {
    ...Mixins.mainWidth,
    ...Mixins.row,
    ...Mixins.marginBottom(34),
    ...Mixins.padding(10, 16),
    ...Mixins.border(1, Colors.SECONDARY)
  } as ViewStyle,
})
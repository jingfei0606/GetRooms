import React from 'react'
import { ImageSourcePropType, ImageStyle } from 'react-native'
import { Image } from 'react-native'
import { Colors } from '../../styles'
interface IIcons {
  /**
   * source props for image element ex require('../../someimage.png)
   *
   * @type {ImageSourcePropType}
   * @memberof IIcons
   */
  source: ImageSourcePropType,
  /**
   * optional props for tint color
   *
   * @type {string}
   * @memberof IIcons
   */
  color?: string,
  /**
   * this number props is both width and height of the image.
   * this makes the image a square.
   * @type {number}
   * @memberof IIcons
   */
  size: number,
  /**
   * this image style styles the icon image
   *
   * @type {ImageStyle}
   * @memberof IIcons
   */
  style?: ImageStyle
}

const Icon: React.FC<IIcons> = (props) => {
  const { source, size, style, color = Colors.WHITE } = props
  return (
    <Image
      source={source}
      style={[ style, { width: size, height: size, tintColor: color } ]}
    />
  )
}

export default Icon
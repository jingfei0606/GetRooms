import { Dimensions, PixelRatio, ViewStyle } from 'react-native'
import * as Colors from './colors'

export const WINDOW_WIDTH = Dimensions.get('window').width
const guidelineBaseWidth = 375
export const mainWidth = { width: WINDOW_WIDTH - 50 }

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size

export const scaleFont = size => size * PixelRatio.getFontScale()

function dimensions(top, right = top, bottom = top, left = right, property) {
  let styles = {}

  styles[ `${property}Top` ] = top
  styles[ `${property}Right` ] = right
  styles[ `${property}Bottom` ] = bottom
  styles[ `${property}Left` ] = left

  return styles
}

export function margin(top?: number, right?: number, bottom?: number, left?: number) {
  return dimensions(top, right, bottom, left, 'margin')
}

export function padding(top?: number, right?: number, bottom?: number, left?: number) {
  return dimensions(top, right, bottom, left, 'padding')
}

export const marginTop = val => ({ marginTop: val })
export const marginRight = val => ({ marginRight: val })
export const marginBottom = val => ({ marginBottom: val })
export const marginLeft = val => ({ marginLeft: val })

export const paddingTop = val => ({ paddingTop: val })
export const paddingRight = val => ({ paddingRight: val })
export const paddingBottom = val => ({ paddingBottom: val })
export const paddingLeft = val => ({ paddingLeft: val })

export function boxShadow(
  color,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  }
}

export function border(width = 1, color: string, radius = 10) {
  return {
    borderWidth: width,
    borderColor: color,
    borderRadius: radius
  }
}

export const container = {
  flex: 1,
  alignItems: "center",
  backgroundColor: Colors.PRIMARY,
} as ViewStyle

export const row = {
  flexDirection: 'row',
  alignItems: 'center'
} as ViewStyle

export const position = (props) => ({
  position: 'absolute',
  zIndex: 1,
  ...props
})

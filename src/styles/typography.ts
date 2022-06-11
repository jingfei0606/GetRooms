import { scaleFont } from './mixins'
import * as Colors from './colors'
// import { TextStyle } from 'react-native'

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular'
export const FONT_FAMILY_BOLD = 'OpenSans-Bold'

export const FONT_WALSHRIM_LIGHT = 'GTWalsheimPro-Light'
export const FONT_WALSHRIM_REGULAR = 'GTWalsheimPro-Regular'
export const FONT_WALSHRIM_MEDIUM = 'GTWalsheimPro-Medium'
export const FONT_WALSHRIM_BOLD = 'GTWalsheimPro-Bold'

export const FONT_GOTHAM_THIN = 'Gotham-Thin'
export const FONT_GOTHAM_XLIGHT = 'Gotham-XLight'
export const FONT_GOTHAM_LIGHT = 'GothamLight'
export const FONT_GOTHAM_LIGHT_ITALIC = 'GothamLightItalic'
export const FONT_GOTHAM_MEDIUM = 'GothamMedium'
export const FONT_GOTHAM_BLACK = 'Gotham-Black'
export const FONT_GOTHAM_BOLD = 'GothamBold'

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400'
export const FONT_WEIGHT_BOLD = '700'

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16)
export const FONT_SIZE_14 = scaleFont(14)
export const FONT_SIZE_12 = scaleFont(12)

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24)
export const LINE_HEIGHT_20 = scaleFont(20)
export const LINE_HEIGHT_16 = scaleFont(16)

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
}

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
}

type fontType = {
  color?: string,
  size?: number,
  family?: string,
  weight?: string,
  lineHeight?: number
}

export const font = (props: fontType) => {
  const { color = Colors.WHITE, size = 12, family = FONT_WALSHRIM_MEDIUM, weight = 'normal', lineHeight } = props
  return {
    fontFamily: family,
    fontSize: size,
    color,
    fontWeight: weight,
    lineHeight
  }
}

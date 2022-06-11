// import { Dimensions } from 'react-native';
import * as Colors from './colors'
import * as Mixins from './mixins'

// const { width, height } = Dimensions.get("window");
export const menu = {
  ...Mixins.marginBottom(20),
  ...Mixins.mainWidth,
  flex: 1
}

export const menuItem = {
  ...Mixins.marginTop(20),
  ...Mixins.paddingBottom(20),
  borderBottomWidth: 1,
  borderBottomColor: Colors.WHITE
}
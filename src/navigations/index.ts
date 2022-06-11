import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import LandingNavigator from './land-navigator'
import AppNavigator from './app-navigator'

const RootNavigator = createSwitchNavigator(
  {
    Land: LandingNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Land',
  },
)

export default createAppContainer(RootNavigator)

export * from './stack-navigation'
export * from './bottom-tab-navigation'
export * from './authentication-stack'
export * from './main-stack'

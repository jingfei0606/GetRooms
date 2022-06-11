import { Navigation } from "react-native-navigation"
import { mainNavigation } from './navigations'
import { Colors } from './styles'

import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(mainNavigation)
  // Auth.currentAuthenticatedUser()
  //   .then(() => Navigation.setRoot(mainNavigation))
  //   .catch(() => Navigation.setRoot(authenticationNavigation))
})

Navigation.setDefaultOptions({
  topBar: {
    visible: false
  },
  bottomTabs: {
    backgroundColor: Colors.PRIMARY,
    titleDisplayMode: "alwaysShow",
    borderColor: Colors.SECONDARY
  },
  bottomTab: {
    fontSize: 11.5,
    iconColor: Colors.SECONDARY,
    textColor: Colors.WHITE,
    selectedIconColor: Colors.SECONDARY,
    selectedTextColor: Colors.WHITE,
    selectedFontSize: 14
  },
  statusBar: {
    drawBehind: true,
    backgroundColor: 'transparent'
  }
})
import React from 'react'
import LoginScreen from '../scenes/unlogged/LoginScreen'
import RegistrationScreen from '../scenes/unlogged/RegistrationScreen'
import ComfirmScreen from '../scenes/unlogged/ConfirmScreen'
import ResetPasswordScreen from '../scenes/unlogged/ResetPasswordScreen'

import { Navigation } from 'react-native-navigation'
import { SceneNames } from '../scenes/SceneNames'
import { Provider } from 'react-redux'
import { store } from '../states/store'
// Navigation.registerComponent(SceneNames.LoginScreen, () => LoginScreen)
// Navigation.registerComponent(SceneNames.RegistrationScreen, () => RegistrationScreen)
// Navigation.registerComponent(SceneNames.ComfirmScreen, () => ComfirmScreen)
// Navigation.registerComponent(SceneNames.ResetPasswordScreen, () => ResetPasswordScreen)

Navigation.registerComponent(
  SceneNames.LoginScreen,
  () => props =>
    <Provider store={store} >
      <LoginScreen {...props} />
    </Provider>,
  () => LoginScreen
)

Navigation.registerComponent(
  SceneNames.RegistrationScreen,
  () => props =>
    <Provider store={store} >
      <RegistrationScreen {...props} />
    </Provider>,
  () => RegistrationScreen
)

Navigation.registerComponent(
  SceneNames.ComfirmScreen,
  () => props =>
    <Provider store={store} >
      <ComfirmScreen {...props} />
    </Provider>,
  () => ComfirmScreen
)

Navigation.registerComponent(
  SceneNames.ResetPasswordScreen,
  () => props =>
    <Provider store={store} >
      <ResetPasswordScreen {...props} />
    </Provider>,
  () => ResetPasswordScreen
)

export const authenticationNavigation = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: SceneNames.ResetPasswordScreen,
          }
        },
        {
          component: {
            name: SceneNames.ComfirmScreen,
          }
        },
        {
          component: {
            name: SceneNames.RegistrationScreen,
          },
        },
        {
          component: {
            name: SceneNames.LoginScreen,
          },
        }
      ]
    }
  }
}
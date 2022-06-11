import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, TextStyle, } from 'react-native'
import SplashScreen from 'react-native-lottie-splash-screen'
import { Mixins, Colors, Typography } from '../../styles'
import { Input } from '../../components/form'
import { Default } from '../../components/buttons'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'
// import { mainNavigation } from '../../navigations'
import { Auth, Hub } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types"
import { login$ } from '../../api/auth'
import { setUserToAsyncStorage$ } from '../../utils/auth'
import { useActions, useProps } from '../../hooks'
interface ILoginScreen extends NavigationComponentProps {

}

const LoginScreen: React.FC<ILoginScreen> = (props) => {
  const { componentId } = props
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const actions = useActions()
  const selector = useProps()

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 3000)
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          console.log(data)
          break
        case "customOAuthState":
          console.log("customOAuthState " + data)
      }
    })
  }, [])

  const onLoginButtonPressed = () => {
    login$(email, password)
      .then(res => {
        const { firstName, lastName, email, idToken } = res

        setUserToAsyncStorage$({ firstName, lastName, email, token: idToken })
          .then(() => {
            actions.Authentication.setUser({ firstName, lastName, email, token: idToken })
          })
          .then(() => Navigation.push(componentId, {
            component: {
              name: SceneNames.ProfileScreen
            }
          }))
      })
      .catch(err => console.log(err))
      .finally(() => console.log(selector.Authentication.user))
  }

  const onFacebookLoginPress = () => {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook
    })
  }

  const onGoogleLoginPress = () => {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google
    })
  }

  return (
    <View style={styles.container}>
      <Text style={[ Typography.font({ size: 40 }), Mixins.marginBottom(20) ] as TextStyle}>Let's sign you in.</Text>
      <Text style={Typography.font({ size: 30 }) as TextStyle}>Welcome back.</Text>
      <Text style={[ Typography.font({ size: 30 }), Mixins.marginBottom(100) ] as TextStyle}>You've been missed!</Text>
      <View style={{ width: '100%', flex: 1 }}>
        <Input
          placeholder={`Phone, email or username`}
          placeholderTextColor={`${Colors.WHITE}99`}
          onChange={setEmail}
          value={email}
        />
        <Input
          placeholder={`Password`}
          placeholderTextColor={`${Colors.WHITE}99`}
          onChange={setPassword}
          value={password}
        />
      </View>
      <View style={[ Mixins.row, Mixins.padding(30, 0), { width: '100%', justifyContent: 'center' } ]}>
        <View style={Mixins.marginRight(10)}>
          <Text style={[ Typography.font({ size: 16, color: `${Colors.WHITE}55` }) ] as TextStyle}>Don't have an accoun?</Text>
        </View>
        <TouchableOpacity
          onPress={() => Navigation.push(componentId, {
            component: {
              name: SceneNames.RegistrationScreen
            }
          })}
        >
          <Text style={Typography.font({ size: 16 }) as TextStyle}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={[ Mixins.row, { width: '100%', justifyContent: 'center', marginBottom: 10 } ]}>
        <View >
          <Text style={[ Typography.font({ size: 16, color: `${Colors.WHITE}55` }) ] as TextStyle}>Forgot password? </Text>
        </View>
        <TouchableOpacity
          onPress={() => Navigation.push(componentId, {
            component: {
              name: SceneNames.ResetPasswordScreen
            }
          })}
        >
          <Text style={Typography.font({ size: 16 }) as TextStyle}> Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={[ Mixins.row, { width: '100%', justifyContent: 'center', marginBottom: 10 } ]}>
        <TouchableOpacity
          onPress={onFacebookLoginPress}
        >
          <Text style={Typography.font({ size: 16 }) as TextStyle}>Login with facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={[ Mixins.row, { width: '100%', justifyContent: 'center', marginBottom: 10 } ]}>
        <TouchableOpacity
          onPress={onGoogleLoginPress}
        >
          <Text style={Typography.font({ size: 16 }) as TextStyle}>Login with google</Text>
        </TouchableOpacity>
      </View>

      <Default
        title={`Sign In`}
        style={{ width: '100%' }}
        onPress={onLoginButtonPressed}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    ...Mixins.container,
    ...Mixins.padding(50, 40, 0, 40),
    alignItems: 'flex-start'
  }
})
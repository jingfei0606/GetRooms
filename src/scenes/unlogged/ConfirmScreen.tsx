import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TextStyle } from 'react-native'
import SplashScreen from 'react-native-lottie-splash-screen'
import { Mixins, Colors, Typography } from '../../styles'
import { Input } from '../../components/form'
import { Default } from '../../components/buttons'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'
// import { mainNavigation } from '../../navigations'
import { Auth } from 'aws-amplify'

interface IComfirmScreen extends NavigationComponentProps {
  /**
   * username field sent from registration for further user comfirmation
   *
   * @type {string}
   * @memberof IComfirmScreen
   */
  username: string
}

const ComfirmScreen: React.FC<IComfirmScreen> = (props) => {
  const { componentId, username } = props
  const [ comfirmationCode, setComfirmationCode ] = useState<string>('')
  // const [ username, setUsername ] = useState<string>('')

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide() // here      
    }, 3000)
    console.log(props)
  }, [])

  const _onComfirmButtonPress = () => {
    Auth.confirmSignUp(username, comfirmationCode)
      .then(() => Navigation.push(componentId, {
        component: {
          name: SceneNames.LoginScreen
        }
      }))
      .catch(err => console.log(err))
  }

  return (
    <View style={styles.container}>
      <Text style={[ Typography.font({ size: 40 }), Mixins.marginBottom(20) ] as TextStyle}>Hi, {username}</Text>
      <Text style={[ Typography.font({ size: 30 }) as TextStyle ]}>Please enter comfirmation code.</Text>
      <View style={{ width: '100%', marginBottom: 100 }}>
        <Input placeholder={`Enter comfirmation code`} placeholderTextColor={`${Colors.WHITE}99`} onChange={setComfirmationCode} />
      </View>
      <Default
        title={`Comfirm code`}
        style={{ width: '100%' }}
        onPress={_onComfirmButtonPress}
      />
    </View>
  )
}

export default ComfirmScreen

const styles = StyleSheet.create({
  container: {
    ...Mixins.container,
    ...Mixins.padding(50, 40, 0, 40),
    alignItems: 'flex-start'
  }
})
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TextStyle } from 'react-native'
import SplashScreen from 'react-native-lottie-splash-screen'
import { Mixins, Colors, Typography } from '../../styles'
import { Input } from '../../components/form'
import { Default } from '../../components/buttons'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'
// import { confirmSignUp } from '../../utils'
import { Auth } from 'aws-amplify'
interface IResetPassword extends NavigationComponentProps {

}

const ResetPasswordScreen: React.FC<IResetPassword> = (props) => {
  const { componentId } = props
  const [ username, setUsername ] = useState<string>('')
  const [ codeSent, setCodeSent ] = useState(false)

  const [ comfirmationCode, setComfirmationCode ] = useState('')
  const [ newPassword, setNewPassword ] = useState('')

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide() // here      
    }, 3000)
  }, [])

  const _onResetButtonPress = () => {
    Auth.forgotPassword(username)
      .then(() => setCodeSent(true))
      .catch(err => console.log(err))
  }

  const _onSaveButtonPress = () => {
    Auth.forgotPasswordSubmit(username, comfirmationCode, newPassword)
      .then(() => Navigation.push(componentId, {
        component: {
          name: SceneNames.LoginScreen
        }
      }))
      .catch(res => console.log(res))
  }

  if (!codeSent) {
    return (
      <View style={styles.container}>
        <Text style={[ Typography.font({ size: 40 }), Mixins.marginBottom(20) ] as TextStyle}>Reset password</Text>
        <View style={{ width: '100%', marginBottom: 100 }}>
          <Input placeholder={`Enter username`} placeholderTextColor={`${Colors.WHITE}99`} onChange={setUsername} />
        </View>
        <Default
          title={`Reset`}
          style={{ width: '100%' }}
          onPress={_onResetButtonPress}
        />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text style={[ Typography.font({ size: 40 }), Mixins.marginBottom(20) ] as TextStyle}>Reset password</Text>
        <View style={{ width: '100%', marginBottom: 100 }}>
          <Input placeholder={`Enter code`} placeholderTextColor={`${Colors.WHITE}99`} onChange={setComfirmationCode} />
          <Input placeholder={`Enter new Password`} placeholderTextColor={`${Colors.WHITE}99`} onChange={setNewPassword} />
        </View>
        <Default
          title={`Save`}
          style={{ width: '100%' }}
          onPress={_onSaveButtonPress}
        />
      </View>
    )
  }
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
  container: {
    ...Mixins.container,
    ...Mixins.padding(50, 40, 0, 40),
    alignItems: 'flex-start'
  }
})
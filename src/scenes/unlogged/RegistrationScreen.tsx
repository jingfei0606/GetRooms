import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, TextStyle } from 'react-native'
import { Mixins, Colors, Typography } from '../../styles'
import { Input } from '../../components/form'
import { Default } from '../../components/buttons'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'
import { signup$ } from '../../api/auth'
interface IRegistration extends NavigationComponentProps {

}
const RegistrationScreen: React.FC<IRegistration> = (props) => {
  const { componentId } = props
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSignup = () => {
    signup$({ name: username, family_name: username, email, password, phone_number: '' })
      .then(res => console.log(res))
      .then(() => Navigation.push(componentId, {
        component: {
          name: SceneNames.LoginScreen
        }
      }))
  }

  return (
    <View style={styles.container}>
      <Text style={[ Typography.font({ size: 40 }), Mixins.marginBottom(20) ] as TextStyle}>Let's sign you up.</Text>
      <Text style={Typography.font({ size: 30 }) as TextStyle}>Welcome back.</Text>
      <Text style={[ Typography.font({ size: 30 }), Mixins.marginBottom(50) ] as TextStyle}>You've been missed!</Text>
      <View style={{ width: '100%', flex: 1 }}>
        <Input placeholder={`name`} placeholderTextColor={`${Colors.WHITE}99`} onChange={setUsername} />
        <Input placeholder={`email`} placeholderTextColor={`${Colors.WHITE}99`} onChange={setEmail} />
        {/* <Input placeholder={`Phone`} placeholderTextColor={`${Colors.WHITE}99`} onChange={setPhoneNumber} /> */}
        <Input placeholder={`Password`} placeholderTextColor={`${Colors.WHITE}99`} onChange={setPassword} />
      </View>
      <View style={[ Mixins.row, Mixins.padding(30, 0), { width: '100%', justifyContent: 'center' } ]}>
        <View style={Mixins.marginRight(10)}>
          <Text style={[ Typography.font({ size: 16, color: `${Colors.WHITE}55` }) ] as TextStyle}>Do you have an accoun already?</Text>
        </View>

        <TouchableOpacity
          onPress={() => Navigation.push(componentId, {
            component: {
              name: SceneNames.LoginScreen
            }
          })}
        >
          <Text style={Typography.font({ size: 16 }) as TextStyle}>Sign In</Text>
        </TouchableOpacity>

      </View>

      <Default title={`Register`} style={{ width: '100%' }} onPress={handleSignup} />
    </View>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
  container: {
    ...Mixins.container,
    ...Mixins.padding(50, 40, 0, 40),
    alignItems: 'flex-start'
  }
})
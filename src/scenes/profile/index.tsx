import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, Switch, TextStyle } from 'react-native'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { useActions, useProps } from '../../hooks'

import { Typography, Colors, Mixins } from '../../styles'

import List from './List'
import { SceneNames } from '../SceneNames'
import { removeUserFromAsyncStorage$ } from '../../utils'
interface IProfileScreen extends NavigationComponentProps {

}

const ProfileScreen: React.FC<IProfileScreen> = (props) => {
  const { componentId } = props
  const [ isEnabled, setIsEnabled ] = useState(true)
  const actions = useActions()
  const selector = useProps()

  const menu = [
    {
      title: 'Personal details',
      sublist: [
        {
          title: 'Preferences',
          description: 'Customize your search preferences to see more of the results you want.',
          onPress: () => { }
        }
      ]
    },
    {
      title: 'Features',
      sublist: [
        {
          title: 'Price Alerts',
          onPress: () => { }
        },
        {
          title: 'Guides',
          onPress: () => { }
        }
      ]
    },
    {
      title: 'Settings',
      sublist: [
        {
          title: 'Notifications',
          onPress: () => { }
        },
        {
          title: 'Region',
          rightContent: <Text style={Typography.font({ size: 20 }) as TextStyle}>United States</Text>,
          onPress: () => { }
        },
        {
          title: 'Currency',
          rightContent: <Text style={Typography.font({ size: 20 }) as TextStyle}>$ (USD)</Text>,
          onPress: () => { }
        },
        {
          title: 'Dark mode',
          rightContent: <Switch
            trackColor={{ false: Colors.GRAY, true: "#81b0ff" }}
            thumbColor={isEnabled ? Colors.SECONDARY : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => { setIsEnabled(!isEnabled) }}
            value={isEnabled}
          />,
          onPress: () => { setIsEnabled(!isEnabled) }
        }
      ]
    },
  ]
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Mixins.container}>
        <View style={styles.welcome}>
          <Image source={require('_assets/images/profile1.png')} />
          <View style={{ ...Mixins.marginLeft(20), flex: 1 }}>
            <Text style={Typography.font({ size: 25, lineHeight: 50, family: Typography.FONT_WALSHRIM_BOLD }) as TextStyle} >Welcome!</Text>

            <Text style={styles.description}>Sign in for member-only deals and access to your Trip details</Text>
            {
              selector.Authentication.user.token ?
                <TouchableOpacity
                  onPress={() => {
                    removeUserFromAsyncStorage$()
                      .then(() => actions.Authentication.removeUser())
                      .catch(err => console.log(err))
                  }}
                >
                  <Text style={Typography.font({ size: 20, color: Colors.SECONDARY }) as TextStyle}>Sign out</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                  onPress={() => Navigation.push(componentId, {
                    component: {
                      name: SceneNames.LoginScreen
                    }
                  })}
                // onPress={() => console.log(selector.Authentication.user.token)}
                >
                  <Text style={Typography.font({ size: 20, color: Colors.SECONDARY }) as TextStyle}>Sign in</Text>
                </TouchableOpacity>
            }
          </View>
        </View>
        {menu.map((item, index) => <List list={item} key={index} />)}

      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  welcome: {
    ...Mixins.row,
    ...Mixins.paddingTop(50),
    ...Mixins.mainWidth,
    ...Mixins.marginBottom(40)
  },
  description: {
    ...Typography.font({ size: 18 }),
    ...Mixins.marginBottom(10)
  } as TextStyle
})
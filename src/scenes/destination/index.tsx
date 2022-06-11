import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Text, TextInput, TextStyle, ViewStyle } from 'react-native'
// import { useDispatch } from "react-redux"
// import Actions from "../../redux/Actions"
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { Mixins, Typography, Colors, Menu } from '../../styles'
import { Header, Icon } from '../../components/common'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'
interface IDestinationScreen extends NavigationComponentProps {

}
const DestinationScreen: React.FC<IDestinationScreen> = (props) => {
  const { componentId } = props
  // const dispatch = useDispatch()
  const markerIcon = require('_assets/images/marker.png')
  const defaultMenu = [
    {
      title: 'Addis Ababa',
      description: 'Addis Ababa , Ethiopia',
    },
    {
      title: 'Bishoftu',
      description: 'Bishoftu , Ethiopia',
    },
    {
      title: 'Mekele',
      description: 'Mekele , Ethiopia',
    },
    {
      title: 'Bahirdar',
      description: 'Bahirdar , Ethiopia',
    },
    {
      title: 'Hawassa',
      description: 'Hawassa , Ethiopia',
    },
    {
      title: 'Arbaminch',
      description: 'Arbaminch , Ethiopia',
    },
    {
      title: 'Bishoftu',
      description: 'Bishoftu , Ethiopia',
    },
  ]
  const [ menu, setMenu ] = useState<{ title: string, description: string }[]>([])

  useEffect(() => {
    setTimeout(() => {
      setMenu(defaultMenu)
    }, 1000)
  }, [])

  const handleChange = _text => {
    // let patt = new RegExp(text, 'gi')
    let _menu = []

    defaultMenu.map(_item => {
      // if (item.title.match(patt) || item.description.match(patt)) _menu.push(item)
    })

    setMenu(_menu)
  }

  const handlePress = _item => {
    // dispatch(Actions.Destination.Select(item))
    Navigation.push(componentId, {
      component: {
        name: SceneNames.CalendarScreen
      }
    })
  }

  return (

    <SafeAreaView style={Mixins.container}>
      <View style={{ flex: 0 }}>
        <Header title={`Where are you going?`} componentId={componentId} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <Icon source={markerIcon} size={23} />

          <View style={{ ...Mixins.paddingLeft(20), width: '100%' }}>
            <Text style={Typography.font({ size: 10, family: Typography.FONT_WALSHRIM_LIGHT }) as TextStyle}>Enter Destination</Text>
            <TextInput style={styles.input} onChangeText={text => handleChange(text)}></TextInput>
          </View>
        </View>
        {!menu || menu.length < 1 &&
          <SkeletonPlaceholder highlightColor={'#999'} speed={1000}>
            {defaultMenu.map((_menu, i) => (
              <SkeletonPlaceholder.Item key={i} flexDirection="row" alignItems="center" marginLeft={20} marginBottom={40}>
                <SkeletonPlaceholder.Item width={20} height={20} borderRadius={50} />
                <SkeletonPlaceholder.Item marginLeft={10}>
                  <SkeletonPlaceholder.Item width={300} height={15} borderRadius={4} marginBottom={5} marginLeft={3} />
                  <SkeletonPlaceholder.Item width={300} height={10} borderRadius={4} />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>
            ))}
          </SkeletonPlaceholder>
        }
        <View style={Menu.menu}>
          {menu && menu.map((item, i) => (
            <React.Fragment key={i}>
              <TouchableOpacity key={i} onPress={() => handlePress(item)}>
                <View style={styles.menuItem} >
                  <Icon source={markerIcon} size={13} style={Mixins.margin(0, 10, 0, -8)} />
                  <View>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={Typography.font({ size: 8, family: Typography.FONT_WALSHRIM_LIGHT }) as TextStyle}>{item?.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DestinationScreen

const styles = StyleSheet.create({
  menuItem: {
    ...Mixins.row,
    ...Mixins.marginLeft(28),
    ...Menu.menuItem
  },
  title: {
    ...Typography.font({ size: 10, family: Typography.FONT_WALSHRIM_BOLD }),
    ...Mixins.paddingLeft(5)
  } as ViewStyle,
  inputContainer: {
    ...Mixins.mainWidth,
    ...Mixins.row,
    ...Mixins.marginBottom(34),
    ...Mixins.padding(10, 16),
    ...Mixins.border(1, Colors.SECONDARY)
  },
  input: {
    ...Typography.font({ size: 20 }),
    ...Mixins.padding(0),
    ...Mixins.paddingRight(15),
  } as ViewStyle
})
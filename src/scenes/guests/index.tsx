import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Dimensions, StyleSheet, View, TouchableOpacity, Text, TextStyle } from 'react-native'
// import { useSelector, useDispatch } from 'react-redux'
// import Actions from "../../redux/Actions"
import { Mixins, Typography, Menu } from '../../styles'
import { Default } from '../../components/buttons'
import { Header } from '../../components/common'
import MenuItem from './MenuItem'
import { useProps } from '../../hooks'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'

const { width } = Dimensions.get("window")

interface IGuestsScreen extends NavigationComponentProps {

}
const GuestsScreen: React.FC<IGuestsScreen> = (props) => {
  const { componentId } = props
  // const dispatch = useDispatch()
  // const app = useSelector(state => state?.app)
  const { searchDetail } = useProps()

  const [ list, _setList ] = useState(searchDetail.rooms)

  const handleChange = (_item, _i) => {
    // setList(prev => {
    //   prev[ i ] = item
    //   return [...prev]
    // })
  }

  const handleAddNew = () => {
    // setList(prev => {
    //   prev.push({ title: `Room ${prev.length + 1}`, adults: 1, children: 0, id: prev[ prev.length - 1 ].id + 1 })
    //   return [ ...prev ]
    // })
  }

  const handleDone = () => {
    // dispatch(Actions.Rooms.Save(list))
    setTimeout(() => {
      Navigation.pop(componentId)
    }, 200)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ ...Mixins.container, flex: 0 }}>
        <Header title={`Guests`} componentId={componentId} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={Mixins.container}>
          <View style={Menu.menu}>
            {list.map((item, i) => (
              <MenuItem key={i} item={item} onChange={value => handleChange(value, i)} />
            ))}

            <TouchableOpacity onPress={handleAddNew} style={styles.addNew}>
              <Text style={Typography.font({ size: 12 }) as TextStyle}>Add another room</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Default title={`Done`} onPress={handleDone} />
      </View>
    </SafeAreaView>
  )
}

export default GuestsScreen

const styles = StyleSheet.create({
  addNew: {
    ...Mixins.marginTop(22),
    alignSelf: 'flex-end'
  },
  footer: {
    width: width,
    alignItems: 'center',
    ...Mixins.paddingTop(10),
    ...Mixins.container,
    flex: 0,
  }
})
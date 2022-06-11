import React from 'react'
import { ScrollView, View } from 'react-native'
import { Mixins } from '../../styles'
import { Default } from '../../components/buttons'
import { Header } from '../../components/common'
import Booking from './Booking'
import GuestDetail from './GuestDetail'
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'
interface IGuestDetailsScreen extends NavigationComponentProps {

}
const GuestDetailsScreen: React.FC<IGuestDetailsScreen> = (props) => {
  const { componentId } = props
  return (
    <View style={Mixins.container}>
      <Header title={`Guest Details`} componentId={componentId} />

      <ScrollView showsVerticalScrollIndicator={false} style={Mixins.mainWidth}>
        <Booking />
        <GuestDetail />

        <View style={Mixins.marginTop(30)}>
          <Default title={`Proceed to Checkout`}
            onPress={() => Navigation.push(componentId, {
              component: {
                name: SceneNames.CheckoutScreen
              }
            })} />
        </View>
      </ScrollView>
    </View>
  )
}

export default GuestDetailsScreen
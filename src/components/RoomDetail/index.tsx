import React from 'react'
import { ImageStyle } from 'react-native'
import { Dimensions, TouchableOpacity, StyleSheet, View, Text, ImageBackground, TextStyle } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { SceneNames } from '../../scenes/SceneNames'
import { Typography, Mixins, Colors } from '../../styles'
import { Default } from '../buttons'
import { Header, Icon } from '../common'
import Rating from '../Rating'

const { width } = Dimensions.get("window")
interface IRoomDetail {
  /**
   * this prop is required for react native navigation
   *
   * @type {string}
   * @memberof IGoBack
   */
  componentId: string,

  data: any,
  onPress(): void,
  isRoom?: boolean
}

const RoomDetail: React.FC<IRoomDetail> = (props) => {
  const { data, onPress, isRoom, componentId } = props

  let count = isRoom ? 8 : 6
  const items: string[] = []
  for (let i = 0; i < count; i++) {
    items.push('Wifi')
  }

  const headerTitle = <TouchableOpacity>
    <Icon source={require('_assets/images/hearts.png')} size={34} />
  </TouchableOpacity>

  return (
    <>
      <TouchableOpacity onPress={() => Navigation.push(componentId, {
        component: {
          name: SceneNames.RoomViewScreen,
          options: {
            animations: {
              push: {
                sharedElementTransitions: [
                  {
                    fromId: 'sourceID',
                    toId: 'destinationID'
                  }
                ]
              }
            }
          }
        }
      })}>
        <ImageBackground source={data?.background} style={styles.background} imageStyle={styles.imageStyle} nativeID="sourceID">
          <Header
            color={Colors.WHITE}
            title={headerTitle}
            componentId={componentId}
          />
        </ImageBackground>
      </TouchableOpacity>

      <View style={isRoom ? styles.mainRoom : styles.main}>
        <View>
          <View style={styles.titleBar}>
            <Text style={Typography.font({ size: 29, family: Typography.FONT_GOTHAM_BLACK }) as TextStyle}>
              {data?.name}
            </Text>

            {data?.showMap &&
              <TouchableOpacity onPress={() => Navigation.push(componentId, {
                component: {
                  name: SceneNames.HotelNearByScreen
                }
              })} style={styles.map}>
                <Icon source={require('_assets/images/ios_map.png')} size={30} color={Colors.SECONDARY} />
              </TouchableOpacity>
            }
          </View>

          <Rating score={data?.rating?.score} reviews={data?.rating?.reviews} />

          <View style={Mixins.margin(30, 0, 15)}>
            <Text style={Typography.font({ size: 10, lineHeight: 12, family: Typography.FONT_GOTHAM_LIGHT_ITALIC }) as TextStyle}>
              {data?.description}
            </Text>
          </View>
          {isRoom &&
            <View style={Mixins.margin(10, 0, 20)}>
              <Text style={Typography.font({ size: 10, family: Typography.FONT_GOTHAM_XLIGHT }) as TextStyle}>Complementary Services</Text>
            </View>
          }
          <View style={styles.amenities}>
            {items.map((item, i) => (
              <View style={isRoom ? styles.amenitiesContainerLabelRoom : styles.amenitiesContainerLabel} key={i}>
                <View style={styles.iconContainer}>
                  <Icon source={require('_assets/images/relax.png')} size={17} color={Colors.SECONDARY} />
                </View>
                <Text style={Typography.font({ size: 10, family: Typography.FONT_GOTHAM_XLIGHT }) as TextStyle}>{item}</Text>
              </View>
            ))}
            <View style={{ width: '100%' }}>
              <TouchableOpacity onPress={() => Navigation.push(componentId, {
                component: {
                  name: SceneNames.AmenitiesScreen
                }
              })}>
                <Text style={styles.viewAll}>All amenities</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Default onPress={onPress}>
            {data?.buttonText}
          </Default>
        </View>
      </View >
    </>
  )
}

export default RoomDetail

const styles = StyleSheet.create({
  background: {
    width,
    height: 434,
    alignItems: "center",
  },
  main: {
    ...Mixins.container,
    ...Mixins.position({ bottom: 0 }),
    ...Mixins.padding(50, 25, 0, 25),
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  mainRoom: {
    ...Mixins.container,
    ...Mixins.position({ bottom: 0 }),
    ...Mixins.padding(50, 25, 0, 25),
  },
  titleBar: {
    ...Mixins.row,
    ...Mixins.marginBottom(10),
    justifyContent: 'space-between',
  },
  map: {
    ...Mixins.border(1, Colors.SECONDARY, 5),
  },
  amenities: {
    ...Mixins.row,
    ...Mixins.marginBottom(32),
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  amenitiesContainerLabel: {
    alignItems: 'center'
  },
  amenitiesContainerLabelRoom: {
    flexDirection: 'row',
    alignItems: 'center',
    ...Mixins.marginBottom(10)
  },
  iconContainer: {
    ...Mixins.border(1, Colors.SECONDARY, 50),
    ...Mixins.padding(10),
    ...Mixins.margin(0, 10, 5)
  },
  viewAll: {
    ...Typography.font({ size: 14, color: Colors.SECONDARY }),
    ...Mixins.marginTop(3),
    textAlign: 'right'
  } as TextStyle,
  imageStyle: {

  } as ImageStyle
})
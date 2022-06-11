import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, TextStyle } from 'react-native'
import { Typography, Colors, Mixins } from '../../styles'
import { Icon } from '../../components/common'

const chevronRightIcon = require('_assets/images/chevron_right.png')

const List = ({ list }) => (
  <View style={Mixins.mainWidth}>
    <Text style={Typography.font({ size: 25 }) as TextStyle}>{list?.title}</Text>

    <View style={styles.container}>
      {list.sublist.map((item, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity onPress={item?.onPress}>
            <View style={Mixins.row}>
              <View style={{ flex: 1 }}>
                <Text style={Typography.font({ size: 20 }) as TextStyle}>{item?.title}</Text>
                {item?.description &&
                  <Text style={styles.description}>{item.description}</Text>
                }
              </View>
              {item.rightContent
                ? item.rightContent
                : <View style={{ width: 40, alignItems: 'flex-end' }}>
                  <Icon source={chevronRightIcon} size={20} color={Colors.GRAY} />
                </View>
              }
            </View>
          </TouchableOpacity>
          {list.sublist[ index + 1 ] &&
            <View style={styles.divider}></View>
          }
        </React.Fragment>
      ))}
    </View>
  </View>
)

export default List

const styles = StyleSheet.create({
  container: {
    ...Mixins.border(1, Colors.GRAY),
    ...Mixins.padding(15),
    ...Mixins.margin(15, 0, 50)
  },
  description: {
    ...Typography.font({ size: 15, color: Colors.GRAY, family: Typography.FONT_WALSHRIM_REGULAR }),
    ...Mixins.marginTop(5)
  } as TextStyle,
  divider: {
    height: 1,
    backgroundColor: Colors.GRAY,
    ...Mixins.margin(15, 0)
  }
})
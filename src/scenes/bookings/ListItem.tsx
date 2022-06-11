import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native'

import { Typography, Colors, Mixins } from '../../styles'

const statusStyle = {
  width: 100,
  alignItems: 'center',
  ...Mixins.border(1, Colors.SUCCESS, 20),
  ...Mixins.padding(5, 15),
} as ViewStyle

const stautusTextStyle = {
  textTransform: 'uppercase',
  ...Typography.font({ size: 13, color: Colors.SUCCESS })
} as TextStyle

const ListItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.titleBar}>
      <Text style={Typography.font({ size: 17 }) as TextStyle}>{item?.title}</Text>
    </View>

    <View style={{ ...Mixins.row, ...Mixins.marginBottom(10) }}>
      {item?.time && item.time.map((time, i) => (
        <View style={Mixins.marginRight(15)} key={i}>
          <View style={styles.timeTitle}>
            <Text style={{ ...styles.contentTitle, ...Mixins.marginRight(10) }}>{time.title}</Text>
            <View style={styles.checkEmpty}></View>
          </View>
          <Text style={[ styles.description, { textAlign: "right" } ]}>{time.time}</Text>
        </View>
      ))}
    </View>

    <View style={{ ...Mixins.row, ...Mixins.marginBottom(20) }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.contentTitle}>Booking Date</Text>
        <Text style={Typography.font({ size: 10, color: Colors.GRAY }) as TextStyle}>Monday, Jan 12 , 2021</Text>
      </View>
      <View style={item.status === 'booked' ? statusStyle : styles.canceled}>
        <Text style={item.status === 'booked' ? stautusTextStyle : styles.canceledText}>{item.status}</Text>
      </View>
    </View>

    <View style={Mixins.row}>
      <View style={{ ...Mixins.row, flex: 1 }}>
        <View>
          <Text style={styles.contentTitle}>Total Price</Text>
          <Text style={styles.description}>{item?.balence?.bank}$</Text>
        </View>
      </View>

      <View>
        <Text style={styles.contentTitle}>Payment Method</Text>
        <Text style={{ ...styles.description, color: Colors.SECONDARY, textAlign: "right" }}>Visa</Text>
      </View>
    </View>
  </TouchableOpacity>
)

export default ListItem

const styles = StyleSheet.create({
  container: {
    width: Mixins.WINDOW_WIDTH - 70,
    backgroundColor: '#09456E',
    ...Mixins.border(1, '#1A6DA6'),
    ...Mixins.padding(10),
    ...Mixins.marginBottom(20)
  },
  titleBar: {
    ...Mixins.row,
    ...Mixins.marginBottom(10),
    justifyContent: 'space-between'
  },
  timeTitle: {
    ...Mixins.row
  },
  canceled: {
    ...statusStyle,
    borderColor: Colors.ALERT
  },
  canceledText: {
    ...stautusTextStyle,
    color: Colors.ALERT
  },
  contentTitle: {
    ...Typography.font({ size: 12 }),
    ...Mixins.marginBottom(5)
  } as TextStyle,
  description: {
    ...Typography.font({ size: 15, color: Colors.GRAY })
  } as TextStyle,
  checkEmpty: {
    width: 10,
    height: 10,
    backgroundColor: Colors.GRAY,
    borderRadius: 2,
    ...Mixins.marginBottom(5)
  }
})
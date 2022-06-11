import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image, TextStyle } from 'react-native'
import { Colors, Mixins, Typography } from '../../styles'

const Payment = (props) => {
  const { id, title, description, image } = props.item
  const containerStyle = {
    ...styles.container,
    backgroundColor: props.selected === id ? Colors.WHITE : `${Colors.WHITE}A8`,
  }

  return (
    <TouchableOpacity onPress={() => props.onPress(id)}>
      <View style={containerStyle}>
        <View style={styles.titlebar}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Payment

const styles = StyleSheet.create({
  container: {
    ...Mixins.marginBottom(20),
    ...Mixins.padding(50, 20, 10, 10),
    borderRadius: 15
  },
  titlebar: {
    ...Mixins.row,
    alignItems: 'center',
    ...Mixins.marginBottom(20)
  },
  imageContainer: {
    width: 100,
    alignItems: 'center',
    ...Mixins.marginRight(10)
  },
  title: {
    ...Typography.font({ size: 30, color: Colors.PRIMARY, family: Typography.FONT_GOTHAM_MEDIUM }),
    ...Mixins.marginBottom(10)
  } as TextStyle,
  description: {
    ...Typography.font({ size: 9, color: Colors.PRIMARY, family: Typography.FONT_GOTHAM_LIGHT }),
    ...Mixins.marginLeft(60)
  } as TextStyle,
  image: {

  }
})
import React from 'react'
import { View, Text, TextStyle, ViewStyle } from 'react-native'
import { Typography, Colors, Mixins } from '../../styles'
import { Icon } from '../../components/common'
interface ITextItem {
  icon?: any,
  title?: string,
  description?: string | string[],
  style?: ViewStyle
}
const TextItem: React.FC<ITextItem> = (props) => {
  const { description, icon, style, title } = props

  const source = icon?.source ?? icon
  const size = icon?.size ?? description ? 20 : 16
  const color = icon?.color ?? Colors.WHITE
  const titleStyle = { size: 20 }
  const descriptionStyle = { size: 16, family: Typography.FONT_WALSHRIM_LIGHT }

  return (
    <React.Fragment>
      <View style={[ Mixins.row, Mixins.margin(5, 0), style ]}>
        {source &&
          <Icon source={source} size={size} color={color} />
        }
        <Text style={[ Mixins.marginLeft(10), Typography.font(description ? titleStyle : descriptionStyle) ] as TextStyle}>{title}</Text>
      </View>
      {description && typeof description === 'string' &&
        <Text>{description}</Text>
      }
      {description && typeof description !== 'string' &&
        <View style={Mixins.marginLeft(30)}>
          {description.map((text, i) => (
            <Text key={i} style={[ Typography.font(descriptionStyle), Mixins.margin(3, 0) ]}>{text}</Text>
          ))}
        </View>
      }
    </React.Fragment>
  )
}

export default TextItem

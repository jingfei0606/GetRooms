import React, { useState } from 'react'
import { StyleSheet, View, Text, Switch, TextStyle } from 'react-native'
import { Typography, Mixins, Colors } from '../../styles'

import { Input } from '../../components/form'

const GuestDetail = () => {
  const fields = [
    { label: 'First Name', key: 'first_name', required: true, type: 'name', error: true },
    { label: 'Middle Name', key: 'middle_name', type: 'middleName' },
    { label: 'Last Name', key: 'last_name', type: 'name' },
    { label: 'Phone', key: 'phone', type: 'telephoneNumber' },
    { label: 'Email', key: 'email', type: 'emailAddress' },
    { label: 'Do you want shuttle?', key: 'shuttle', type: 'boolean' },
    { label: 'PickUp Time', key: 'pickup_time', type: 'name' },
  ]

  const [ data, setData ] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    phone: '',
    email: '',
    shuttle: false,
    pickup_time: ''
  })

  const handleChange = (field, val) => {
    setData(prev => ({ ...prev, [ field ]: val }))
  }

  return (
    <View>
      <Text style={styles.title}>Guest Details</Text>
      <Text style={styles.mainGuest}>Main Guest</Text>

      <View>
        {fields.map(field =>
          field?.type === 'boolean'
            ?
            <View key={field.key} style={[ Mixins.row, Mixins.margin(10, 0), { justifyContent: 'space-between' } ]}>
              <Text style={Typography.font({ size: 14, family: Typography.FONT_WALSHRIM_LIGHT }) as TextStyle}>{field.label}</Text>
              <Switch
                trackColor={{ false: Colors.GRAY, true: "#81b0ff" }}
                thumbColor={data[ field.key ] ? Colors.SECONDARY : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={val => handleChange(field.key, val)}
                value={data[ field.key ]}
              />
            </View>
            : <Input
              key={field.key}
              label={field.label}
              value={data[ field.key ]}
              onChange={val => handleChange(field.key, val)}
              required={field?.required}
              type={field.type}
              error={field?.error}

            />
        )}
      </View>
    </View>
  )
}

export default GuestDetail

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    ...Typography.font({ size: 24, family: Typography.FONT_WALSHRIM_BOLD }),
    ...Mixins.marginBottom(10)
  } as TextStyle,
  mainGuest: {
    textAlign: 'right',
    ...Typography.font({ size: 10, family: Typography.FONT_GOTHAM_LIGHT })
  } as TextStyle
})
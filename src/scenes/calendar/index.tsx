import React, { useState } from 'react'
import { TouchableOpacity, View, Text, TextStyle } from 'react-native'
// import { useDispatch, useSelector } from "react-redux"
// import moment from 'moment'
// import Actions from "../../redux/Actions"
import { Navigation, NavigationComponentProps } from 'react-native-navigation'
import { SceneNames } from '../SceneNames'

import Calendar from "react-native-calendar-range-picker"
import { Header } from '../../components/common'
import { Colors, Typography } from '../../styles'
import { useProps } from '../../hooks'

interface ICalendarScreen extends NavigationComponentProps {

}
const CalendarScreen: React.FC<ICalendarScreen> = (props) => {
  const { componentId } = props
  // const dispatch = useDispatch()
  // const app = useSelector(state => state?.app)
  const { searchDetail } = useProps()

  const [ date, setDate ] = useState({ ...searchDetail.bookDates })

  const handleDone = () => {
    // let nightsCount = calculateNights()
    // dispatch(Actions.BookDates.Select({ ...date, nightsCount }))
    setTimeout(() => {
      Navigation.push(componentId, {
        component: {
          name: SceneNames.AppNavigator
        }
      })
    }, 200)
  }

  // const calculateNights = () => {
  //   let startDate = moment(date.startDate)
  //   let endDate = moment(date.endDate)
  //   let nights = endDate.diff(startDate, 'days')
  //   return nights
  // }

  const Title = (
    <View>
      <TouchableOpacity onPress={handleDone}>
        <Text style={Typography.font({ size: 16 }) as TextStyle}>Done</Text>
      </TouchableOpacity>
    </View>
  )
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', backgroundColor: Colors.PRIMARY }}>
        <Header title={Title} componentId={componentId} />
      </View>

      <Calendar
        startDate={date?.startDate}
        endDate={date?.endDate}
        onChange={date => setDate(date)}
        disabledBeforeToday
        pastYearRange={0}
        style={{
          selectedBetweenDayBackgroundTextColor: '#83BC44'
        }}
      />
    </View>
  )
}

export default CalendarScreen

// const styles = StyleSheet.create({
// })
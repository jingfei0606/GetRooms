import { createModel } from '@rematch/core'
import moment from 'moment'
import type { RootModel } from './index'

interface IDestination {
  title: string,
  description: string
}

interface IBookDates {
  startDate: string,
  endDate: string,
  nightsCount: number
}

interface IRoom {
  id: number,
  title: string,
  adults: number,
  children: number
}

interface ISearchDetail {
  destination: IDestination,
  bookDates: IBookDates,
  rooms: IRoom[]
}

export const searchDetail = createModel<RootModel>()({
  state: {
    destination: {
      title: 'Addis Ababa',
      description: 'Addis Ababa , Ethiopia',
    },
    bookDates: {
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().add(2, 'days').format('YYYY-MM-DD'),
      nightsCount: 1
    },
    rooms: [
      {
        id: 1,
        title: 'Room 1',
        adults: 1,
        children: 0,
      }
    ]
  } as ISearchDetail,

  reducers: {

  },
})
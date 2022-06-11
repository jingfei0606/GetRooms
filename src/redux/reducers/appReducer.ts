// import { createReducer } from "@reduxjs/toolkit"
// import moment from 'moment'
// import Actions from "../Actions"

// /**
//  * Application state
//  * @type {ApplicationState}
//  */
// const InitialState = {
//   destination: {
//     title: 'Addis Ababa',
//     description: 'Addis Ababa , Ethiopia',
//   },
//   bookDates: {
//     startDate: moment().format('YYYY-MM-DD'),
//     endDate: moment().add(2, 'days').format('YYYY-MM-DD'),
//     nightsCount: 1
//   },
//   rooms: [
//     {
//       id: 1,
//       title: 'Room 1',
//       adults: 1,
//       children: 0,
//     }
//   ]
// }

// export default createReducer(InitialState, builder => {
//   builder
//     .addCase(Actions.Destination.Select, (state, { payload }) => ({ ...state, destination: payload }))
//     .addCase(Actions.Rooms.Add, (state, { payload }) => {
//       let rooms = state.rooms
//       rooms.push(payload)
//       return { ...state, rooms }
//     })
//     .addCase(Actions.Rooms.Save, (state, { payload }) => ({ ...state, rooms: payload }))
//     .addCase(Actions.BookDates.Select, (state, { payload }) => ({ ...state, bookDates: payload }))
// })

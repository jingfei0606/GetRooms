import { API_HOTEL_RESERVATION } from '../constants'

export function updateReservation$(id: string) {
  return API_HOTEL_RESERVATION.put(`reservation/${id}`)
}
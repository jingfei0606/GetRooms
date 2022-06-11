import { API_HOTEL_RESERVATION } from '../constants'

export function getIdReservation$(id: string) {
  return API_HOTEL_RESERVATION.get(`/reservation/${id}`)
}
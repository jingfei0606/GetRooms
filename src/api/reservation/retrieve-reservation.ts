import { API_HOTEL_RESERVATION } from '../constants'

export function retrieveReservation$(id: string) {
  return API_HOTEL_RESERVATION.get(`/reservation/retrieve/${id}`)
}
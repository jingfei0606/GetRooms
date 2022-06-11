import { API_HOTEL_RESERVATION } from '../constants'

export function searchReservation$(key: string) {
  return API_HOTEL_RESERVATION.get(`/reservation/search?key=${key}`)
}
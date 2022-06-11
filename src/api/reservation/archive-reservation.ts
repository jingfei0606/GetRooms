import { API_HOTEL_RESERVATION } from '../constants'

export function archiveReservation$(id: string) {
  return API_HOTEL_RESERVATION.delete(`/reservation/${id}`)
}
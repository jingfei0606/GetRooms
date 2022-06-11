import { API_HOTEL_RESERVATION } from '../constants'

export function paginateReservation$() {
  return API_HOTEL_RESERVATION.get('/reservation/paginate')
}
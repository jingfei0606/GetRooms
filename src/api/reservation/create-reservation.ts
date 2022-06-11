import { API_HOTEL_RESERVATION } from '../constants'
import { getResponseData } from '../get-data'

export interface IGuest {
  "firstName": string,
  "middleName": string,
  "lastName": string,
  "guestAddress": string,
  "guestBirthdate": string,
  "guestPhonenumber": string,
  "guestEmail": string,
  "guestIDNumber": string,
  "guestIDType": string
}

interface ICreateReservationRequest {
  "roomType": string,
  "checkIN": string,
  "checkOUT": string,
  "price": number,
  "expiryDate": string,
  "expiryTime": string,
  "guests": Array<IGuest>
}

export function createReservation$(params: ICreateReservationRequest) {
  return API_HOTEL_RESERVATION.post('/reservation/create', params)
    .then(getResponseData)
}
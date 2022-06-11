import { API_HOTEL_RESERVATION } from '../constants'
import { getResponseData } from '../get-data'
// import { IGuest } from './create-reservation'

interface IReserveReservationRequest {
  "roomType": string,
  "numberOfRooms": number,
  "checkIN": string,
  "checkOUT": string,
  "expiryDate": string,
  "expiryTime": string,
  "guests": [
    {
      "0": [
        {
          "firstName": "Samantha",
          "middleName": "Mata",
          "lastName": "Ttewat",
          "guestAddress": "Ethiopia",
          "guestBirthdate": "1994-04-14",
          "guestPhonenumber": "",
          "guestEmail": "eyuel@eaglelionsystems.com",
          "guestIDNumber": "ETH123142",
          "guestIDType": "GEBERE-MAHBER"
        }
      ]
    },
    {
      "1": [
        {
          "firstName": "First",
          "middleName": "Bolick",
          "lastName": "Gottschalk",
          "guestAddress": "Netherlands",
          "guestBirthdate": "1990-01-10",
          "guestPhonenumber": "",
          "guestEmail": "eyuel@eaglelionsystems.com",
          "guestIDNumber": "NTH231242",
          "guestIDType": "PASSPORT"
        },
        {
          "firstName": "Second",
          "middleName": "Bolick",
          "lastName": "Gottschalk",
          "guestAddress": "Netherlands",
          "guestBirthdate": "1990-01-10",
          "guestPhonenumber": "",
          "guestEmail": "eyuel@eaglelionsystems.com",
          "guestIDNumber": "NTH231243",
          "guestIDType": "PASSPORT"
        }
      ]
    }
  ]
}

export function reserveReservation$(params: IReserveReservationRequest) {
  return API_HOTEL_RESERVATION.post('/reservation/reserve', params)
    .then(getResponseData)
}
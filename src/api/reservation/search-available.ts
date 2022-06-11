import { ISearchResult } from '../types'
import { API_HOTEL_RESERVATION } from '../constants'
import { getResponseData } from '../get-data'
export function getSerachResult$(param: { checkIN: string, checkOUT: string, rooms: [], location: { longitude: number, latitude: number } }) {
  return API_HOTEL_RESERVATION.post<ISearchResult>('/reservation/searchavail', param)
    .then(getResponseData)
    .catch(err => console.log(err))
}

import { API_AUTH_GUEST } from '../constants'
import { ISignup } from '../types'
import { getResponseData } from '../get-data'

export function signup$(params: { name: string, family_name: string, email: string, password: string, phone_number: string }) {
  return API_AUTH_GUEST.post<ISignup>('/auth/signup', params)
    .then(getResponseData)
}
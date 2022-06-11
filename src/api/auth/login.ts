import { API_AUTH_GUEST } from '../constants'
import { ILogin } from '../types'
import { getResponseData } from '../get-data'

export function login$(username: string, password: string) {
  return API_AUTH_GUEST.post<ILogin>('/auth/login', { username, password })
    .then(getResponseData)
}
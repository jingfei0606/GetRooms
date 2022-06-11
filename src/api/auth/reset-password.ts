import { API_AUTH_GUEST } from '../constants'

export function resetPassword$(username: string) {
  return API_AUTH_GUEST.post('/auth/forgotpassword', { username })
}
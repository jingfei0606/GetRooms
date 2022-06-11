import { API_AUTH_GUEST } from '../constants'

export function changePassword$(username: string, password: string, newpassword: string) {
  return API_AUTH_GUEST.post('/auth/changepassword', { username, password, newpassword })
}
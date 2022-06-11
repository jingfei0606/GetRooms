import { API_AUTH_GUEST } from '../constants'

export function comfirmNewPassword$(username: string, verificationCode: string, newPassword: string) {
  return API_AUTH_GUEST.post('/auth/confirmpassword', { username, verificationCode, newPassword })
}
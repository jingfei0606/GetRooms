import { createModel } from '@rematch/core'
import type { RootModel } from './index'
import { getUserFromAsyncStorage$ } from '../../utils'
interface IUser {
  firstName: string,
  lastName: string,
  email: string,
  token: string
}

export const Authentication = createModel<RootModel>()({
  state: {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      token: ''
    } as IUser
  },
  reducers: {
    setUser(state, payload: IUser) {
      return {
        ...state,
        user: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          token: payload.token
        }
      }
    },
    removeUser(state) {
      return {
        ...state,
        user: {
          firstName: '',
          lastName: '',
          email: '',
          token: ''
        }
      }
    }
  },
  effects: dispatch => ({
    setAuthUser() {
      getUserFromAsyncStorage$()
        .then(user => {
          if (user) {
            dispatch.Authentication.setUser(user)
          }
        })
        .catch(err => console.log(err))
    }
  })
})
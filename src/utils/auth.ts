import AsyncStorage from '@react-native-async-storage/async-storage'

interface IUser {
  firstName: string,
  lastName: string,
  email: string,
  token: string
}
/**
 * EXCEPTION HANDLING IS MISSED
 */
export async function setUserToAsyncStorage$(auth: IUser) {
  return await AsyncStorage.setItem('@auth', JSON.stringify(auth))
}

export async function getUserFromAsyncStorage$() {
  const user = await AsyncStorage.getItem('@auth')
  if (user) {
    return JSON.parse(user) as IUser
  }
}

export async function removeUserFromAsyncStorage$() {
  return await AsyncStorage.removeItem('@auth')
}
import { Auth } from 'aws-amplify'
import { } from 'amazon-cognito-identity-js'
export async function signUp(username: string, password: string, email: string) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,          // optional
        // phone_number,   // optional - E.164 number convention
        // other custom attributes 
      }
    })
    console.log(user)
  } catch (error) {
    console.log('error signing up:', error.message)
  }
}

export async function confirmSignUp(username: string, code: string) {
  try {
    await Auth.confirmSignUp(username, code)
  } catch (error) {
    console.log('error confirming sign up', error)
  }
}

export async function signIn(username: string, password: string) {
  try {
    const user = await Auth.signIn(username, password)
    return user
  } catch (error) {
    console.log('error signing in', error)
  }
}

export async function checkUser() {
  try {
    return await Auth.currentAuthenticatedUser()
    // return user
    // console.log("user: ", user)
  } catch (error) {
    throw error
  }
}

export async function resendConfirmationCode(username: string) {
  try {
    await Auth.resendSignUp(username)
    console.log('code resent successfully')
  } catch (err) {
    console.log('error resending code: ', err)
  }
}

export async function signOut() {
  try {
    await Auth.signOut()
  } catch (error) {
    console.log('error signing out: ', error)
  }
}
export interface ILogin {
  "_id": string,
  "firstName": string,
  "lastName": string,
  "phoneNumber": string,
  "email": string,
  "userName": string,
  "idToken": string,
  "realm": string,
  "organizationName": string,
  "lastModified": string,
  "notifyByEmail": boolean,
  "notifyBySMS": boolean
}

export interface ISignup {
  "_id": string,
  "firstName": string,
  "lastName": string,
  "phoneNumber": string,
  "email": string,
  "userName": string,
  "permissions": Array<string>,
  "enabled": boolean,
  "dateJoined": string
}
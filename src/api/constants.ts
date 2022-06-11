import axios from 'axios'

export const API_HOTEL_RESERVATION = axios.create({
  baseURL: 'http://34.248.21.221:15263'
})

export const API_AUTH_GUEST = axios.create({
  baseURL: 'http://34.248.21.221:15267'
})
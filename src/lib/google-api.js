import axios from 'axios'

const CIVIC_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const GEOCODE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const CIVIC_API_ROOT = 'https://www.googleapis.com/civicinfo/v2'
const GEOCODE_API_ROOT = 'https://maps.googleapis.com/maps/api/geocode/json'

const CIVIC_API_PARAMS = { key: CIVIC_API_KEY }
const GEOCODE_API_PARAMS = { key: GEOCODE_API_KEY }
const API = {}

const client = axios.create({})

// Used during development
// client.interceptors.request.use(request => {
//   console.log('Starting Request', request)
//   return request
// })

// client.interceptors.response.use(response => {
//   console.log('Response:', response)
//   return response
// })

API.getCity = async (latitude, longitude) => {
  return client.get(GEOCODE_API_ROOT, {
    params: {
      ...GEOCODE_API_PARAMS,
      latlng: `${latitude}, ${longitude}`
    }
  })
}

API.representatives = async (options) => {
  return client.get(`${CIVIC_API_ROOT}/representatives`, {
    params: {
      ...CIVIC_API_PARAMS,
      ...options
    }
  })
}

API.voterInfo = async (options) => {
  return client.get(`${CIVIC_API_ROOT}/voterinfo`, {
    params: {
      ...CIVIC_API_PARAMS,
      ...options
    }
  })
}

export default API

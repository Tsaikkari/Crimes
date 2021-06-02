export const getManchesterCrimesRequest = () => {
  return {
    type: 'GET_MANCHESTER_CRIMES_REQUEST',
  }
}

export const getManchesterCrimesSuccess = (manchesterCrimes) => {
  return {
    type: 'GET_MANCHESTER_CRIMES_SUCCESS', 
    payload: manchesterCrimes
  }
}

export const getManchesterCrimesFail = (error) => {
  return {
    type: 'GET_MANCHESTER_CRIMES_FAIL', 
    payload: error,
  }
}

export const getMacclesfieldCrimesRequest = () => {
  return {
    type: 'GET_MACCLESFIELD_CRIMES_REQUEST',
  }
}

export const getMacclesfieldCrimesSuccess = (macclesfieldCrimes) => {
  return {
    type: 'GET_MACCLESFIELD_CRIMES_SUCCESS', 
    payload: macclesfieldCrimes,
  }
}

export const getMacclesfieldCrimesFail = (error) => {
  return {
    type: 'GET_MACCLESFIELD_CRIMES_FAIL', 
    payload: error,
  }
}


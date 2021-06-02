const initState = {
  manchesterCrimes: [],
  macclesfieldCrimes: [],
  loading: false,
  error: false,
}

export const crimes = (state = initState, action) => {
  switch (action.type) {
    case 'GET_MANCHESTER_CRIMES_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'GET_MANCHESTER_CRIMES_SUCCESS':
      return {
        ...state,
        manchesterCrimes: action.payload,
        loading: false,
      }
    case 'GET_MANCHESTER_CRIMES_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case 'GET_MACCLESFIELD_CRIMES_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'GET_MACCLESFIELD_CRIMES_SUCCESS':
      return {
        ...state,
        macclesfieldCrimes: action.payload,
      }
    case 'GET_MACCLESFIELD_CRIMES_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default crimes

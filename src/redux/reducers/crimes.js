export const crimes = (
  state = {},
  action
) => {
  switch (action.type) {
    case "GET_MANCHESTER_CRIMES_SUCCESS":
      return {
        ...state,
        manchesterCrimes: action.payload,
      }
    case "GET_MACCLESFIELD_CRIMES_SUCCESS":
      return {
        ...state, 
        macclesfieldCrimes: action.payload
      }
    default:
      return state
  }
}

export default crimes
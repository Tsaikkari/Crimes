const initState = {
  manchesterTeam: [],
  macclesfieldTeam: [],
  loading: false,
  error: false,
}

export const teams = (state = initState, action) => {
  switch (action.type) {
    case 'GET_MANCHESTER_TEAM_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'GET_MANCHESTER_TEAM_SUCCESS':
      return {
        ...state,
        manchesterTeam: action.payload,
        loading: false,
      }
    case 'GET_MANCHESTER_TEAM_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case 'GET_MACCLESFIELD_TEAM_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'GET_MACCLESFIELD_TEAM_SUCCESS':
      return {
        ...state,
        macclesfieldTeam: action.payload,
      }
    case 'GET_MACCLESFIELD_TEAM_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default teams

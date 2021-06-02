export const teams = (
    state = {},
    action
  ) => {
    switch (action.type) {
      case "GET_MANCHESTER_TEAM_SUCCESS":
        return {
          ...state,
          manchesterTeam: action.payload,
        }
      case "GET_MACCLESFIELD_TEAM_SUCCESS":
        return {
          ...state, 
          macclesfieldTeam: action.payload
        }
      default:
        return state
    }
  }
  
  export default teams
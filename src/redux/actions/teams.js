export const getManchesterTeamRequest = () => {
    return {
      type: 'GET_MANCHESTER_TEAM_REQUEST',
    }
  }
  
  export const getManchesterTeamSuccess = (manchesterTeam) => {
    return {
      type: 'GET_MANCHESTER_TEAM_SUCCESS', 
      payload: manchesterTeam
    }
  }
  
  export const getManchesterTeamFail = (error) => {
    return {
      type: 'GET_MANCHESTER_TEAM_FAIL', 
      payload: error,
    }
  }
  
  export const getMacclesfieldTeamRequest = () => {
    return {
      type: 'GET_MACCLESFIELD_TEAM_REQUEST',
    }
  }
  
  export const getMacclesfieldTeamSuccess = (macclesfieldTeam) => {
    return {
      type: 'GET_MACCLESFIELD_TEAM_SUCCESS', 
      payload: macclesfieldTeam
    }
  }
  
  export const getMacclesfieldTeamFail = (error) => {
    return {
      type: 'GET_MACCLESFIELD_TEAM_FAIL', 
      payload: error,
    }
  }


  
  
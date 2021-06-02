import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import {
  getManchesterTeamSuccess,
  getManchesterTeamFail,
  getMacclesfieldTeamSuccess,
  getMacclesfieldTeamFail,
} from '../actions/teams'

function* getManchesterTeamSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get(
      `https://data.police.uk/api/greater-manchester/AC23/people`
    )
    console.log('manteamresinsaga', res.data)
    yield put(getManchesterTeamSuccess(res.data))
  } catch (error) {
    yield put(getManchesterTeamFail(error))
  }
}

function* getMacclesfieldTeamSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get(
      `https://data.police.uk/api/cheshire/CE01/people`
    )
    console.log('macteamresinsaga', res.data)
    yield put(getMacclesfieldTeamSuccess(res.data))
  } catch (error) {
    yield put(getMacclesfieldTeamFail(error))
  }
}

function* saveState() {
  //@ts-ignore
  const state = yield select()
  yield localStorage.setItem('initState', JSON.stringify(state))
}

const sagaWatcher = [
  takeLatest('GET_MANCHESTER_TEAM_REQUEST', getManchesterTeamSaga),
  takeLatest('GET_MACCLESFIELD_TEAM_REQUEST', getMacclesfieldTeamSaga),
  takeLatest('*', saveState),
]

export default sagaWatcher

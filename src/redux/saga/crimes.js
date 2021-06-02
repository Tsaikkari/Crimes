import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import {
  getManchesterCrimesSuccess,
  getManchesterCrimesFail,
  getMacclesfieldCrimesSuccess,
  getMacclesfieldCrimesFail,
} from '../actions/crimes'

function* getManchesterCrimesSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get(
      `https://data.police.uk/api/crimes-street/all-crime?lat=53.483030&lng=-2.219960&date=2021-04`
    )
    console.log('resinsaga', res.data)
    yield put(getManchesterCrimesSuccess(res.data))
  } catch (error) {
    yield put(getManchesterCrimesFail(error))
  }
}

function* getMacclesfieldCrimesSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get(
      `https://data.police.uk/api/crimes-street/all-crime?lat=53.25113&lng=-2.135322&date=2021-04`
    )
    console.log('resinsaga', res.data)
    yield put(getMacclesfieldCrimesSuccess(res.data))
  } catch (error) {
    yield put(getMacclesfieldCrimesFail(error))
  }
}

function* saveState() {
  //@ts-ignore
  const state = yield select()
  yield localStorage.setItem('initState', JSON.stringify(state))
}

const sagaWatcher = [
  takeLatest('GET_MANCHESTER_CRIMES_REQUEST', getManchesterCrimesSaga),
  takeLatest('GET_MACCLESFIELD_CRIMES_REQUEST', getMacclesfieldCrimesSaga),
  takeLatest('*', saveState),
]

export default sagaWatcher

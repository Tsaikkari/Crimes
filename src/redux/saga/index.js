import { all } from 'redux-saga/effects'
import crimesWatcher from './crimes'
import teamsWatcher from './teams'

export default function* rootSaga() {
    yield all([...crimesWatcher, ...teamsWatcher ])
}
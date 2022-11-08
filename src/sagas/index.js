import {takeLatest} from 'redux-saga/effects'
import {getCountriesRequest} from '../reducers/countriesSlice'
import {getAllCountriesSaga} from './countriesSaga'

function* rootSaga(){
 yield takeLatest(getCountriesRequest.type,getAllCountriesSaga)
}

export default rootSaga
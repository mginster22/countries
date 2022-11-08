import {put} from 'redux-saga/effects'
import {getAllCountries} from '../api'
import {getCountriesSuccess,getCountriesError} from '../reducers/countriesSlice'

export function* getAllCountriesSaga(action){
  try {
    const {data}=yield getAllCountries()
    yield put(getCountriesSuccess(data))
  } catch (error) {
    yield put(getCountriesError(error))
  }
}
import {
  configureStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import countriesSlice from '../reducers/countriesSlice'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    countries:countriesSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);
export default store
import { Dispatch } from 'redux';
import * as Types from '../../state/'
import * as citiesActions from './types'
import * as service from '../../../services/cities.service'
import { City, Measure } from "../../../types/classes"


export const loadCities = () => {
  return async (
    dispatch: Dispatch<Types.RootAction>,
    getState: () => Types.RootState
  ) => {
    const index = getState().cities.filter
    dispatch(citiesActions.LoadCities())
    try {
      // const users = await userService.userDetails()
      // console.log('users',users)
      const response = await service.list(index);
      dispatch(citiesActions.LoadCitiesSuccess(response))
    } catch (e) {
      dispatch(citiesActions.LoadCitiesError(e.message))
    }
  }
}

export const loadUserCities = () => {
  return async (
    dispatch: Dispatch<Types.RootAction>,
    getState: () => Types.RootState
  ) => {
    dispatch(citiesActions.LoadUserCities())
    try {
      const response = await service.listUserCities();
      dispatch(citiesActions.LoadUserCitiesSuccess(response))
    } catch (e) {
      dispatch(citiesActions.LoadUserCitiesError(e.message))
    }
  }
}


export const startPulling = (city: City, period: string) => {
  return async (
    dispatch: Dispatch<Types.RootAction>,
    getState: () => Types.RootState
  ) => {
    dispatch(citiesActions.LoadMeasures())
    try {
      const response: Measure[] = await service.listMeasures(city, period);
      dispatch(citiesActions.LoadMeasuresSuccess(response))
    } catch (e) {
      dispatch(citiesActions.LoadMeasuresFail(e.message))
    }
    const interval = setInterval(async ()=> {
      dispatch(citiesActions.LoadMeasures())
      try {
        if(period){
        const response: Measure[] = await service.listMeasures(city, period);
        dispatch(citiesActions.LoadMeasuresSuccess(response))
        }
      } catch (e) {
        dispatch(citiesActions.LoadMeasuresFail(e.message))
      }
    }, 1000)
    dispatch(citiesActions.ChangeInterval(interval))
  }
}


export const startPullingCities = () => {
  return async (
    dispatch: Dispatch<Types.RootAction>,
    getState: () => Types.RootState
  ) => {
    const interval = setInterval( () => {
      dispatch(loadCities())
    },1000)
    dispatch(citiesActions.ChangeInterval(interval))
  }}

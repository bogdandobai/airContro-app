import { Dispatch } from 'redux';
import * as Types from '../../state/'
import * as citiesActions from './types'
import { City } from "../../../types/classes"
import * as citiesService from '../../../services/cities.service'
import NotificationListener from "../../../services/NotificationListener"


export const addUserCity = (city: City) => {
  return async (
    dispatch: Dispatch<Types.RootAction>
  ) => {
    dispatch(citiesActions.AddCity())
    try{
      const cityToAdd = await citiesService.create(city);
      dispatch(citiesActions.AddCitySuccess(cityToAdd));
      NotificationListener.subscribeToTopic(city.name)
    }catch{
      dispatch(citiesActions.AddCityFail())
    }
  }
}


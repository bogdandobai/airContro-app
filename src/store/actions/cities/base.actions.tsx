import { Dispatch } from "react"
import * as Types from "../../state/"
import * as citiesActions from "./types"
import { City } from "../../../types/classes"
import NavigationService from "../../../navigation/NavigationService"
import { startPulling } from "./load.actions"

export const changeSearch = (search: string) => {
  return async (dispatch: Dispatch<Types.RootAction>) => {
    dispatch(citiesActions.ChangeSearch(search))
  }
}

export const filterCities = (index: string) => {
  return async (
    dispatch: Dispatch<Types.RootAction>,
    getState: () => Types.RootState
    ) => {
      if(!getState().cities.filter || getState().cities.filter!==index){
    dispatch(citiesActions.FilterCities(index))
      }else{
        dispatch(citiesActions.RefreshFilters())
      }
  }
}

export const refreshFilters = () => {
  return (dispatch: Dispatch<Types.RootAction>) => {
    dispatch(citiesActions.RefreshFilters())
  }
}

export const selectCity = (city: City) => {
  return async(
    dispatch: Dispatch<Types.RootAction>,
    getState:() => Types.RootState
  ) => {
    // tslint:disable-next-line
    await dispatch(startPulling(city, 'day'))
    dispatch(citiesActions.SelectCity(city))
    return NavigationService.navigate('CityDetails')
  }
}

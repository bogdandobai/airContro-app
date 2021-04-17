import { Dispatch } from "react"
import * as Types from "../../state"
import * as citiesService from "../../../services/cities.service"
import * as citiesActions from "./types"
import NotificationListener from "../../../services/NotificationListener"

export const deleteCity = (cityId: number) => {
  return async(
    dispatch: Dispatch<Types.RootAction>,
    getState:() => Types.RootState
  ) => {
    dispatch(citiesActions.DeleteCity())
    try{
      await citiesService.remove(cityId)
      NotificationListener.unsubscribeFromTopic(getState().cities.userCities[cityId].city.name)
      dispatch(citiesActions.DeleteCitySuccess(cityId))
    }catch{
      dispatch(citiesActions.DeleteCityFail())
    }
  }
}

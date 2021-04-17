import { City, Measure } from "../../types/classes"
import * as Types from '../state';
import {  CitiesState } from '../reducers/cities.reducer';
import { createSelector } from 'reselect';

const getCitiesState = (state: Types.RootState):  CitiesState => state.cities;

export const selectCities = createSelector(
  getCitiesState,
  (state: CitiesState) => {
    const cities: City[] = [];
    Object.keys(state.cities).forEach((key: string) => {
      cities.push(state.cities[key])
    })
    if(state.search){
      return cities.filter(city => city.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
    }
    return cities;
  }
)
export const selectLoadingCities = createSelector(
  getCitiesState,
  (state: CitiesState) => {
    return state.loading
  }
)

export const selectedCity = createSelector(
  getCitiesState,
  (state: CitiesState) => {
    return state.cities[state.selectedCity]
  }
)

export const selectMeasures = createSelector(
  getCitiesState,
  (state: CitiesState) => {
    const measures: Measure[] = [];
    Object.keys(state.measures).forEach((key: string) => {
      measures.push(state.measures[key])
    })
    return measures;
  }
)

export const selectUserCities = createSelector(
  getCitiesState,
  (state: CitiesState) => {
    const userCities = [];
    Object.keys(state.userCities).forEach((key: string) => {
      userCities.push(state.userCities[key])
    })
    return userCities;
  }
)

export const selectIntervalId = createSelector(
  getCitiesState,
  (state: CitiesState) => state.interval
)

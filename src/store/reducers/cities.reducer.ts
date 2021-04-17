import { City, Measure } from "../../types/classes"
import { ActionType, getType } from 'typesafe-actions';
import * as citiesActions from '../actions/cities/types';
import * as _ from 'lodash';
import { UserCity } from "../../types/classes/user-city.class"
import * as userActions from "../actions/user/types"
import { UserActions } from "./user.reducer"

export interface CitiesState {
	cities: { [id: number]: City };
	loading: boolean;
	search: string,
	filter: string,
	selectedCity: number
	measures: {[id: number] : Measure};
	loadingMeasures: boolean
	userCities
	loadingUserCities:boolean
	addingCity: boolean
	deletingCity: boolean
	interval: number
}

const initialState: CitiesState = {
	cities: {},
	loading: false,
	search: "",
	filter: null,
	selectedCity: null,
	measures: {},
	loadingMeasures: false,
	userCities:{},
	loadingUserCities: false,
	addingCity: false,
	deletingCity: false,
	interval: null
};

export type CitiesActions = ActionType<typeof citiesActions | userActions>;

const citiesReducer = (state = initialState, action: CitiesActions | UserActions) => {
	switch (action.type) {
		case getType(citiesActions.LoadCities): {
			return {
				...state,
				loading: true
			};
		}
		case getType(citiesActions.LoadCitiesSuccess): {
			const cities: { [id: number]: City } = {};
			action.payload.forEach((city: City) => {
				cities[city.id] = city;
			});
			return {
				...state,
				cities: {
					...cities
				},
				loading: false
			};
		}
		case getType(citiesActions.LoadCitiesError):{
			return{
				...state,
				loading:false
			}
		}
		case getType(citiesActions.ChangeSearch):
			return {
				...state,
				search: action.payload
			};
		case getType(citiesActions.FilterCities):
			return{
				...state,
				filter: action.payload
			}
		case getType(citiesActions.RefreshFilters):
			return{
				...state,
				filter:null
			}
		case getType(citiesActions.SelectCity):{
			return{
				...state,
				selectedCity:action.payload.id
			}
		}
		case getType(citiesActions.LoadMeasures): {
			return {
				...state,
				loadingMeasures: true
			};
		}
		case getType(citiesActions.LoadMeasuresSuccess): {
			const measures: { [id: number]: Measure } = {};
			action.payload.forEach((measure: Measure) => {
				measures[measure.id] = measure;
			});
			return {
				...state,
				measures: {
					...measures
				},
				loadingMeasures: false
			};
		}
		case getType(citiesActions.LoadMeasuresFail):{
			return{
				...state,
				loadingMeasures:false
			}
		}
		case getType(citiesActions.LoadUserCities): {
			return {
				...state,
				loadingUserCities: true
			};
		}
		case getType(citiesActions.LoadUserCitiesSuccess): {
			const userCities = {};
			action.payload.forEach((userCity) => {
				userCities[userCity.id] = userCity;
			});
			return {
				...state,
				userCities: {
					...userCities
				},
				loadingUserCities: false
			};
		}
		case getType(citiesActions.LoadUserCitiesError):{
			return{
				...state,
				loadingUserCities: false
			}
		}
		case getType(citiesActions.AddCity): {
			return {
				...state,
				addingCity:true
			}
		}
		case getType(citiesActions.AddCitySuccess):{
			const userCities = state.userCities;
			const city: UserCity = action.payload;
			userCities[city.id] = city;
			return {
				...state,
				userCities: {
					...userCities,
				},
				addingCity: false
			};
		}
		case getType(citiesActions.AddCityFail): {
			return {
				...state,
				addingCity: false
			}
		}
		case getType(citiesActions.DeleteCity): {
			return {
				...state,
				deletingCity:true
			}
		}
		case getType(citiesActions.DeleteCitySuccess):{
			const userCities = _.omit(state.userCities, action.payload);
			return {
				...state,
				userCities,
				deletingCity: false
			};
		}
		case getType(citiesActions.DeleteCityFail): {
			return {
				...state,
				deletingCity: false
			}
		}
		case getType(userActions.ToggleSubscriptionSuccess):{
			const userCities = {...state.userCities}
			const city = action.payload
			userCities[city.id].notifications = !userCities[city.id].notifications
			return{
				...state,
				userCities
			}
		}
		case getType(citiesActions.ChangeInterval):{
			return{
				...state,
				interval: action.payload
			}
		}
		default:
			return state;
	}
};

export default citiesReducer;

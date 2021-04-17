import { City, Measure } from "../../../types/classes"
import { createAction } from 'typesafe-actions';
import { UserCity } from "../../../types/classes/user-city.class"

const LOAD_CITIES = '[Cities] Load Cities';
const LOAD_CITIES_SUCCESS = '[Cities] Load Success Cities';
const LOAD_CITIES_ERROR = '[Cities] Load Error Cities';

const LOAD_USER_CITIES = '[Cities] Load User Cities';
const LOAD_USER_CITIES_SUCCESS = '[Cities] Load User Cities Success';
const LOAD_USER_CITIES_ERROR = '[Cities] Load User Cities Error';

const LOAD_MEASURES = '[Measures] Load Measures'
const LOAD_MEASURES_SUCCESS = '[Measures] Load Measures Success'
const LOAD_MEASURES_FAIL = '[Measures] Load Measures Fail'

const ADD_CITY = '[City] Add City';
const ADD_CITY_SUCCESS = '[City] Add City Success';
const ADD_CITY_FAIL = '[City] Add City Fail';

const DELETE_CITY = '[City] Delete City';
const DELETE_CITY_SUCCESS = '[City] Delete City Success';
const DELETE_CITY_FAIL = '[City] Delete City Fail';

const CHANGE_SEARCH = '[Cities] Change Search';

const FILTER_CITIES = '[Cities] Filter Cities';
const REFRESH_FILTER = '[Cities] Refresh Filters';

const SELECT_CITY = '[Cities] Select City'

const CHANGE_INTERVAL = '[Cities] Change Interval'

export const LoadCities = createAction(LOAD_CITIES);
export const LoadCitiesSuccess = createAction(LOAD_CITIES_SUCCESS, (resolve) => (response: City[]) => resolve(response));
export const LoadCitiesError = createAction(LOAD_CITIES_ERROR, (resolve) => (err: string) => resolve(err));


export const LoadUserCities = createAction(LOAD_USER_CITIES);
export const LoadUserCitiesSuccess = createAction(LOAD_USER_CITIES_SUCCESS, (resolve) => (response) => resolve(response));
export const LoadUserCitiesError = createAction(LOAD_USER_CITIES_ERROR, (resolve) => (err: string) => resolve(err));


export const AddCity = createAction(ADD_CITY);
export const AddCitySuccess = createAction(ADD_CITY_SUCCESS, (resolve) => (response: UserCity) => resolve(response));
export const AddCityFail = createAction(ADD_CITY_FAIL);


export const DeleteCity = createAction(DELETE_CITY);
export const DeleteCitySuccess = createAction(DELETE_CITY_SUCCESS, (resolve) => (response: number) => resolve(response));
export const DeleteCityFail = createAction(DELETE_CITY_FAIL);


export const ChangeSearch = createAction(CHANGE_SEARCH, (resolve) => (search: string) => resolve(search));
export const FilterCities = createAction(FILTER_CITIES, (resolve) => (index: string) => resolve(index));

export const RefreshFilters = createAction(REFRESH_FILTER)

export const SelectCity = createAction(SELECT_CITY, (resolve) => (city: City) => resolve(city));

export const LoadMeasures = createAction(LOAD_MEASURES);
export const LoadMeasuresSuccess = createAction(LOAD_MEASURES_SUCCESS, (resolve) =>(response: Measure[]) =>
	resolve(response)
)
export const LoadMeasuresFail = createAction(LOAD_MEASURES_FAIL, (resolve) =>(err: string) =>
	resolve(err)
)

export const ChangeInterval = createAction(CHANGE_INTERVAL, (resolve) => (response:number) =>resolve(response))

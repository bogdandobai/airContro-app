import Api from '../services/api';
import { City, Measure } from "../types/classes"
import { UserCity } from "../types/classes/user-city.class"

const resource = '';

export const list = (index: string): Promise<City[]> => {
	return Api.get<City[]>(`/cities`,{index});
};

export const get = (id: number): Promise<City> => {
	const url = `${resource}/${id}`;
	return Api.get<City>(url);
};

export const create = (city: City): Promise<UserCity> => {
	return Api.post(`/user-cities`, {city: city.id});
};

export const remove = (id: number): Promise<void> => {
	const url = `user-cities/${id}`;
	return Api.delete(url);
};

export const update = (city: City): Promise<City> => {
	const url = `${resource}/${city.id}`;
	return Api.put<City>(url, city);
};

export const listMeasures = (city: City, period: string) => {
	return Api.get<Measure[]>(`/measurements?city_id=${city.id}&period=${period}`)
}

export const listUserCities = () => {
	return Api.get(`/user-cities`)
}

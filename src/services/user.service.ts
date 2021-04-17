import Api from "./api";
import { User } from "../types/classes";
import { UserCity } from "../types/classes/user-city.class"

export const userDetails = (): Promise<User> => {
  return Api.get<User>('/all-profiles');
}

export const editUser = async (user: User): Promise<User> => {
  const id = user.id
  return Api.patch(`users/${id}`, user)
}

export const toggleSubscription = async (userCity: UserCity) => {
  return Api.patch(`user-cities/${userCity.id}`,{notifications: !userCity.notifications})
}

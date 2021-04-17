import Api from '../services/api'
import { Message } from '../types/classes'

const resource = ''

export const list = (): Promise<Message[]> => {
    return Api.get<Message[]>('/chat');
}

export const get = (id: number): Promise<Message> => {
    const url = `${resource}/${id}`
    return Api.get<Message>(url);
}
export const create = (user: number, message: string): Promise<Message> => {
    return Api.post<Message>('/chat', {user,message});
}

export const remove = (id: number): Promise<void> => {
    const url = `${resource}/${id}`
    return Api.delete(url);
}

export const update = (message: Message): Promise<Message> => {
    const url = `${resource}/${message.id}`
    return Api.put<Message>(url, message);
}



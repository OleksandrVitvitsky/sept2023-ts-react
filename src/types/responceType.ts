import {AxiosResponse} from "axios";


type IResponce<T> = Promise<AxiosResponse<T>>;

export type {IResponce}
import {ICar} from "./carInterface";

export interface  ICarState {
    cars: ICar[];
    trigger: boolean|null,
    carForUpdate: ICar|null
}
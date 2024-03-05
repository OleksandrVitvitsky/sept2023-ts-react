import {ICarState} from "./carStateInterface";
import {ICar} from "./carInterface";

export interface IState {
    cars: ICarState;
    trigger: boolean|null
    carForUpdate: ICar|null
}
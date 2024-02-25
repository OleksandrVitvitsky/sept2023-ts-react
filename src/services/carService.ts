import {apiServiceCars} from "./apiService";
import {urls} from "../constants/urls";
import {IResponce} from "../types/responceType";
import {ICar} from "../interfaces/carInterface";

const carService = {
    getAll:():IResponce<ICar[]> => apiServiceCars.get((urls.cars.base)),
    create:(data:ICar):IResponce<ICar> => apiServiceCars.post(urls.cars.base,data),

    updateById:(id:number, data:ICar):IResponce<ICar> => apiServiceCars.put(urls.cars.byId(id),data),

    deleteById:(id:number):IResponce<void> => apiServiceCars.delete(urls.cars.byId(id))
}

export {
     carService
}



import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IUser} from "../interfaces/userInterface";
import {IResponce} from "../types/responceType";


const userService = {
    getAll:():IResponce<IUser[]> => apiService.get((urls.users.base)),
    create:(data:IUser):IResponce<IUser> => apiService.post(urls.users.base,data),
    updateById:(id:number, data:IUser):IResponce<IUser> => apiService.put(urls.users.byId(id),data),
    deleteById:(id:number):IResponce<void> => apiService.delete(urls.users.byId(id))

}

export {
    userService
}



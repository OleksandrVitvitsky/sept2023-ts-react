import axios from "axios";

import {baseURL} from "../constants/urls";

const apiServiceCars =  axios.create({baseURL:baseURL})

export {
       apiServiceCars
}
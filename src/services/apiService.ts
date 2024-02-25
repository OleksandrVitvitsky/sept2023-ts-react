import axios from "axios";

import {baseURLCars, baseURLUsers} from "../constants/urls";

const apiServiceUsers = axios.create({baseURL:baseURLUsers});

const apiServiceCars =  axios.create({baseURL:baseURLCars})

export {
    apiServiceUsers,
    apiServiceCars
}
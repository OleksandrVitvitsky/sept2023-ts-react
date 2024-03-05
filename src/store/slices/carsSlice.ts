import {createSlice} from "@reduxjs/toolkit";



import {ICarState} from "../../interfaces";



const initialState :ICarState  =  {
    cars: [],
    trigger: null,
    carForUpdate: null

}

const carsSlice = createSlice(
    {
        name: 'carSlice',
        initialState,
        reducers: {
            trigger: state => {
                state.trigger = !state.trigger
            },

            setCarForUpdate: (state, action) => {
                state.carForUpdate = action.payload
            },

            setAllcars: (state, action) => {
                state.cars = action.payload
            }

        }
    });

const {reducer: carReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {
    carReducer,
    carsActions
}
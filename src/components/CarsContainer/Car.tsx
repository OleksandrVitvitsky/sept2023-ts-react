import {FC} from 'react';
import {useDispatch} from "react-redux";

import {ICar} from "../../interfaces";
import {carsActions} from "../../store/slices";
import {carService} from "../../services/carService";

interface IProps {
    car:ICar,
}

const Car: FC<IProps> = ({car}) => {
    const {id,brand,price,year} = car;
const dispatch= useDispatch();

    const deleteById = async () => {
            await carService.deleteById(id)
            dispatch(carsActions.trigger());
    }

    return (
        <div>
            <div>id: {id} </div>
            <div>brand: {brand} </div>
            <div>price: {price} </div>
            <div>year: {year} </div>

            <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>update</button>
            <button onClick={deleteById}>delete</button>
        </div>
    );
};

export {Car};
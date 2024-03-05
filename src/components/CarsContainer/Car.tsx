import {FC} from 'react';
import {useDispatch} from "react-redux";

import {ICar} from "../../interfaces";
import {carsActions} from "../../store/slices";
import {carService} from "../../services/carService";
import css from './car.module.css'
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
        <div className={css.container}>
            <div className={css.item}>id: {id} </div>
            <div className={css.item}>brand: {brand} </div>
            <div className={css.item}>price: {price} </div>
            <div className={css.item}>year: {year} </div>

            <button className={css.button} onClick={() => dispatch(carsActions.setCarForUpdate(car))}>update</button>
            <button className={css.button} onClick={deleteById}>delete</button>
        </div>
    );
};

export {Car};
import {FC} from "react";

import {ICar} from "../../interfaces";
import {Car} from "./Car";
import css from './Cars.module.css'


interface IProps {
    cars:ICar[]
}


const Cars:FC<IProps> = ({cars}) => {
    return (
        <div className={css.carsContainer}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
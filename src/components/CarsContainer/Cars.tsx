import {FC} from "react";

import {ICar} from "../../interfaces/carInterface";
import {Car} from "./Car";
import {ISetState} from "../../types/setState";



interface IProps {
    cars:ICar[],
    setCarUpdate: ISetState<ICar>
    changeTrigger: () => void;
}


const Cars:FC<IProps> = ({cars,setCarUpdate, changeTrigger}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarUpdate = {setCarUpdate}  changeTrigger = {changeTrigger}/>)}
        </div>
    );
};

export {Cars};
import {useEffect, useState} from "react";

import {ICar} from "../../interfaces/carInterface";

import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carService} from "../../services/carService";


;

const CarsContainer = () => {

    const [cars,setCars]= useState<ICar[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)
    const [carUpdate,setCarUpdate] = useState<ICar>(null);

    useEffect(() => {carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    const changeTrigger = () => {
        setTrigger(prevState => !prevState)
    }

    return (
        <div>
            <CarForm changeTrigger={changeTrigger} carUpdate={carUpdate} setCarUpdate={setCarUpdate}/>
            <hr/>
            <Cars cars={cars} setCarUpdate = {setCarUpdate}  changeTrigger={changeTrigger}/>
        </div>
    );
};

export {CarsContainer};
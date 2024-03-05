import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carService} from "../../services/carService";
import {carsActions} from "../../store/slices";
import {IState} from "../../interfaces";




const CarsContainer = () => {

    const dispatch = useDispatch();

    const {cars,trigger} = useSelector((state: IState) => state.cars);


    useEffect(() => {carService.getAll().then(({data}) => dispatch(carsActions.setAllcars(data)))
    }, [trigger,dispatch]);

    // const changeTrigger = () => {
    //     setTrigger(prevState => !prevState)
    // }

    return (
        <div>
            {/*<CarForm changeTrigger={changeTrigger} carUpdate={carUpdate} setCarUpdate={setCarUpdate}/>*/}
            <CarForm/>
            <hr/>
            <hr/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsContainer};
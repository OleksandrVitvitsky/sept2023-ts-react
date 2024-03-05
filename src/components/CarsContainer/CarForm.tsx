import {SubmitHandler, useForm} from "react-hook-form";
import {FC, useEffect} from "react";
import {useDispatch,  useSelector} from "react-redux";

import {ICar} from "../../interfaces";
import {carService} from "../../services/carService";
import {IState} from "../../interfaces";
import {carsActions} from "../../store/slices";

import css from './carForm.module.css';

const CarForm:FC = () => {
    const {reset, handleSubmit,register,
    setValue} = useForm<ICar>();

    const dispatch= useDispatch();
    const {carForUpdate}  =    useSelector((state:IState) => state.cars);

    useEffect(() => {
      if (carForUpdate) {
          setValue('brand', carForUpdate.brand,{shouldValidate:true})
          setValue('price', carForUpdate.price,{shouldValidate:true})
          setValue('year',  carForUpdate.year,{shouldValidate:true})

      }
    }, [carForUpdate,setValue]);

    const save:SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        dispatch(carsActions.trigger());
        reset();
    }
    const update:SubmitHandler<ICar>  = async (car) => {

         await carService.updateById(carForUpdate.id,car)
         dispatch(carsActions.trigger());
         dispatch(carsActions.setCarForUpdate(null));
         reset();
    }
    return (
        <form className={css.form} onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input className={css.input} type="text" placeholder={'brand'} {...register('brand')}/>
            <input className={css.input} type="text" placeholder={'price'} {...register('price')}/>
            <input className={css.input} type="text" placeholder={'year'} {...register('year')}/>
            <button className={css.button} disabled={false}>{carForUpdate ? 'update' : 'save'} </button>
        </form>
    );
};

export {CarForm};
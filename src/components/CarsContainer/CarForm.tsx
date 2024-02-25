import {SubmitHandler, useForm} from "react-hook-form";
import {FC, useEffect} from "react";

import {ICar} from "../../interfaces/carInterface";

import {ISetState} from "../../types/setState";
import {carService} from "../../services/carService";


interface IProps{
    changeTrigger: () => void;
    carUpdate: ICar;
    setCarUpdate: ISetState<ICar>;
}

const CarForm:FC<IProps>= ({changeTrigger, carUpdate,setCarUpdate}) => {
    const {reset, handleSubmit,register,
    setValue} = useForm<ICar>();

    useEffect(() => {
      if (carUpdate) {
          setValue('brand', carUpdate.brand,{shouldValidate:true})
          setValue('price', carUpdate.price,{shouldValidate:true})
          setValue('year',  carUpdate.year,{shouldValidate:true})

      }
    }, [carUpdate,setValue]);

    const save:SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        changeTrigger();
        reset();
    }
    const update:SubmitHandler<ICar>  = async (car) => {

         await carService.updateById(carUpdate.id,car)
         changeTrigger();
         setCarUpdate(null);
         reset();
    }
    return (
        <form onSubmit={handleSubmit(carUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button disabled={false}>{carUpdate ? 'update' : 'save'} </button>
        </form>
    );
};

export {CarForm};
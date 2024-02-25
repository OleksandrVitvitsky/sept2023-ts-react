import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../services/userService";
import {FC} from "react";
interface IProps{
    changeTrigger: () => void;
}
const UserForm:FC<IProps> = ({changeTrigger}) => {

    const {formState:{isValid,errors},reset,register,handleSubmit,setValue} = useForm<IUser>(
        {
            mode: 'all'
        }
    );
    const save:SubmitHandler<IUser>  = async (user) => {
            await userService.create(user).then(({data}) => console.log(data));
        changeTrigger();
        reset()
    }


    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"name"} {...register("name",{
                pattern: {
                    value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,30}$/,
                    message: 'min 1 max 30 character'
                }
            })}/>
            <input type="text" placeholder={"username"} {...register("username",{
                pattern: {
                    value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,30}$/,
                    message: 'min 1 max 30 character'
                }
            })}/>
            <input type="text" placeholder={"email"} {...register("email",{
                pattern: {
                    value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,50}$/,
                    message: 'min 1 max 50 character'
                }
            })}/>
            <button disabled={!isValid}>Create</button>
            {errors.name && <div>{errors.name.message}</div>}
            {errors.username && <div>{errors.username.message}</div>}
            {errors.email && <div>{errors.email.message}</div>}
        </form>
    );



    //
    // return (
    //     <form onSubmit={handleSubmit(save)}>
    //         <input type="text" placeholder={'brand'} {...register('brand', {
    //             pattern: {
    //                 value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
    //                 message: 'min 1 max 2 character'
    //             }
    //         })}/>
    //         <input type="text" placeholder={'price'} {...register('price', {
    //             valueAsNumber: true,
    //             min: {value: 0, message: 'min 0'},
    //             max: {value: 1_000_000, message: 'max 1 000 000'}
    //         })}/>
    //         <input type="text" placeholder={'year'} {...register('year', {
    //             valueAsNumber: true,
    //             min: {value: 1990, message: 'min 1990'},
    //             max: {value: new Date().getFullYear(), message: 'max current year'}
    //         })}/>
    //         <button disabled={!isValid}>save</button>
    //         {errors.brand && <div>{errors.brand.message}</div>}
    //         {errors.price && <div>{errors.price.message}</div>}
    //         {errors.year && <div>{errors.year.message}</div>}
    //     </form>
    // );


};

export {UserForm};
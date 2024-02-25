import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../services/userService";
import {FC} from "react";
interface IProps{
    changeTrigger: () => void;
}
const UserForm:FC<IProps> = ({changeTrigger}) => {

    const {reset,register,handleSubmit,setValue} = useForm<IUser>();
    const save:SubmitHandler<IUser>  = async (user) => {
            await userService.create(user);
        changeTrigger();
        reset()
    }


    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"name"} {...register("name")}/>
            <input type="text" placeholder={"username"} {...register("username")}/>
            <input type="text" placeholder={"email"} {...register("email")}/>
            <button>Create</button>
        </form>
    );
};

export {UserForm};
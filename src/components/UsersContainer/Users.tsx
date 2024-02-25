import {FC} from "react";


import {IUser} from "../../interfaces/userInterface";
import {User} from "./User";

interface IProps {
  users:IUser[]
}

const Users:FC<IProps> = ({users}) => {
    return (
        <div className={"css.usersContainer"}>
            {users.map(user => <User key ={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
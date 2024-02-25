import {IUser} from "../../interfaces/userInterface";
import {FC} from "react";

interface IProps {
    user:IUser
}

const User:FC<IProps> =  ({user}) => {
    const {id,name,username,email} = user;

    return (
        <div>
            <div> id: {id}</div>
            <div> name: {name}</div>
            <div> username: {username}</div>
            <div> email: {email}</div>
            {/*<button>update</button>*/}
            {/*<button>delete</button>*/}
        </div>
    );
};

export {
    User
};
import {useEffect, useState} from "react";

import {Users} from "./Users";
import {UserForm} from "./UserForm";
import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../services/userService";



const UsersContainer = () => {
    const [users,setUsers]= useState<IUser[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)


    useEffect(() => {
       userService.getAll().then(({data}) => setUsers(data))
    }, [trigger]);

 const changeTrigger = () => {
     setTrigger(prevState => !prevState)
 }

 return (
        <div>
            <UserForm changeTrigger={changeTrigger}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer};
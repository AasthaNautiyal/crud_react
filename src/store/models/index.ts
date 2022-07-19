import { Action,action } from "easy-peasy";
import { v4 } from "uuid";
interface user{
    id:string;
    name:string;
    gender:string;
    age:number;
}
export interface StoreModel{
   users:user[],
   editingUser?:user,
   addUser:Action<this,Omit<user,"id">>;
   editUser:Action<this,string|undefined>;
   deleteUser:Action<this,string>;
   updateUser:Action<this,user>;
}
const model:StoreModel={
    users:[],
    addUser:action((state,payload)=>{
        state.users=[...state.users,{...payload,id:v4()}];
    }),
    editUser:action((state,payload)=>{
        state.editingUser= state.users.find((data)=>{
            return(data.id===payload)
         })
    }),
    updateUser:action((state,payload)=>{
        state.users=state.users.map((data)=>{
            if(data.id===payload.id)
            {
                return payload;
            }
            return data;
        })
    }),
    deleteUser:action((state,payload)=>{
        state.users = state.users.filter(todo => todo.id !== payload);
    })
};

export default model;

import { createContext, useState } from "react";
export interface user{
    id :string;
    name:string;
    age:number;
    gender:string;
}
export interface userContext{
    users:user[],
    editinguser?:user,
    addUser:(user:user)=>void;
    deleteUser:(id:string)=>void;
    editUser:(id:string|undefined)=>void;
    updateUser:(user:user)=>void;
}

export const Model=()=>{
    const[users,setUserData]=useState<user[]>([]);
    const[editinguser,setEditUser]=useState<user>();
    const addUser=(user:user)=>{
        setUserData([...users,user]);
    }
    const deleteUser=(id:string)=>{
        setUserData((users)=>{
               return(users.filter(user=>{
                   return(user.id!==id)
               }))
        })
    }
    const editUser=(id:string|undefined)=>{
         setEditUser(users.find(user=>{
                return(user.id===id)
            }))
         }
         const updateUser = (data: user) => {
            setUserData(users.map(user => {
                if (user.id === data.id)
                    return data;
                return data;
            }))
        }
        return{
            addUser,
            deleteUser,
            users,
            editUser,
            editinguser,
            updateUser
        }
}
export const UserContext = createContext<userContext>({
    users: [],
    addUser: (user: user) => { },
    deleteUser: (id: string) => { },
    updateUser: (updUser: user) => { },
    editUser: (id: string|undefined) => { }
})
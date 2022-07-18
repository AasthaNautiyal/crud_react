import { Action,action } from "easy-peasy";
import uuid from "uuid";
export interface StoreModel{
    id:number;
    name:string;
    age:string;
    gender:string;
    addedUsers:string[];
    setName:Action<this,string>;
    setAge:Action<this,string>;
    setGen:Action<this,string>;
    add:Action<this,string>;
    remove:Action<this,string>;
    edit:Action<this,string>;
    /*userData:{
        name:string,
        age:number,
        gender:string,
    };
    setData:Action<this,any>;
    */
   // remove:Action<this,any>;
    
}
const model:StoreModel={
    //userData:{name:"", age:0, gender:""},
    //setData:action((state,payload)=>{
      //  state.userData=payload;
//}),
    id:0,
    name:"",
    age:"",
    gender:"",
    addedUsers:[],
    setName:action((state,payload)=>{
        state.name=payload;
    }),
    setAge:action((state,payload)=>{
        state.age=payload;
    }),
    setGen:action((state,payload)=>{
        state.gender=payload;
    }),
    edit:action((state,id)=>{
        state.addedUsers=state.addedUsers.find(user => {
            return (user===id);
        })
}),
    add: action((state, payload) => {
        payload.id = uuid.v4();
        state.addedUsers = [...state.addedUsers, payload];
      }),
      remove: action((state, id) => {
        state.addedUsers = state.addedUsers.filter(todo => todo !== id);
      })
    
};

export default model;

import React, { useContext } from "react";
import { UserContext,user} from "../context/userContext";
import nextId from "react-id-generator";
import { ReactForm } from 'react-forms';
import "../App.css";
const Form = () => {
  const {addUser,updateUser,editinguser,editUser}=useContext(UserContext);
  const myConfig = [
    {
        type: 'text',
        valueKey: 'name',
        fieldProps: { label: 'Name', fullWidth: true},
    },
        {
            type: 'text',
            valueKey: 'age',
            fieldProps: { label: 'Age',fullWidth:true},
        },
        {
            type: 'select',
            valueKey: 'gender',
            fieldProps: { label:'Gender',
                options: [
                    { name: 'Male', value: 'Male' },
                    { name: 'Female', value: 'Female' },
                    { name: 'Others', value: 'Others' },
                ],
                styles : { width : '100%' }
            },
        },
]
const myInitialValues = editinguser || { name: '', age:'', gender: '', id: '' }

    return (
        <div>
            <div>
                <ReactForm
                    enableReinitialize
                    config={myConfig}
                    initialValues={myInitialValues}
                    onSubmit={(values: Partial<user>, helper: { resetForm: () => {} }
                    ) => {
                        if (!values.id)
                            addUser({ ...values, id: nextId() } as user)
                        else
                            {updateUser(values as user);
                            editUser(undefined);
                            }
                        helper.resetForm();
                        console.log(helper);
                    }} formId={''}
                    actionConfig={{ submitButtonProps:{} }}
                />
            </div>
        </div>
    )}

  export default Form;
  
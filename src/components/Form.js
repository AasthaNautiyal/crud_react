import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

const Form = () => {

    const [userData, setUserData] = useState({
        name: "",
        age: 0,
        gender: "",
        id: ""
    });

    const editUser = useSelector(state => state.editingUser);
    useEffect(() => {
        setUserData(editUser || {
            id:"",
            name: "",
            age: 0,
            gender: "",
        })
    }, [editUser])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => {
            return ({
                ...prev,
                [name]: value
            })
        })
    }

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userData.id) {
            userData.id = nextId();
            dispatch({
                type: "ADD",
                payload: userData
            })
        }
        else {
            dispatch({
                type: "UPDATE",
                payload: userData
            })
        }
        setUserData({
            name: "",
            age: 0,
            gender: "",
            id: ""
        })
    }

    return (
        <div>
            <h1>CRUD</h1>
            <br></br>
            <form>
                <div>
                    <TextField id="outlined-basic" label="Name" variant="filled" size="small" value={userData.name} onChange={handleChange} name="name" />
                </div>
                <br></br>
                    <div>
                        <TextField id="outlined-basic" label="Age" variant="filled" size="small" value={userData.age} onChange={handleChange} name="age"/>
                    </div>
                    <br></br>
                    <div>
                        <label>Gender</label>
                        <select name="gender" id="gender" value={userData.gender} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
            </div>
                <br></br>
                <div>
                <Button variant="contained" color="default" onClick={handleSubmit}>{editUser?"UPDATE" : "ADD"}</Button>
                </div>
            </form>
        </div>
    );
}


export default Form;
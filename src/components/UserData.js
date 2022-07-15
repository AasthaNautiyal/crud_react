import { useDispatch } from 'react-redux';
import "../App.css";
import Button from "@material-ui/core/Button";

export default function UserData({ data }) {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE",
            payload: id
        })
    }
    const handleEdit = (id) => {
        dispatch({
            type: "EDIT",
            payload: id
        })
    }

    return (
        <div className="form">
            {data.id}
            <br></br>
            Name-{data.name}
            <br></br>
            Age-{data.age}
            <br></br>
            Gender-{data.gender}
            <div><br></br>
                <Button variant="contained" onClick={() => { handleEdit(data.id) }}>Edit</Button>
                <Button variant="contained" onClick={() => { handleDelete(data.id) }}>Delete</Button>
            </div>
        </div>
    );
}
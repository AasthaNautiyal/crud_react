import React from "react";
import Button from"@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
//import "../App.css";
import { makeStyles } from '@material-ui/core/styles';
import { IUser } from "./interface";
interface IProps {
  users: Array<IUser>;
  editRow: (user: IUser) => void;
  deleteUser: (id:number) => void;
}

const UserTable:React.FunctionComponent<IProps>=props=> (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user:IUser) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>
              <Button onClick={() => {
                  props.editRow(user);
                }}variant="contained" color="primary" size="small"
              >Edit</Button>
              <Button variant="contained" color="secondary" size="small"startIcon={<DeleteIcon />} onClick={() => props.deleteUser(user.id)}>
        Delete
      </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;

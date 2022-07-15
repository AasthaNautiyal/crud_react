import UserData from "../components/UserData";
import { useSelector } from "react-redux";

export default function Action() {

    const users = useSelector(state => state.addedUsers);
    return (
        <div>
            {users.map(user => {
                return (
                    <UserData data={user} key={user.id} />
                );
            })}
        </div>
    )
}
import { useContext } from 'react'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SingleUser = () => {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    const params=useParams();
    user.setCurrentUser(params.id as string);
    return (
        <>
            <button onClick={() => navigate(-1)}>Back to Home</button>
            <div>
                {user.currentUser?.name ?
                    <div>
                        <div>Name:</div>
                        <div className="value">{user.currentUser?.name}</div>
                    </div> : ''
                }
                {user.currentUser?.age ?
                    <div>
                        <div>Age:</div>
                        <div className="value">{user.currentUser?.age}</div>
                    </div> : ''
                }
                {user.currentUser?.gender ?
                    <div>
                        <div>Gender:</div>
                        <div className="value">{user.currentUser?.gender}</div>
                    </div> : ''
                }
            </div>
        </>
    )
}

export default SingleUser;
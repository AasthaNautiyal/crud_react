import { createStore} from "redux";

const initialState = {
    editingUser: undefined,
    addedUsers: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD": {
            return ({
                ...state,
                addedUsers: [...state.addedUsers, action.payload]
            });
        }
        case "DELETE": {
            var id = action.payload;
            return ({
                ...state,
                addedUsers: state.addedUsers.filter(user => {
                    return (
                        user.id !== id
                    )
                })
            });
        }

        case "EDIT": {
            var id = action.payload;
            return ({
                ...state,
                editingUser: state.addedUsers.find(user => {
                    return (user.id === id);
                })
            })
        }
        case "UPDATE": {
            var updatedUser = action.payload;
            return ({
                ...state,
                addedUsers: state.addedUsers.map(user => {
                    if (user.id === updatedUser.id) {
                        return updatedUser
                    }
                    return user;
                })
            })
        }

        default:
            return state;
    }
}
export default createStore(reducer);
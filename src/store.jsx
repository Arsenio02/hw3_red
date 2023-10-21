import { createStore } from 'redux';

const initialState = {
    user: {
        name: '',
        age: 0,
        gender: ''
    }
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}

const store = createStore(userReducer);

export default store;

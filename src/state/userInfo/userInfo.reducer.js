const initialValue = {
    isLoading: false,
    user: ''
}

export function userInfoReducer(state = initialValue, action) {
    switch(action.type) {
        case 'SET_LOADING': 
            return {...state, isLoading: action.payload };
        case 'SET_USER':
            return {...state, user: action.payload}
        default: 
            return state;
    }
}
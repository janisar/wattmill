const initialState = {};

const location = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_LOCATION':
            console.log(action);
            return {
                ...state,
                mails: action.location
            };
        default:
            return state;
    }
};

export default location;
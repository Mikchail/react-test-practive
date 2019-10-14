const initialState = {
    items: [],
    loading: true,
    openMenuFlag: false,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'POSTS_LOADED':
            return {
                ...state,
                items: action.payload,
                loading: false,
            };
        case 'OPEN_MENU':
            return {
                ...state,
                openMenuFlag: true,
            };
        case 'CLOSE_MENU':
            return {
                ...state,
                openMenuFlag: false,
            };
        default:
            return state;
    }
};

export default reducer;

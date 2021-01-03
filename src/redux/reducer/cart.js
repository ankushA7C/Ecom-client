const initialState = {
    //name: "",
    // flavor: "",
    list: []
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_CART": return {
            ...state,
            //  name: action.payload.name,
            //flavor: action.payload.flavor,
            list: [...state.list, action.payload]

        };
        default: return state;

    }
}
export default cart;
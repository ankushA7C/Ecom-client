const initialState = {
    //name: "",
    // flavor: "",
    list: [],
    quantity: []
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_CART": return {
            ...state,
            //  name: action.payload.name,
            //flavor: action.payload.flavor,
            list: [...state.list, action.payload]

        };

        case "ADD_QUANTITY_TO_CART":
            return {
                ...state,
                quantity: [...state.quantity, action.payload],
            };

        case "UPDATE_QUANTITY_TO_CART": {
            let copyQuantity = [...state.quantity];
            let index = copyQuantity.findIndex(data => data.productId == action.payload.productId);
            copyQuantity[index] = { ...copyQuantity[index], quantity: action.payload.quantity }
            return {
                ...state,

                quantity: copyQuantity,

            }
        };
        case "DELETE_ITEM_FROM_CART": {
            let copyList = [...state.list];
            copyList = copyList.filter(data => data.id != action.payload.id);
            return {
                ...state,
                list: copyList,

            }
        };
        default: return state;

    }
}
export default cart;
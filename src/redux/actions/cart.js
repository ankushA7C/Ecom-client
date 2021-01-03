export const action = {
    addToCart
}

function addToCart(details) {
    return dispatch => {
        dispatch(setCart(details));
    };
    function setCart(flag) {
        return { type: "ADD_ITEM_TO_CART", payload: flag };
    }
}
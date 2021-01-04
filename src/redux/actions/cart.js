export const action = {
    addToCart,
    addQuantity,
    removeFromCart
}

function addToCart(details) {
    return dispatch => {
        dispatch(setCart(details));
    };
    function setCart(flag) {
        return { type: "ADD_ITEM_TO_CART", payload: flag };
    }
}
function addQuantity(details) {
    return (dispatch, getState) => {
        getState().cart.quantity.some(data => data.productId === details.productId) ? dispatch(updateQuantity(details)) : dispatch(setQuantity(details));

    };
    function setQuantity(flag) {
        return { type: "ADD_QUANTITY_TO_CART", payload: flag };
    }
    function updateQuantity(flag) {
        return { type: "UPDATE_QUANTITY_TO_CART", payload: flag };
    }
}
function removeFromCart(details) {
    return dispatch => {
        console.log("Details:", details);
        dispatch(deleteCart(details));
    };
    function deleteCart(flag) {
        return { type: "DELETE_ITEM_FROM_CART", payload: flag };
    }
}
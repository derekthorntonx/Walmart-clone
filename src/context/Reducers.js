export const cartReducer = (state, action) => {
    switch(action.type) {

        case "ADD_PRODUCT":
            return {...state, cart:[...state.cart, {...action.payload, qty: 1}]};

        case "REMOVE_PRODUCT":
            return {...state, cart: state.cart.filter((item) => item.name !== action.payload.name) }

        default:
            return state;
    }
}
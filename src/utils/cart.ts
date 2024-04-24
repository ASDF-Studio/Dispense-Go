import { type CartProduct } from "../redux/cart/cart.reducer";

export function calculateCartItemsTotalPrice(cartItems: CartProduct[]): number {
    let totalPrice = 0;

    cartItems.forEach((item) => {
        totalPrice = totalPrice + item.productPrice * item.productQuantity;
    });
    return totalPrice;
}

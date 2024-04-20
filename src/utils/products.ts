import { type AllProductDetails } from "../static-data/single-product-details";

export function findSingleProduct(
    productsArray: AllProductDetails,
    productId: string
) {
    const selectedProduct = productsArray.find(
        (product) => product.productDetails.productId === productId
    );
    return selectedProduct;
}

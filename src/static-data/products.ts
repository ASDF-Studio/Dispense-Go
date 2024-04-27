export type Product = {
    productId: string;
    title: string;
    image: string[];
    price: number;
    rating: number;
    type: "hybrid" | "indica" | "sativa" | undefined;
    sale?: number;
    originalPrice: number;
    discountPrice: number;
    variantsList: string[];
    thc: number;
    count: number;

    dispensaryId: string;
    dispensaryName: string;
    dispensaryAddress: string;
    dispensaryStreetAddress: string;
};
export type Products = Product[];

export const products: Products = [
    {
        productId: "e65dbfb9-195f-5785-a01f-81fecfd802c2",
        title: "Capsules 1:10 CBD Reserve - 300mg - 30 Count",
        price: 21.25,
        rating: 4,
        type: "hybrid",
        sale: 10,
        originalPrice: 21.0,
        discountPrice: 21.25,
        variantsList: ["100mg", "Buy 1 Take 1"],
        thc: 20,
        count: 121,
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52977_m_500x.png?v=1690205435",
        ],
        dispensaryName: "Fred Cobb's Dispensary",
        dispensaryId: "1bb9ddd6-2037-53b9-a850-83c6fedfe0d1",
        dispensaryAddress: "Toronto, ON, Canada",
        dispensaryStreetAddress: "4th Jones Avenue, 0162-12",
    },
    {
        productId: "c9673734-d586-5a1e-9d2f-b8cad1f8dcf6",
        title: "Sea Star - 3.5g Indoor",
        price: 21.25,
        rating: 4,
        type: "hybrid",
        sale: 15,
        originalPrice: 21.0,
        discountPrice: 21.25,
        thc: 20,
        count: 121,
        variantsList: ["200mg", "Buy 1 Take 1"],
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52431_m_500x.png?v=1684325721",
        ],
        dispensaryName: "Fred Cobb's Dispensary",
        dispensaryId: "1bb9ddd6-2037-53b9-a850-83c6fedfe0d1",
        dispensaryAddress: "Toronto, ON, Canada",
        dispensaryStreetAddress: "4th Jones Avenue, 0162-12",
    },
    {
        productId: "0b5e6a23-5581-53b9-9617-3775bfcbf2ea",
        title: "E85 - 7g Smediums",
        price: 21.25,
        rating: 4,
        type: "sativa",
        sale: 20,
        originalPrice: 21.0,
        discountPrice: 21.25,
        thc: 20,
        variantsList: ["300mg", "Buy 1 Take 1"],
        count: 121,
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/51930_m_500x.png?v=1698944531",
        ],
        dispensaryName: "Chris Little's Dispensary",
        dispensaryId: "e7ada41f-26c6-590f-bd60-66e398bf3fd1",
        dispensaryAddress: "Toronto, ON, Canada",
        dispensaryStreetAddress: "4th Jones Avenue, 0162-12",
    },
    {
        productId: "67436aa9-f508-5de6-9cc7-f265b2655c57",
        title: "E85 - 7g Smediums",
        price: 21.25,
        rating: 4,
        originalPrice: 21.0,
        discountPrice: 21.25,
        thc: 20,
        count: 121,
        variantsList: ["400mg", "Buy 1 Take 1"],
        type: "indica",
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52977_m_500x.png?v=1690205435",
        ],
        dispensaryName: "Hilda Logan's Dispensary",
        dispensaryId: "cc734b7e-f1b3-53b7-95d9-65e5cd465a0b",
        dispensaryAddress: "Toronto, ON, Canada",
        dispensaryStreetAddress: "4th Jones Avenue, 0162-12",
    },
    {
        productId: "fb041b14-29d4-53f0-bba0-7211bcc2f28e",
        title: "E85 - 7g Smediums",
        price: 21.25,
        rating: 4,
        type: "sativa",
        sale: 13,
        originalPrice: 21.0,
        discountPrice: 21.25,
        thc: 20,
        count: 121,
        variantsList: ["500mg", "Buy 1 Take 1"],
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/51930_m_500x.png?v=1698944531",
        ],
        dispensaryName: "Oscar Singleton's Dispensary",
        dispensaryId: "ce90879d-89c7-5039-b951-c7bdfec8a0b7",
        dispensaryAddress: "Toronto, ON, Canada",
        dispensaryStreetAddress: "4th Jones Avenue, 0162-12",
    },
    {
        productId: "03e5bf4f-9da9-5ab4-b62f-47a9f932b00e",
        title: "E85 - 7g Smediums",
        price: 21.25,
        rating: 4,
        type: "indica",
        originalPrice: 21.0,
        discountPrice: 21.25,
        thc: 20,
        count: 121,
        variantsList: ["600mg", "Buy 1 Take 1"],
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52977_m_500x.png?v=1690205435",
        ],
        dispensaryName: "Max Logan's Dispensary",
        dispensaryId: "06dc90a1-a680-5b77-a280-78ea1b56096d",
        dispensaryAddress: "Toronto, ON, Canada",
        dispensaryStreetAddress: "4th Jones Avenue, 0162-12",
    },
    {
        productId: "14f506a0-f45f-5458-9422-0b5c9809a430",
        title: "E85 - 7g Smediums",
        price: 21.25,
        rating: 4,
        originalPrice: 21.0,
        discountPrice: 21.25,
        thc: 20,
        count: 121,
        variantsList: ["700mg", "Buy 1 Take 1"],
        type: "sativa",
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/51930_m_500x.png?v=1698944531",
        ],
        dispensaryName: "Katharine Martin's Dispensary",
        dispensaryId: "9ca2089f-1354-5638-8bad-e6263ec879e7",
        dispensaryAddress: "Toronto, ON, Canada",
        dispensaryStreetAddress: "4th Jones Avenue, 0162-12",
    },
    {
        productId: "fbbea87e-4082-52cd-ba3a-26d7e2465433",
        title: "E85 - 7g Smediums",
        price: 21.25,
        rating: 4,
        originalPrice: 21.0,
        discountPrice: 21.25,
        thc: 20,
        count: 121,
        type: "indica",
        variantsList: ["800mg", "Buy 1 Take 1"],
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52977_m_500x.png?v=1690205435",
        ],
        dispensaryName: "Gavin Ball's Dispensary",
        dispensaryId: "3512c974-2f8e-5738-b661-df9369024517",
        dispensaryAddress: "Toronto, ON, Canada",
        dispensaryStreetAddress: "4th Jones Avenue, 0162-12",
    },
    {
        productId: "c70c8b9b-31a3-525e-bafa-373e7b83be55",
        title: "E85 - 7g Smediums",
        price: 21.25,
        rating: 4,
        originalPrice: 21.0,
        discountPrice: 21.25,
        thc: 20,
        count: 121,
        variantsList: ["900mg", "Buy 1 Take 1"],
        type: "sativa",
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/51930_m_500x.png?v=1698944531",
        ],
        dispensaryName: "Augusta Richards's Dispensary",
        dispensaryId: "b409e333-ef45-580b-85fd-3dc58ea4099a",
        dispensaryAddress: "Toronto, ON, Canada",
        dispensaryStreetAddress: "4th Jones Avenue, 0162-12",
    },
    {
        productId: "0880c131-fef9-56f5-9f84-eba7987a217f",
        title: "E85 - 7g Smediums",
        price: 21.25,
        rating: 4,
        originalPrice: 21.0,
        discountPrice: 21.25,
        thc: 20,
        count: 121,
        type: "indica",
        variantsList: ["1000mg", "Buy 1 Take 1"],
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52977_m_500x.png?v=1690205435",
        ],
        dispensaryName: "Mike Duncan's Dispensary",
        dispensaryId: "ed7b1622-837d-5efa-bb51-7549df9cf703",
        dispensaryAddress: "Toronto, ON, Canada",
        dispensaryStreetAddress: "4th Jones Avenue, 0162-12",
    },
];

export type Product = {
    productId: string;
    title: string;
    price: number;
    rating: number;
    type: "hybrid" | "indica" | "sativa" | undefined;
    sale?: number;
    originalPrice: number;
    discountPrice: number;
    thc: number;
    image: string[];
    count: number;
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
        thc: 20,
        count: 121,
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52977_m_500x.png?v=1690205435",
        ],
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
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52431_m_500x.png?v=1684325721",
        ],
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
        count: 121,
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/51930_m_500x.png?v=1698944531",
        ],
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
        type: "indica",
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52977_m_500x.png?v=1690205435",
        ],
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
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/51930_m_500x.png?v=1698944531",
        ],
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
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52977_m_500x.png?v=1690205435",
        ],
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
        type: "sativa",
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/51930_m_500x.png?v=1698944531",
        ],
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
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52977_m_500x.png?v=1690205435",
        ],
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
        type: "sativa",
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/51930_m_500x.png?v=1698944531",
        ],
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
        image: [
            "https://shopcannabisnl.com/cdn/shop/products/52977_m_500x.png?v=1690205435",
        ],
    },
];

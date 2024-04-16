export type OrderItem = {
  productId: string;
  productImage: string;
  productName: string;
  productQuantity: number;
  variation: string;
  mainAmount: number;
  discountAmount: number;
};
export type Order = {
  orderId: string;
  orderStatus: "completed" | "ready" | "failed";
  totalOrderCost: number;
  supplierName: string;
  supplierStreetAddress: string;
  supplierAddress: string;
  orderItems: OrderItem[];
  pickUpDate?: string;
  pickUpTime?: string;
  lastPaymentDate?: string;
  lastPaymentTime?: string;
  cancelDate?: string;
  cancelTime?: string;
};
export const orders: Order[] = [
  {
    orderId: "1725178261925A81",
    orderStatus: "completed",
    totalOrderCost: 51.75,
    pickUpDate: "07/24/2023",
    pickUpTime: "23:16",
    supplierName: "Mike’s Dispensary",
    supplierStreetAddress: "4th Jones Avenue, 0162-12",
    supplierAddress: "Toronto, ON, Canada",
    orderItems: [
      {
        productName: " 1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)",
        productQuantity: 1,
        mainAmount: 25.02,
        discountAmount: 21.25,
        productImage:
          "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
        variation: "100mg",
        productId: "0c0c895f-0e7b-5ba3-b6bc-6aad664f765f",
      },
      {
        productName: " 1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)",
        productQuantity: 1,
        mainAmount: 25.02,
        discountAmount: 21.25,
        productImage:
          "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
        variation: "100mg",
        productId: "0c0c895f-0e7b-5ba3-b6bc-6aad664f765f",
      },
      {
        productName: " 1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)",
        productQuantity: 1,
        mainAmount: 25.02,
        discountAmount: 21.25,
        productImage:
          "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
        variation: "100mg",
        productId: "0c0c895f-0e7b-5ba3-b6bc-6aad664f765f",
      },
    ],
  },
  {
    orderId: "1725178261925A82",
    orderStatus: "ready",
    totalOrderCost: 51.75,
    lastPaymentDate: "07/24/2023",
    lastPaymentTime: "23:16",
    supplierName: "Mike’s Dispensary",
    supplierStreetAddress: "4th Jones Avenue, 0162-12",
    supplierAddress: "Toronto, ON, Canada",
    orderItems: [
      {
        productName: " 1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)",
        productQuantity: 1,
        mainAmount: 25.02,
        discountAmount: 21.25,
        productImage:
          "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
        variation: "100mg",
        productId: "0c0c895f-0e7b-5ba3-b6bc-6aad664f765f",
      },
      {
        productName: " 1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)",
        productQuantity: 1,
        mainAmount: 25.02,
        discountAmount: 21.25,
        productImage:
          "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
        variation: "100mg",
        productId: "0c0c895f-0e7b-5ba3-b6bc-6aad664f765f",
      },
      {
        productName: " 1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)",
        productQuantity: 1,
        mainAmount: 25.02,
        discountAmount: 21.25,
        productImage:
          "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
        variation: "100mg",
        productId: "0c0c895f-0e7b-5ba3-b6bc-6aad664f765f",
      },
    ],
  },
  {
    orderId: "1725178261925A83",
    orderStatus: "failed",
    totalOrderCost: 51.75,
    cancelDate: "07/16/2023",
    cancelTime: "16:16",
    supplierName: "Mike’s Dispensary",
    supplierStreetAddress: "4th Jones Avenue, 0162-12",
    supplierAddress: "Toronto, ON, Canada",
    orderItems: [
      {
        productName: " 1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)",
        productQuantity: 1,
        mainAmount: 25.02,
        discountAmount: 21.25,
        productImage:
          "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
        variation: "100mg",
        productId: "0c0c895f-0e7b-5ba3-b6bc-6aad664f765f",
      },
      {
        productName: " 1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)",
        productQuantity: 1,
        mainAmount: 25.02,
        discountAmount: 21.25,
        productImage:
          "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
        variation: "100mg",
        productId: "0c0c895f-0e7b-5ba3-b6bc-6aad664f765f",
      },
      {
        productName: " 1:1 Strawberry Lemonade [10pk] (100mg CBD/100mg THC)",
        productQuantity: 1,
        mainAmount: 25.02,
        discountAmount: 21.25,
        productImage:
          "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
        variation: "100mg",
        productId: "0c0c895f-0e7b-5ba3-b6bc-6aad664f765f",
      },
    ],
  },
];

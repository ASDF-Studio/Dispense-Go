type SignsType = "USD" | "EUR";

export const getPriceSign = (sign: SignsType) => {
  const mapping = {
    USD: "$",
    EUR: "",
  };

  return mapping[sign];
};

import { Typography } from "@/core";
import { FC } from "react";
import { getPriceSign } from "../../helpers";

type Props = {
    price: number;
    withScript?: boolean;
    sign?: "USD";
    strikeThrough?: boolean
};

export const PriceTag: FC<Props> = ({
    price,
    withScript = true,
    sign = "USD",
    strikeThrough = false
}) => {
    const truncedPrice = ~~price.toFixed(2)
    let decimalPrice = price - truncedPrice

    return (
        <Typography intent="monsBold16" classname={[strikeThrough && "font-normal text-black/70"].join(" ")}>
            {getPriceSign(sign)}
            {truncedPrice}
            {withScript && <Typography intent={"monsSuper"} classname={[strikeThrough && "font-normal text-black/70"].join(" ")}>{decimalPrice.toFixed(2).toString().slice(1)}</Typography>}
        </Typography>

    );
};

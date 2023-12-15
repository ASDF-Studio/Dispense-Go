import { Typography } from "@/core";
import { FC } from "react";
import { getPriceSign } from "../../helpers";

type Props = {
    price: number;
    withScript?: boolean;
    sign?: "USD";
    strikeThrough?: boolean;
    classname?: string
    variant?: "small" | "big"
};

export const PriceTag: FC<Props> = ({
    price,
    withScript = true,
    sign = "USD",
    strikeThrough = false,
    classname = "",
    variant = "small"
}) => {
    const truncedPrice = ~~price.toFixed(2)
    let decimalPrice = price - truncedPrice

    const variantMapping = {
        "big": "text-[40px] leading-[40px]",
        "small": ""
    }

    return (
        <Typography intent="monsBold16" classname={[strikeThrough && "font-normal text-black/70", classname, variantMapping[variant]].join(" ")}>
            {getPriceSign(sign)}
            {truncedPrice}
            {withScript && <Typography intent={"monsSuper"} classname={[strikeThrough && "font-normal", variant === "big" && "text-[20px]"].join(" ")}>{decimalPrice.toFixed(2).toString().slice(1)}</Typography>}
        </Typography>

    );
};

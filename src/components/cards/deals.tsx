import { IconButton, Typography } from "@/core";
import { Flex, FlexColumn } from "@/layout";
import { FC } from "react";
import { Rating } from "./rating";
import { PriceTag } from "./price";
import { SaleTag, Tag, TypeBadge } from "./tag";
import { CustomImage } from "@/core/image";
import { AddtoCart } from "./add-cart";
import { AddToFavourite } from "./add-favourite";

type Props = {
  price?: number;
  title?: string;
  sellPercentage?: number;
  badge?: "hybrid" | "indica" | "sativa";
  oldPrice?: number;
  images?: string[];
  size?: "big" | "small";
  color?: "white" | "black";
};

const ProductImage = () => {
  return (
    <div className="relative w-fit">
      <AddToFavourite classname="absolute z-10 top-2.5 right-2.5" />
      <TypeBadge
        intent={"sativa"}
        classname="absolute z-10 top-2.5 left-2.5 "
      />
      <SaleTag percentage={15} classname="absolute z-10 bottom-2.5 left-2.5" />
      <CustomImage
        containerClassName="rounded-md shadow-product-card card-border w-[250px] h-[227px]"
        imageUrl="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
        width={250}
        height={227}
      />
    </div>
  );
};

export const ProductCard: FC<Props> = ({
  price,
  size = "small",
  color = "black",
}) => {
  return (
    <FlexColumn className="gap-l w-[250px]">
      <ProductImage />
      <Flex className="gap-2.5">
        <FlexColumn className="gap-2.5">
          <Typography
            intent="monsNormal13"
            classname={["w-[200px] line-clamp-2", color == "white" && "text-white"].join(
              " "
            )}
          >
            Pod Live Rosin 0.5g Pod Live Rosin 0.5g (T3)
          </Typography>
          <Flex className="gap-2.5 items-center">
            <PriceTag price={21.25} classname={color === "white" ? "text-white" : ""} />
            <PriceTag strikeThrough={true} price={21.0} classname={color === "white" ? "text-white" : ""} />{" "}
            <Tag text="THC 20%" type={color === "white" ? 1 : 0} />
          </Flex>
          <Rating classname={color === "white" ? "text-white" : ""} rating={3.3} count={121} />
        </FlexColumn>
        <AddtoCart />
      </Flex>
    </FlexColumn>
  );
};

const ProductImageBig = () => {
  return (
    <div className="relative w-fit">
      <AddToFavourite classname="absolute z-10 top-2.5 right-2.5" />
      <TypeBadge
        intent={"sativa"}
        classname="absolute z-10 top-2.5 left-2.5 "
      />
      <SaleTag percentage={15} classname="absolute z-10 bottom-2.5 left-2.5" />
      <CustomImage
        containerClassName="rounded-md shadow-product-card card-border w-[358px] h-[376px]"
        imageUrl="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
        width={250}
        height={227}
      />
    </div>
  );
};

export const ProductCardBig: FC<Props> = ({ price, size = "small", color }) => {
  return (
    <FlexColumn className="gap-l w-[358px]">
      <ProductImageBig />
      <Flex className="gap-2.5">
        <FlexColumn className="gap-2.5">
          <Typography intent="monsNormal13"
            classname={["w-[300px] line-clamp-2", color == "white" && "text-white"].join(
              " "
            )}
          >
            Pod Live Rosin 0.5g Pod Live Rosin 0.5g (T3)
          </Typography>
          <Flex className="gap-2.5 items-center">
            <PriceTag price={21.25} classname={color === "white" ? "text-white" : ""} />
            <PriceTag strikeThrough={true} price={21.0} classname={color === "white" ? "text-white" : ""} />{" "}
            <Tag text="THC 20%" type={color === "white" ? 1 : 0} />
          </Flex>
          <Rating classname={color === "white" ? "text-white" : ""} rating={3.3} count={121} />
        </FlexColumn>
        <AddtoCart />
      </Flex>
    </FlexColumn>
  );
};

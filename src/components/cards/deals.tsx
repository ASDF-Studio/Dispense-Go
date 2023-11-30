import { Typography } from "@/core";
import { Flex, FlexColumn } from "@/layout";
import { FC, memo } from "react";
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

type BadgeProps = {
  size: "big" | "small";
};

const ProductImage: FC<BadgeProps> = ({ size }) => {
  const sizes = {
    big: "w-[358px] h-[376px]",
    small: "w-[250px] h-[227px]",
  };

  return (
    <div className="relative w-fit">
      <AddToFavourite
        classname={[
          "absolute z-10",
          size === "small" ? "top-2.5 right-2.5" : "top-5 right-5",
        ].join(" ")}
      />
      <TypeBadge
        intent={"sativa"}
        classname={["absolute z-10", size === "small" ? " top-2.5 left-2.5" : " top-5 left-5"].join(" ")}
      />
      <SaleTag percentage={15} classname={["absolute z-10", size === "small" ? "bottom-2.5 left-2.5" : "bottom-5 left-5"].join(" ")} />
      <CustomImage
        containerClassName={[
          "rounded-md shadow-product-card card-border",
          sizes[size],
        ].join(" ")}
        imageUrl="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
        width={size === "small" ? 250 : 358}
        height={size === "small" ? 227 : 376}
      />
    </div>
  );
};

const ProductCard: FC<Props> = ({ price, size = "small", color = "black" }) => {

  return (
    <FlexColumn className={["gap-l"].join(" ")}>
      <ProductImage size={size} />
      <Flex className="gap-m justify-between">
        <FlexColumn className="gap-2.5">
          <Typography
            intent="monsNormal13"
            classname={["line-clamp-2", color == "white" && "text-white"].join(
              " "
            )}
          >
            Pod Live Rosin 0.5g Pod Live Rosin 0.5g (T3)
          </Typography>
          <Flex className="gap-2.5 items-center">
            <PriceTag
              price={21.25}
              classname={`${color === "white" && "text-white"}`}
            />
            <PriceTag
              strikeThrough={true}
              price={21.0}
              classname={color === "white" ? "text-white" : ""}
            />
            <Tag text="THC 20%" type={color === "white" ? 1 : 0} />
          </Flex>
          <Rating textColor={color} rating={3.3} count={121} />
        </FlexColumn>
        <AddtoCart />
      </Flex>
    </FlexColumn>
  );
};

export const MemoProductCard = memo(ProductCard);

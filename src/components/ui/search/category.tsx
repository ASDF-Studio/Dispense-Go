"use client";
import { Typography } from "@/core";
import { Flex, Pressable } from "@/layout";
import { SafeAreaSection } from "@/layout/spacing";
import { FC, useState } from "react";
import { Categories } from "../../../constants";

type CategoryCartProps = {
    text: string;
    isSelected?: boolean;
    imageURL?: string;
    isFirst?: boolean;
    isLast?: boolean;
    isChildBesideSelected?: boolean
    onClick?: () => void;
};

const CategoryCart: FC<CategoryCartProps> = ({
    text,
    isSelected = false,
    isFirst = false,
    isLast = false,
    imageURL,
    onClick,
    isChildBesideSelected = false
}) => {
    return (
        <Flex
            onClick={onClick}
            className={[
                "w-[171px] m:w-[178px] xl:w-[193.57px] 5xl:w-[231.8px] h-[86px] px-[11px] pt-[11px] relative shrink-0 hover:cursor-pointer",
                // isChildBesideSelected && "border-r-0",
                isFirst && "rounded-tl-[4px] border-l",
                isLast && "rounded-tr-[4px]",
                isSelected
                    ? "gradient-text-green rounded-t-[4px] border-none"
                    : "bg-white  border-r border-t border-border-whiteSmoke",
            ].join(" ")}
        >
            <Typography
                intent={"grskt16"}
                classname={[
                    "leading-[16px] tracking-[-0.56px] font-medium uppercase max-w-[130px]",
                    isSelected ? "text-white" : "text-text-black-70",
                ].join(" ")}
            >
                {text}
            </Typography>
            <img
                src={imageURL}
                alt="category image"
                className={[
                    "absolute top-0 -right-6 m:-right-4 xl:right-0 h-full w-auto",
                    !isSelected && "grayscale",
                ].join(" ")}
            />
        </Flex>
    );
};

export const CategorySection = () => {
    const [selected, setSelected] = useState(0);

    return (
        <Flex className="overflow-auto relative">
            {Categories.map(({ imageURL, text }, index) => (
                <CategoryCart
                    isChildBesideSelected={selected - 1 === index}
                    onClick={() => setSelected(index)}
                    imageURL={imageURL}
                    text={text}
                    isFirst={index === 0}
                    isLast={index === Categories.length - 1}
                    isSelected={index === selected}
                />
            ))}

        </Flex>

    );
};

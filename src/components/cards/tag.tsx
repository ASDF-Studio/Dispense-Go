import { Typography } from "@/core";
import { Flex, FlexCenter } from "@/layout";
import { Padding } from "@/layout/spacing";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons/faTag";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

type TagProps = {
    text: string;
};

export const Tag: FC<TagProps> = ({ text }) => {
    return (
        <FlexCenter className="bg-background-green-20 p-1">
            <Typography intent="monsBold10" classname="text-text-green leading-[10px]">
                {text}
            </Typography>
        </FlexCenter>
    );
};

export const ProductTags = () => {
    return <div></div>;
};

type Percentage = {
    percentage: number;
    classname?: string;
};

export const SaleTag: FC<Percentage> = ({ percentage = 0, classname = "" }) => {
    return (
        <FlexCenter
            className={[
                "p-[3px] tag-border rounded-sm bg-background-red-95 w-fit",
                classname,
            ].join(" ")}
        >
            <Flex className="items-center gap-0.5">
                <FontAwesomeIcon
                    icon={faTag}
                    className="fas fa-tag text-[12px] font-normal text-text-red"
                />
                <Typography
                    intent={"monsBold12"}
                    classname="text-text-red"
                >{`${percentage}% OFF`}</Typography>
            </Flex>
        </FlexCenter>
    );
};

type TypeProps = {
    type: string;
    classname?: string
};

export const TypeBadge: FC<TypeProps> = ({ type, classname }) => {
    return (
        <FlexCenter className={["py-0.5 px-[7px] badge-border w-fitb box-border rounded-[33px] bg-background-purple/70", classname].join(" ")}>
            <Flex className="gap-1 items-center">
                <FontAwesomeIcon
                    icon={faSun}
                    className="fas fa-tag text-[10px] text-text-lightPink font-black"
                />
                <Typography intent="monsBold12" classname="text-text-lightPink leading-[12px]">{type}</Typography>
            </Flex>
        </FlexCenter>
    );
};

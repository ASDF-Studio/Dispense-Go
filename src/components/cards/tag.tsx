import { Typography } from "@/core";
import { Flex, FlexCenter } from "@/layout";
import { Padding } from "@/layout/spacing";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCloudMoon, faSun, faYinYang } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons/faTag";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";

type TagProps = {
    text: string;
    type?: 0 | 1
};

export const Tag: FC<TagProps> = ({ text, type = 0 }) => {
    return (
        <FlexCenter className={["p-1", type === 0 ? "bg-background-green-20" : "bg-background-tagGreen"].join(" ")}>
            <Typography intent="monsBold10" classname={["leading-[10px]", type === 0 ? "text-text-green" : "text-primary-brand"].join(" ")}>
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

const typeVariants = cva("py-0.5 px-[7px] badge-border w-fit rounded-[33px]", {
    variants: {
        intent: {
            sativa: "bg-background-purple/70 border-border-purple",
            indica: "bg-background-blue/70 border-background-blue",
            hybrid: "bg-background-brown/70 border-background-brown"
        },
        defaultVariants: {
            intent: "sativa",
        },
    },
});

interface TypeProps extends VariantProps<typeof typeVariants> {
    classname?: string
};

export const TypeBadge: FC<TypeProps> = ({ intent, classname }) => {
    type Variants = Exclude<typeof intent, null | undefined>

    const Icons = {
        "sativa": {
            icon: faSun,
            classname: "fas fa-tag text-[10px] text-text-lightPink font-black"
        },
        "indica": {
            icon: faCloudMoon,
            classname: "fas fa-tag text-[10px] text-text-blueShade font-black"
        },
        "hybrid": {
            icon: faYinYang,
            classname: "fas fa-tag text-[10px] text-[#FDF2E7] font-black"
        }
    }

    const Color = {
        "sativa": "text-text-lightPink",
        "indica": "text-text-blueShade",
        "hybrid": "text-[#FDF2E7]"
    }



    return (
        <FlexCenter className={[typeVariants({ intent }), classname].join(" ")}>
            <Flex className="gap-1 items-center">
                <FontAwesomeIcon
                    icon={Icons[intent as Variants].icon}
                    //@ts-ignore
                    className={Icons[intent as Variants].classname}
                />
                <Typography intent="monsBold12" classname={["leading-[12px]", Color[intent as Variants]].join(" ")}>{intent}</Typography>
            </Flex>
        </FlexCenter>
    );
};

type RadiusProps = {
    radius: number
    size: "s" | "m" | "l"
}

export const RadiusTag: FC<RadiusProps> = ({ radius }) => {
    return <Flex className="p-1 bg-primary-green/10 w-fit">
        <Typography intent={"monsBold10"} classname="font-semibold  leading-2.5 text-primary-green lowercase">
            {`${radius} mi`}
        </Typography>

    </Flex>
}

type StoreCategoryProps = {
    category: "Medical & Recreational" | "Recreational"
}
export const CategoryTag: FC<StoreCategoryProps> = ({ category = "Medical & Recreational" }) => {
    return <Flex className="p-1 bg-background-grey w-fit">
        <Typography intent={"monsBold10"} classname="font-semibold  leading-2.5 text-text-black-70  capitalize">{category}</Typography>
    </Flex>
}
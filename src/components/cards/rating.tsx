import { Flex } from "@/layout";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as RegularStar } from "@fortawesome/free-regular-svg-icons";
import { FC } from "react";
import { Typography } from "@/core";

type Props = {
    rating: number;
    count?: number
    textColor: "black" | "white"
};

export const Rating: FC<Props> = ({ rating, count, textColor }) => {
    const textColorMapping = {
        "black": "text-black",
        white: "text-white"
    }

    return (
        <Flex className="gap-1 items-center">
            <Flex className="gap-0.5">
                {Array(5)
                    .fill(0)
                    .map((_, index) => {
                        return (
                            <FontAwesomeIcon
                                icon={index + 1 < rating ? faStar : RegularStar}
                                className={`fas fa-star text-[14px] font-extrabold tracking-[2.03px] text-primary-brand leading-[14px]`}
                            />
                        );
                    })}
            </Flex>
            <Typography intent={"monsNormal"} classname={["leading-[14px]", textColorMapping[textColor]].join(" ")}>{`${rating}`} {count ? `(${count})` : ""}</Typography>
        </Flex>
    );
};

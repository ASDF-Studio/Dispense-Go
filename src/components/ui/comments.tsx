import { Rating } from "@/cards/rating";
import { Button, Typography } from "@/core";
import { Flex, FlexColumn } from "@/layout";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as RegularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconHandler } from "../../utils/icon";
import { SafeAreaSection } from "@/layout/spacing";

const CommentCard = () => {
    return (
        <FlexColumn className="p-6 rounded-md border border-border-whiteSmoke bg-white gap-5 shadow-navbar">
            <Flex className="justify-between">
                <Flex className="gap-0.5">
                    {Array(5)
                        .fill(0)
                        .map((_, index) => {
                            return (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={index + 1 < 4 ? faStar : RegularStar}
                                    className={[
                                        `fas fa-star text-[14px] font-extrabold tracking-[2.03px]  leading-[14px]`,
                                        "text-primary-brand",
                                    ].join(" ")}
                                />
                            );
                        })}
                </Flex>
                <Flex>
                    {/* <AccountIcon/> */}
                    <Typography
                        intent={"mons15"}
                        classname="leading-[19.5px] font-normal"
                    >
                        San P. <Typography classname="text-text-black-40">|</Typography> Oct
                        04, 2022
                    </Typography>
                </Flex>
            </Flex>
            <Typography
                classname="leading-[23.4px] font-semibold text-primary-black"
                intent={"mons18"}
            >
                Wake and bake for an amazing and sunny day, no matter the weather.
            </Typography>
            <Typography
                classname="leading-[22.5px] font-normal text-primary-black"
                intent={"mons15"}
            >
                Strain: Super Lemon Haze Type: Sativa-dominant (80% Sativa) Genetics:
                Lemon Skunk x Super Silver Haze Notes: Spicy lemon smell with hazy,
                wispy nugs covered in hairs. Slow onset that starts with a light
                excitement/euphoria and a defined head high. Very focused and cerebral,
                giggly, and uplifted. Great for daytime and going out. Defined paranoia
                in certain situations, as well as heavy munchies. After the peak, a mild
                and energetic come down that lasts a long time. Great for depression and
                lethargy though not necessarily for anxiety or stress. 8/10
            </Typography>
            <Button
                intent={"text"}
                text="Report"
                className="self-end"
                textClassname="font-normal leading-[18px] underline text-primary-black"
                typographyVariant="mons15"
            />
        </FlexColumn>
    );
};

export const Comments = () => {
    return (
        <SafeAreaSection>
            <FlexColumn>
                <div className="h-[1px] bg-border-whiteSmoke" />
                <FlexColumn className="max-w-screen-margin mx-auto w-full gap-6 pt-[35px] xl:pt-[47px] pb-12 xl:pb-[142px]">
                    <FlexColumn className="gap-2.5">
                        <Typography
                            intent={"grstk24"}
                            classname="uppercase leading-[24px] tracking-[-0.84px] font-medium text-black"
                        >
                            Customer reviews
                        </Typography>
                        <Rating
                            textColor="black"
                            starColor="black"
                            rating={4}
                            count={212}
                            extend
                        />
                    </FlexColumn>
                    <Flex className="gap-2 justify-end">
                        <Typography intent={"mons15"} classname="font-normal leading-[19.5px] text-primary-black"> Sort by <Typography classname="font-bold">
                            Newest First
                        </Typography></Typography>
                        <IconHandler name="chevrondown" />
                    </Flex>
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </FlexColumn>
            </FlexColumn>
        </SafeAreaSection>
    );
};

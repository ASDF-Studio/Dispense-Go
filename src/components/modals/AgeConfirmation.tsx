"use client";

import { Button, Typography } from "@/core";
import { BaseModal } from ".";
import { useState } from "react";
import { Flex, FlexColumn } from "@/layout";
import Image from "next/image";

export const AgeConfirmationModal = () => {
    const [state, setState] = useState(true);
    const [showWarning, setShowWarning] = useState(false);

    return (
        <BaseModal
            open={state}
            overlayClose={false}
            setOpen={setState}
            contentStyle={{
                maxWidth: "800px",
                width: "100%",
                minHeight: "533px",
                background: "transparent",
                justifyContent: "center",
                display: "flex",
                padding: "0 9px"
            }}
        >
            <Flex className="bg-primary-modal max-w-[692px] rounded-2xl p-6 sm:p-16 h-full">
                {showWarning ? (
                    <FlexColumn className="items-center gap-6 sm:gap-[27px] justify-center">
                        <Image
                            alt="dispense logo"
                            width={70}
                            height={99}
                            src={"/assets/logo-without-text.png"}
                        />
                        <Typography
                            intent={"grskt32"}
                            classname="leading-[38.4px] text-white font-medium text-center tracking-[-1.12px] sm:tracking-normal"
                        >
                            Sorry, you must be at least 21 years old to visit this site
                        </Typography>
                    </FlexColumn>
                ) : (
                    <FlexColumn className="items-center gap-6 sm:gap-[27px] justify-center">
                        <Image
                            alt="dispense logo"
                            width={70}
                            height={99}
                            src={"/assets/logo-without-text.png"}
                        />
                        <Typography
                            intent={"header2"}
                            classname="tracking-[-1.26px] sm:tracking-[-1.47px] leading-[43.2px] sm:leading-[50.4px] text-white font-semibold text-center"
                        >
                            Are you at least 21 years old?
                        </Typography>
                        <Typography
                            intent={"mons15"}
                            classname="leading-[19.5px] font-medium text-white text-center"
                        >
                            In order to visit this site, we need to confirm you are of legal
                            age.
                        </Typography>
                        <FlexColumn className="w-full gap-4">
                            <Button
                                intent={"filled"}
                                onClick={() => setState(false)}
                                text="Yes, i am over 21 years old"
                                typographyVariant="grstk15"
                                textClassname="text-text-black uppercase sm:leading-[15px] leading-[18px]"
                            />
                            <Button
                                intent={"outline"}
                                onClick={() => setShowWarning(true)}
                                text="no, i’m not"
                                textClassname="uppercase text-white"
                                typographyVariant="grstk15"
                            />
                        </FlexColumn>
                    </FlexColumn>
                )}
            </Flex>
        </BaseModal>
    );
};

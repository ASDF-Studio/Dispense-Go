"use client"
import { Dispatch, FC, SetStateAction } from "react";
import { BaseModal } from ".";
import { Button, IconButton, Typography } from "@/core";
import { Flex, FlexColumn } from "@/layout";
import { Divider } from "@/divider";
import { BoxIcon, EmailIcon, Filter, HouseIcon, PhoneIcon, ShopIcon, StoreIcon } from "../../svg";
import Image from "next/image";

type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

interface checkboxDetails {
    label: string;
    children: string[];
}

type ItemType = {
    label: string
    isChildren?: boolean
}

const Item: FC<ItemType> = ({ label, isChildren = false }) => {
    return <Flex className={['gap-2', isChildren && "pl-4"].join(" ")} >
        
         className="accent-black" />
        <Typography classname="text-text-black-100 leading-[13px] font-medium tracking-[1.885px] uppercase" intent={"grstk13"}>{label}</Typography>
    </Flex >
}


export const StoreInfoModal: FC<Props> = ({ open = false, setOpen }) => {

    const data: checkboxDetails[] = [
        { label: 'All', children: ['indica', 'sativa', 'hybrid'] },
        { label: 'FLOWERS', children: [] },
        { label: 'EDIBLES', children: [] },
        { label: 'CONCENTRATES', children: [] },
        { label: 'CBD', children: [] },
        { label: 'PRE-ROLLS', children: [] },
    ];


    return (
        <BaseModal
            contentStyle={{
                top: "0",
                bottom: "unset",
                left: "unset",
                right: "0px",
                border: 0,
                opacity: open ? 1 : 0,
                transform: "unset",
                borderRadius: 0,
                padding: 0,
                height: "100%",
                transition: "0.3s",
            }}
            open={open}
            overlayClose={true}
            setOpen={setOpen}
        >

            <FlexColumn className="w-[320px] m:w-[387px] p-6 gap-6">
                <Flex className="justify-between items-center">
                    <Typography intent={"grskt18"} classname="text-text-black-100 font-medium tracking-[-0.63px] leading-[18px] w-[209px] m:w-auto">Rendal Store - Jones Ave</Typography>
                    <IconButton onClick={() => setOpen(false)} icon={<Image alt="dispense logo" width={15} height={24} src={"/assets/icons/x-mark.svg"} />} className="text-[24px] font-light text-black" />
                </Flex>
                <FlexColumn className="gap-2">
                    <Flex className="items-center gap-2">
                        <StoreIcon />
                        <Typography classname="leading-[19.5px] font-medium text-text-black-100" intent={"mons15"}>
                            About
                        </Typography>
                    </Flex>
                    <Typography classname="leading-[22.5px] text-text-black-70 font-medium" intent={"mons15"}>
                        Rendal Store is a cannabis dispensary that offers a wide variety of products, including flower, concentrates, edibles, and topicals. We are committed to providing our customers with the highest quality cannabis products and services, and we are proud to be one of the leading dispensaries in the area. Our team of experienced budtenders is passionate about cannabis and is here to help you find the perfect products for your needs. We offer a variety of educational resources to help you learn more about cannabis and its many benefits, and we are always happy to answer your questions.
                    </Typography>
                </FlexColumn>
                <Divider />
                <FlexColumn>
                    <Flex className="gap-2">
                        <BoxIcon  className="shrink-0"/>
                        <FlexColumn>
                            <Typography classname="leading-[19.5px] font-medium text-text-black-100" intent={"mons15"}>
                                Dispensaries’ Location
                            </Typography>
                            <Typography classname="leading-[22.5px] text-text-black-70 font-medium" intent={"mons15"}>
                                4th Jones Avenue, 0162-12, Toronto, ON, Canada
                            </Typography>
                        </FlexColumn>

                    </Flex>
                </FlexColumn>
                <Divider />

                <Flex className="gap-2">
                    <HouseIcon className="shrink-0" />
                    <FlexColumn>
                        <Typography classname="leading-[19.5px] font-medium text-text-black-100" intent={"mons15"}>
                            Warehouse’ Location
                        </Typography>
                        <Typography classname="leading-[22.5px] text-text-black-70 font-medium" intent={"mons15"}>
                            23000 116 Ave, Maple Ridge, British Columbia
                        </Typography>
                    </FlexColumn>
                </Flex>

                <Flex className="gap-2">
                    <PhoneIcon className="shrink-0" />
                    <FlexColumn>
                        <Typography classname="leading-[19.5px] font-medium text-text-black-100" intent={"mons15"}>
                            Phone Number
                        </Typography>
                        <Typography classname="leading-[22.5px] text-text-black-70 font-medium" intent={"mons15"}>
                            +1-303-555-0194
                        </Typography>
                    </FlexColumn>
                </Flex>
                <Flex className="gap-2">
                    <EmailIcon className="shrink-0" />
                    <FlexColumn>
                        <Typography classname="leading-[19.5px] font-medium text-text-black-100" intent={"mons15"}>
                            Email Address
                        </Typography>
                        <Typography classname="leading-[22.5px] text-text-black-70 font-medium" intent={"mons15"}>
                            rendalstore@dispense.com
                        </Typography>
                    </FlexColumn>
                </Flex>

            </FlexColumn>


        </BaseModal>
    );
};

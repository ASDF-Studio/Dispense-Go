"use client"
import { Dispatch, FC, SetStateAction } from "react";
import { BaseModal } from ".";
import { Button, IconButton, Typography } from "@/core";
import { Flex, FlexColumn } from "@/layout";
import { Divider } from "@/divider";
import { Filter } from "../../svg";
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
        <input type="checkbox" className="accent-black" />
        <Typography classname="text-text-black-100 leading-[13px] font-medium tracking-[1.885px] uppercase" intent={"grstk13"}>{label}</Typography>
    </Flex >
}


export const FilterModal: FC<Props> = ({ open = false, setOpen }) => {

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
                maxWidth: "258px",
                borderRadius: 0,
                width: "100%",
                padding: 0,
                height: "100%",
                transition: "0.3s",
            }}
            open={open}
            overlayClose={true}
            setOpen={setOpen}
        >
            <FlexColumn className="p-6 gap-8">
                <Flex className="justify-between">
                    <Button text='filter' withWidth={false} startIcon={<Filter />} />
                    <IconButton onClick={() => setOpen(false)} icon={<Image alt="dispense logo" width={15} height={24} src={"/assets/icons/x-mark.svg"} />} className="text-[24px] font-light text-black" />
                </Flex>
                <FlexColumn className='gap-6 w-full border-r border-border-whiteSmoke'>
                    {data.map(({ children, label }) => {
                        return <FlexColumn className="gap-6 w-full">
                            <Item label={label} />
                            {children.map((el) => {
                                return <Item label={el} isChildren={true} />
                            })}
                            <Divider />
                        </FlexColumn>
                    })}
                </FlexColumn>
            </FlexColumn>

        </BaseModal>
    );
};

"use client";

import { Button, IconButton, Typography } from "@/core";
import { BaseModal } from ".";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Flex, FlexColumn } from "@/layout";
import Image from "next/image";
import GoogleMapReact from "google-map-react"
import { Input } from "@/core/input";
import { CustomIconHandler } from "../../utils/icon";

type Props = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export const LocationModal: FC<Props> = ({ open = true, setOpen }) => {
    const [location, setLocation] = useState<{
        lat: number, lng: number
    }>({
        lat: 10.99835602,
        lng: 77.01502627
    })

    const getUserLocation = (position: GeolocationPosition) => {
        setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })

    }

    const handleUserLocation = () => {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getUserLocation)
        } else {
            console.log("not supported")
        }
    }


    return (
        <BaseModal
            open={open}
            overlayClose={false}
            setOpen={setOpen}
            contentStyle={{
                maxWidth: "800px",
                width: "100%",
                // minHeight: "533px",
                background: "transparent",
                justifyContent: "center",
                display: "flex",
                padding: "0 9px"
            }}
        >
            <FlexColumn className="bg-white max-w-[609px] rounded-[4px] py-6  w-full gap-6">
                <Flex className="items-center justify-between px-6">
                    <Typography intent={"grskt18"} classname="text-text-black-100 tracking-[-0.63px] leading-[18px] font-medium">
                        Change Location
                    </Typography>
                    <IconButton onClick={() => setOpen(false)} icon={<Image alt="dispense logo" width={20} height={24} src={"/assets/icons/x-mark.svg"} />} className="" />
                </Flex>
                <Flex className="px-6">
                    <Input
                        placeholder="Eugene, OR"
                        startingIcon={<img src="/assets/icons/location-dot.svg" />}
                        containerClassname="p-2 rounded-md border border-border-whiteSmoke  bg-background-whiteGrey w-full"
                        classname="bg-transparent search-input-1 w-full"
                        endingIcon={<img src="/assets/icons/location-active.svg" className="hover:cursor-pointer" onClick={handleUserLocation} />}
                    />
                </Flex>

                <Flex className="h-[266px]">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCH1Ysai5MbRL7CfwvgqREXB6v5NaOgIKc" }}
                        defaultCenter={location}
                        defaultZoom={11}
                    />
                </Flex>
                <Flex className="px-6">
                    <Button text="Confirm" onClick={() => setOpen(false)} intent={"filled"} typographyVariant="buttons" classname="w-full" /></Flex>
            </FlexColumn>
        </BaseModal>
    );
};


"use client"
import { useSearchParams } from "next/navigation";
import { Flex } from ".";
import { Links, PaddingX } from "../../constants";
import Link from "next/link";
import { Typography } from "@/core";
import { FC } from "react";
import { useQueryString } from "../../hooks/useQueryString";

type LinkType = {
    text: string;
    icon: JSX.Element;
    href: string;
    isActive?: boolean
};



export const CustomLink: FC<LinkType> = ({ text, icon, href, isActive = false }) => {

    return (
        <Link href={href} className="h-full">
            <Flex className={["gap-2 h-full items-center border-y-4 border-t-transparent px-5", isActive ? "border-b-primary-brand" : "border-b-transparent"].join(" ")}>
                {icon}
                <Typography intent="navbar13" classname="uppercase text-text-black-100">
                    {text}
                </Typography>
            </Flex>
        </Link>
    );
};

export const NavLinks = () => {
    const { param } = useQueryString("filter")

    return <Flex className="relative pt-[65px] shadow-navbar z-10">
        <nav
            className={[
                "flex gap-5 w-full mxl:gap-0 h-[51px] items-center justify-between overflow-auto relative",
                PaddingX,
            ].join(" ")}
        >
            {Links.map(({ text, icon, href }, index) => {
                return (
                    <CustomLink
                        isActive={param === text}
                        text={text}
                        key={index}
                        icon={icon}
                        href={href}
                    />
                );
            })}
        </nav>
        <div className="xl:hidden gradient-menu h-[51px] absolute w-10 top-[65px] right-0" />
    </Flex>
}
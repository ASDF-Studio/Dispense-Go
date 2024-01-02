"use client"

import { FC, useState } from "react";
import Link from "next/link";
import { Button, IconButton, Typography } from "@/core";
import { Flex, FlexColumn } from ".";
import { Logo } from "@/logo";
import { ProductSearch } from "@/core/input";
import { SafeScreen } from "./spacing";
import { Bars, LocationBar, AccountIcon, CartIcon } from "../../svg";
import { Links, PaddingX } from "../../constants";
import { CustomIconHandler, IconHandler } from "../../utils/icon";
import { Drawer } from "@/modals/drawer";
import { useCart } from "../../app/contexts/cart";
import { LoginModal } from "@/modals/login";

type Props = {};

type LinkType = {
    text: string;
    icon: JSX.Element;
    href: string
};

const CustomLink: FC<LinkType> = ({ text, icon, href }) => {
    return (
        <Link href={href}>
            <Flex className="gap-2">
                {icon}
                <Typography intent="navbar13" classname="uppercase text-text-black-100">
                    {text}
                </Typography>
            </Flex>
        </Link>
    );
};

const LocationIndicator = () => {
    return <Flex className="items-center xl:gap-m">
        <IconButton icon={
            <LocationBar />
        } />
        <Typography intent={"mons15"} classname="text-primary-black hidden xl:block">
            Eugene, OR
        </Typography>
        <Button intent={"text"} typographyVariant="grstk10" text="CHANGE" textClassname="text-primary-brand hidden xl:block" withWidth={false} />
    </Flex>
}


const ShoppingCart = () => {
    const { toggleCartModal } = useCart()
    return <IconButton icon={<CustomIconHandler name="cart-icon" />} onClick={toggleCartModal} />
}

const Account = () => {
    return <Flex className="gap-2.5 m:gap-4 xl:gap-4">
        <Link href={"/account"}>
            <AccountIcon />
        </Link>
        <ShoppingCart />
    </Flex>
}

type HeaderProps = {
    withSearchBar: boolean
}

export const Header: FC<HeaderProps> = ({ withSearchBar }) => {
    const [showDrawer, setShowDrawer] = useState(false)
    const [showModal, setShowModal] = useState<boolean>(true)


    return (
        <header>
            <SafeScreen classname="bg-white relative z-20" withSpacing={false}>
                <FlexColumn className="w-full">
                    <Flex className={["items-center justify-between border-b border-b-solid border-border-whiteSmoke py-l", PaddingX].join(" ")}>
                        <Flex className="items-center gap-2.5 m:gap-6 xl:gap-8">
                            <IconButton icon={<Bars />} onClick={() => setShowDrawer(true)} />
                            <Logo />
                        </Flex>
                        {withSearchBar && <Link href={"/search"}><ProductSearch containerClassname="hidden m:flex" /></Link>}
                        <Flex className="gap-2.5 m:gap-4 xl:gap-6">
                            <LocationIndicator />
                            <Account />
                        </Flex>
                    </Flex>
                    <Flex className="relative">
                        <nav className={["flex gap-5 w-full mxl:gap-0 h-[51px] items-center justify-between overflow-auto shadow-menu relative", PaddingX].join(" ")}>
                            {Links.map(({ text, icon, href }, index) => {
                                return <CustomLink text={text} key={index} icon={icon} href={href} />;
                            })}
                        </nav>
                        <div className="xl:hidden gradient-menu h-[51px] absolute w-10 top-0 right-0" />
                    </Flex>
                </FlexColumn>
            </SafeScreen>
            {/* <LoginModal open={showModal} setOpen={setShowModal} /> */}
            <Drawer open={showDrawer} setOpen={setShowDrawer} />
        </header>
    );
};

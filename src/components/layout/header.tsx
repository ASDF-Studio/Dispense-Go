"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Button, IconButton, Typography } from "@/core";
import { Flex, FlexColumn } from ".";
import { Logo } from "@/logo";
import { ProductSearch } from "@/core/input";
import { SafeScreen } from "./spacing";
import { Bars, LocationBar, AccountIcon, CartIcon, UserIcon, BoxIcon, ExitIcon, BoxRegular } from "../../svg";
import { Links, PaddingX } from "../../constants";
import { CustomIconHandler, IconHandler } from "../../utils/icon";
import { Drawer } from "@/modals/drawer";
import { useCart } from "../../contexts/cart";
import { LoginModal } from "@/modals/login";
import { LocationModal } from "@/modals/location";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "../../redux/hook";
import { toggleCartModal } from "../../redux/cart/action.creators";

type Props = {};

const LocationIndicator = () => {
  const [state, setState] = useState(false)
  return (
    <Flex className="items-center xl:gap-m">
      <LocationModal open={state} setOpen={setState} />
      <IconButton icon={<LocationBar />} onClick={() => setState(true)} />
      <Typography
        intent={"mons15"}
        classname="text-primary-black hidden xl:block"
      >
        Eugene, OR
      </Typography>
      <Button
        intent={"text"}
        onClick={() => setState(true)}
        typographyVariant="grstk10"
        text="CHANGE"
        textClassname="text-primary-brand hidden xl:block"
        withWidth={false}
      />
    </Flex>
  );
};

const ShoppingCart = () => {
  const dispatch = useAppDispatch()
  return (
    <IconButton
      icon={<CustomIconHandler name="cart-icon" />}
      onClick={()=>{dispatch(toggleCartModal())}}
    />
  );
};

const Account = () => {
  const [showAccountModal, setShowAccountModal] = useState(false)

  const listenClickEvent = (e: any) => {
    if (showAccountModal) {
      const el = document.getElementById('user-menu')
      if (el && !el.contains(e.target)) {
        setShowAccountModal(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', listenClickEvent)

    return () => document.removeEventListener('click', listenClickEvent)
  }, [showAccountModal])


  return (
    <Flex className="gap-2.5 m:gap-4 xl:gap-4">
      <Flex id={"user-menu"} className="relative">
        <AccountIcon className="hover:cursor-pointer" onClick={() => setShowAccountModal(!showAccountModal)} />
        {showAccountModal && <FlexColumn className="top-[40px] absolute z-10  right-0 bg-white w-[255px] border border-border-whiteSmoke rounded-[4px] shadow-modal">
          <Link href={"/account"} onClick={() => setShowAccountModal(false)}>
            <Flex className="p-l gap-2 justify-between hover:cursor-pointer hover:opacity-50">
              <Typography classname="capitalize leading-[19.5px] font-medium text-text-black-100" intent={"mons15"}>
                Account
              </Typography>
              <UserIcon />
            </Flex>
          </Link>
          <Link href={"/account/orders"} onClick={() => setShowAccountModal(false)}>
            <Flex className="p-l gap-2 justify-between hover:cursor-pointer hover:opacity-50">
              <Typography classname="capitalize leading-[19.5px] font-medium text-text-black-100" intent={"mons15"}>
                My Orders
              </Typography>
              <BoxRegular />
            </Flex>
          </Link>
          <Flex className="p-l gap-2 justify-between hover:cursor-pointer hover:opacity-50">
            <Typography classname="capitalize leading-[19.5px] font-medium text-text-black-100" intent={"mons15"}>
              Log Out
            </Typography>
            <ExitIcon />
          </Flex>
        </FlexColumn>}
      </Flex>

      <ShoppingCart />

    </Flex>
  );
};

type HeaderProps = {
  withSearchBar: boolean;
  withNavigation: boolean;
};

export const Header: FC<HeaderProps> = ({ withSearchBar, withNavigation = true }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(true);

  return (
    <header>
      <SafeScreen classname="bg-white z-50 w-full fixed" withSpacing={false}>
        <FlexColumn className="w-full">
          <Flex
            className={[
              "items-center justify-between border-b border-b-solid border-border-whiteSmoke py-l h-[65px]",
              PaddingX,
            ].join(" ")}
          >
            <Flex className="items-center gap-2.5 m:gap-6 xl:gap-8">
              <IconButton icon={<Bars />} onClick={() => setShowDrawer(true)} />
              <Logo />
            </Flex>
            {withSearchBar && (
              <Link href={"/search"} className="hover:cursor-pointer">
                <Button text="advanced search" classname="hidden m:flex !bg-background-primary hover:!bg-primary-hover" intent={"filled"} typographyVariant="buttons" icon={<IconHandler name="faSearch" />} />
                {/* <ProductSearch containerClassname="hidden m:flex" classname="hover:cursor-pointer" /> */}
              </Link>
            )}
            <Flex className="gap-2.5 m:gap-4 xl:gap-6">
              <LocationIndicator />
              <Account />
            </Flex>
          </Flex>
        </FlexColumn>
      </SafeScreen>
      {/* <LoginModal open={showModal} setOpen={setShowModal} /> */}
      <Drawer open={showDrawer} setOpen={setShowDrawer} />
    </header>
  );
};

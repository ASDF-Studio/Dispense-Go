import { FC } from "react";
import { CustomLink, Header } from "./header";
import { Footer } from "./footer";
import { NewsEvents } from "./news-events";
import { FAQ } from "@/faq";
import { AgeConfirmationModal } from "@/modals/AgeConfirmation";
import { CartContextProvider } from "../../app/contexts/cart";
import { Flex } from ".";
import { Links, PaddingX } from "../../constants";

type FooterItem = "faq" | "news" | "footer";

type Props = {
  children?: React.ReactNode;
  footerItems?: FooterItem[];
  withSearch?: boolean
  withNavigation?: boolean
};

const NavLinks = () => {
  return <Flex className="relative pt-[65px]">
    <nav
      className={[
        "flex gap-5 w-full mxl:gap-0 h-[51px] items-center justify-between overflow-auto shadow-menu relative",
        PaddingX,
      ].join(" ")}
    >
      {Links.map(({ text, icon, href }, index) => {
        return (
          <CustomLink
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

export const MainLayout: FC<Props> = ({
  children,
  footerItems = ["faq", "footer", "news"],
  withSearch = true,
  withNavigation = true
}) => {
  return (
    <>
      <CartContextProvider>
        <Header withNavigation={withNavigation} withSearchBar={withSearch} />
        {/* <AgeConfirmationModal /> */}
        {withNavigation ? <NavLinks /> : <div className="pt-[65px]" />}
        <main>{children}</main>
        {footerItems.includes("faq") && <FAQ />}
        {footerItems.includes("news") && <NewsEvents />}
        {footerItems.includes("footer") && <Footer />}
      </CartContextProvider>
    </>
  );
};

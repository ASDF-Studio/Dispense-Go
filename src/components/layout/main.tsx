import { FC } from "react";
import { CustomLink, Header } from "./header";
import { Footer } from "./footer";
import { NewsEvents } from "./news-events";
import { FAQ } from "@/faq";
import { CartContextProvider } from "../../contexts/cart";
import { NavLinks } from "./navbar";

type FooterItem = "faq" | "news" | "footer";

type Props = {
  children?: React.ReactNode;
  footerItems?: FooterItem[];
  withSearch?: boolean
  withNavigation?: boolean
};


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

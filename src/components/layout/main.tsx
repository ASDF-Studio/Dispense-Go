import { FC } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { NewsEvents } from "./news-events";
import { FAQ } from "@/faq";
import { AgeConfirmationModal } from "@/modals/AgeConfirmation";
import { CartContextProvider } from "../../app/contexts/cart";

type FooterItem = "faq" | "news" | "footer";

type Props = {
  children?: React.ReactNode;
  footerItems?: FooterItem[];
};

export const MainLayout: FC<Props> = ({
  children,
  footerItems = ["faq", "footer", "news"],
}) => {
  return (
    <>
      <CartContextProvider>
        <Header />
        {/* <AgeConfirmationModal /> */}
        <main>{children}</main>
        {footerItems.includes("faq") && <FAQ />}
        {footerItems.includes("news") && <NewsEvents />}
        {footerItems.includes("footer") && <Footer />}
      </CartContextProvider>
    </>
  );
};

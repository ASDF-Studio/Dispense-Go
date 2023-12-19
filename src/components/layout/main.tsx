import { FC } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { NewsEvents } from "./news-events"
import { FAQ } from "@/faq"
import { AgeConfirmationModal } from "@/modals/AgeConfirmation"
import { CartContextProvider } from "../../app/contexts/cart"

type Props = {
    children?: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
    return <>
        <CartContextProvider>
            <Header />
            {/* <AgeConfirmationModal /> */}
            <main>
                {children}
            </main>
            <FAQ />
            <NewsEvents />
            <Footer />
        </CartContextProvider>
    </>
}
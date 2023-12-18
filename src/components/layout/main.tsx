import { FC } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { NewsEvents } from "./news-events"
import { FAQ } from "@/faq"
import { AgeConfirmationModal } from "@/modals/AgeConfirmation"

type Props = {
    children?: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
    return <>
        <Header />
        <AgeConfirmationModal />
        <main>
            {children}
        </main>
        <FAQ />
        <NewsEvents />
        <Footer />
    </>
}
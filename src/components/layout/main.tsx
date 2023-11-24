import { FC } from "react"
import { Header } from "./header"
import { Footer } from "./footer"

type Props = {
    children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
    return <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
}
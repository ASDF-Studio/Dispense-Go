"use-client"
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { FC } from "react";

type Props = {
    children?: React.ReactNode
}

export const AnimatedDiv: FC<Props> = ({ children }) => {
    const { scrollXProgress } = useScroll()
    console.log(scrollXProgress)

    return <motion.div animate={{
        // scale: 3,
        transition: {
            duration: 1000
        }
    }}>{children}</motion.div>
}
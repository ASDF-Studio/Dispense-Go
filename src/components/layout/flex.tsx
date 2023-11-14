import { FC } from "react"

type Props = {
    children: React.ReactNode
    className?: string
}

export const Flex: FC<Props> = ({ children, className = "" }) => {
    return <div className={[
        `flex`, className
    ].join(" ")}>{children}</div>
}

export const FlexColumn: FC<Props> = ({ children, className }) => {
    return <div className={[
        `flex flex-col`, className
    ].join(" ")}> {children}</ div>
}

export const FlexCenter: FC<Props> = ({ children, className }) => {
    return <div className={[
        `flex items-center justify-center`, className
    ].join(" ")}> {children}</ div>
}
import { ButtonHTMLAttributes, FC } from "react"

type Props = {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export const Flex: FC<Props> = ({ children, className = "", onClick }) => {
    return <div onClick={onClick} className={[
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


export const Pressable: FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
    return <button {...rest}>{children}</button>
}
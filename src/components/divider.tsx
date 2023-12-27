import { FC } from "react"

type Props = {
    color?: "primary" | "whitesmoke" | "lightGreen" | "white"
    type?: "dashed" | "normal"
    classname?: string
}

export const Divider: FC<Props> = ({ color = "whitesmoke", type, classname = "" }) => {
    const classMapping = {
        "primary": "bg-primary-brand",
        whitesmoke: "bg-border-whiteSmoke",
        lightGreen: "bg-background-lightGreen",
        white: "bg-white"
    }

    if (type === "dashed") {
        return <svg xmlns="http://www.w3.org/2000/svg" className={classname} height="1" viewBox="0 0 897 1" fill="none">
            <path opacity="0.5" d="M0.5 0.5H896.5" stroke="#7AC80E" stroke-dasharray="8 8" />
        </svg>
    }

    return <div className={["h-[1px]", classMapping[color], classname].join(" ")} />
}
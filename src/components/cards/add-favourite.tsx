import { IconButton } from "@/core"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"

type Props = {
    classname?: string
}

export const AddToFavourite: FC<Props> = ({ classname }) => {
    return <IconButton
        icon={
            <FontAwesomeIcon
                icon={faHeart}
                className="fas fa-shopping-basket text-[20px] font-black leading-5 tracking-[2.9px] text-white/60"
            />
        }
        classname={["w-5 h-5", classname].join(" ")}
    />
}
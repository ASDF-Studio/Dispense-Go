import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faArrowRight, faBars, faBox, faCannabis, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"

type Props = {
    name: string
    classname?: string
}

const getIcon = (name: string): IconProp => {
    switch (name) {
        case "box":
            return faBox
        case "bars":
            return faBars
        case "arrow-right":
            return faArrowRight
        case "canabis":
            return faCannabis
        case "chevronup":
            return faChevronUp
        case "chevrondown":
            return faChevronDown
        default:
            return faBox
    }
}

export const IconHandler: FC<Props> = ({ name, classname = "" }) => {
    const icon = getIcon(name)

    return <FontAwesomeIcon icon={icon} className={["text-[14px]", classname].join(" ")} />
}
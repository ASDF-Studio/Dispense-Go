import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core"
import { faArrowRight, faBars, faBox, faCannabis, faChevronDown, faChevronUp, faCircleCheck, faCloudMoon, faMinus, faPlus, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"
import { BoxIcon, CanabisIcon, CandyIcon, CartIcon, ChevronDownIcon, ChevronUpIcon, CrownIcon, Envelope, PanelIcon, StoreIcon, TagIcon, TagSaleIcon, WaveIcon } from "../svg"
import { faEdit } from "@fortawesome/free-regular-svg-icons"

type Props = {
    name: string
    classname?: string
}

const getIcon = (name: string): IconDefinition | JSX.Element => {
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
        case "arrowLeft":
            return <img src="/assets/icons/arrow.svg" />
        case "cart-icon":
            return <CartIcon />
        case "box-icon":
            return <BoxIcon />
        case "tag-icon":
            return <TagIcon />
        case "canabis-icon":
            return <CanabisIcon />
        case "candy-icon":
            return <CandyIcon />
        case "wave-icon":
            return <WaveIcon />
        case "panel-icon":
            return <PanelIcon />
        case "crown-icon":
            return <CrownIcon />
        case "store-icon":
            return <StoreIcon />
        case "chevronup-icon":
            return <ChevronUpIcon />
        case "chevrondown-icon":
            return <ChevronDownIcon />
        case "clouds-moon":
            return faCloudMoon
        case "tag-sale":
            return <TagSaleIcon />
        case "minus":
            return faMinus
        case "plus":
            return faPlus
        case "xmark":
            return faXmark
        case "edit":
            return faEdit
        case "circle-check":
            return faCircleCheck
        case "faSearch":
            return faSearch
        case "envelope":
            return <Envelope />
        default:
            return faBox
    }
}

export const IconHandler: FC<Props> = ({ name, classname = "" }) => {
    const icon = getIcon(name) as IconDefinition

    return <FontAwesomeIcon icon={icon} className={["text-[14px]", classname].join(" ")} />
}

export const CustomIconHandler: FC<Props> = ({ name }) => {
    const icon = getIcon(name) as JSX.Element

    return icon
}
import { Flex } from "@/layout"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"

type Props = {
    classname?: string
    placeholder?: string
    containerClassname?: string
    startingIcon?: IconProp
    endingIcon?: IconProp
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input: FC<Props> = ({ classname, placeholder, endingIcon, startingIcon, containerClassname = "", ...rest }) => {
    return <Flex className={[containerClassname, "gap-2 items-center"].join(" ")}>
        {startingIcon && <FontAwesomeIcon icon={startingIcon} className="" />}
        <input className={[classname, ""].join(" ")} placeholder={placeholder} {...rest} />
        {
            endingIcon && <FontAwesomeIcon icon={endingIcon} className="" />
        }

    </Flex>
}

export const Search = () => {
    return <Input startingIcon={faSearch} classname="search" placeholder="Brand, store, products" containerClassname="p-6 rounded-md bg-white" />
}


type AdvancedSearchProps = {
    placeholder?: string
    classname?: string
    containerClassname?: string
}

export const ProductSearch: FC<AdvancedSearchProps> = ({ placeholder = "advanced search", classname = "", containerClassname = "" }) => {
    return <Input endingIcon={faSearch} placeholder={placeholder.toUpperCase()} classname={["search-input"].join(" ")} containerClassname={["p-l rounded-md bg-background-primary shrink-0", containerClassname].join(" ")} />
}
"use client"
import { Flex } from "@/layout"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useState } from "react"
import { IconHandler } from "../../utils/icon"
import { Eye, EyeSlashIcon, LockIcon } from "../../svg"
import { IconButton } from "."

type Props = {
    classname?: string
    placeholder?: string
    containerClassname?: string
    startingIcon?: React.ReactElement
    endingIcon?: React.ReactElement
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input: FC<Props> = ({ classname, placeholder, endingIcon, startingIcon, containerClassname = "", ...rest }) => {
    return <Flex className={[containerClassname, "gap-2 items-center"].join(" ")}>
        {startingIcon && startingIcon}
        <input className={[classname, "outline-none"].join(" ")} placeholder={placeholder} {...rest} />
        {
            endingIcon && endingIcon
        }

    </Flex>
}

export const Search = () => {
    return <Input startingIcon={<IconHandler name="faSearch" />} classname="search" placeholder="Brand, store, products" containerClassname="p-6 rounded-md bg-white" />
}


type AdvancedSearchProps = {
    placeholder?: string
    classname?: string
    containerClassname?: string
}

export const ProductSearch: FC<AdvancedSearchProps> = ({ placeholder = "advanced search", classname = "", containerClassname = "" }) => {
    return <Input readOnly endingIcon={<IconHandler name="faSearch" />} placeholder={placeholder.toUpperCase()} classname={["search-input hover:cursor-pointer outline-none"].join(" ")} containerClassname={["p-l rounded-md bg-background-primary shrink-0", containerClassname].join(" ")} />
}

export const PasswordInput: FC<{ placeholder?: string }> = ({ placeholder }) => {
    const [state, setState] = useState(false)
    return <Input
        type={state ? "text" : "password"}
        endingIcon={<IconButton onClick={() => setState(!state)} icon={state ? <Eye className="shrink-0" /> : <EyeSlashIcon className="shrink-0" />} />}
        classname="text-mons-15 font-normal leading-[15px] w-full bg-transparent focus-visible:border-none"
        containerClassname="p-2 rounded-md border border-border-whiteSmoke bg-background-whiteGrey h-[44px]"
        startingIcon={<LockIcon className="shrink-0" />}
        placeholder={placeholder || "Enter password"}
    />
}

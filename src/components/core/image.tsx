import Image from "next/image"
import { FC } from "react"

type ImageProps = {
    imageUrl: string
    width: number
    height: number
    classname?: string
    containerClassName?: string
    alt?: string
}

export const CustomImage: FC<ImageProps> = ({ imageUrl, width, height, classname = "", alt = "image", containerClassName = "" }) => {
    return <div className={[containerClassName, "overflow-hidden relative"].join(" ")}>
        <Image fill src={imageUrl} className={classname} alt={alt} />
    </div>
}
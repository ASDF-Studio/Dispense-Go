import { Typography } from "@/core"
import { faCannabis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"

type Props = {
    classname?: string
    color?: string
    text?: string
}

export const Banner: FC<Props> = ({ classname }) => {
    return <div className={["flex items-center h-[60px] overflow-hidden bg-background-darkGreen z-20 relative", classname].join(" ")}>
        <div className="scroll w-full">
            <div className="LeftToRight flex gap-8 items-center">
                <Typography intent={"grskt16"}>
                    CANNABIS DISPENSER
                </Typography>
                <FontAwesomeIcon icon={faCannabis} className="text-[24px] font-light leading-6 text-white" />
                <Typography intent={"grskt16"}>
                    Flowers
                </Typography>
                <FontAwesomeIcon icon={faCannabis} className="text-[24px] font-light leading-6 text-white" />
                <Typography intent={"grskt16"}>
                    CONCENTRATES
                </Typography>
                <FontAwesomeIcon icon={faCannabis} className="text-[24px] font-light leading-6 text-white" />
                <Typography intent={"grskt16"}>
                    Edibles
                </Typography>
                <FontAwesomeIcon icon={faCannabis} className="text-[24px] font-light leading-6 text-white" />
                <Typography intent={"grskt16"}>
                    best deals
                </Typography>
                <FontAwesomeIcon icon={faCannabis} className="text-[24px] font-light leading-6 text-white" />
                <Typography intent={"grskt16"}>
                    50% OFF ON FIRST PURCHASE
                </Typography>
                <Typography intent={"grskt16"}>
                    CANNABIS DISPENSER
                </Typography>
                <FontAwesomeIcon icon={faCannabis} className="text-[24px] font-light leading-6 text-white" />
                <Typography intent={"grskt16"}>
                    Flowers
                </Typography>
                <FontAwesomeIcon icon={faCannabis} className="text-[24px] font-light leading-6 text-white" />
                <Typography intent={"grskt16"}>
                    CONCENTRATES
                </Typography>
                <FontAwesomeIcon icon={faCannabis} className="text-[24px] font-light leading-6 text-white" />
                <Typography intent={"grskt16"}>
                    Edibles
                </Typography>
                <FontAwesomeIcon icon={faCannabis} className="text-[24px] font-light leading-6 text-white" />
                <Typography intent={"grskt16"}>
                    best deals
                </Typography>
                <FontAwesomeIcon icon={faCannabis} className="text-[24px] font-light leading-6 text-white" />
                <Typography intent={"grskt16"}>
                    50% OFF ON FIRST PURCHASE
                </Typography>
            </div>
        </div>
    </div>
}

export const StoreBanner: FC<Props> = ({ classname, color, text }) => {
    return <div className={["flex items-center h-[40px] xl:h-[60px] overflow-hidden  z-20 relative", classname].join(" ")}>
        <div className="scroll w-full">
            <div className="LeftToRight flex gap-8 items-center">
                {
                    Array(5).fill(0).map(() => {
                        return <Typography intent={"header2"} classname={["uppercase", color].join(" ")}>
                            {text}
                        </Typography>
                    })
                }
            </div>
        </div>
    </div>
}
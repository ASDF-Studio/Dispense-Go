import { CustomIconHandler, IconHandler } from "../utils/icon";

export const PaddingX = ` px-mobile m:px-tablet xl:px-desktop `
export const PaddingXL = ` pl-mobile m:pl-tablet xl:pl-desktop `
export const PaddingXR = ` pr-mobile m:pr-tablet xl:pr-desktop `

export const Links = [
  {
    text: "all",
    icon: <CustomIconHandler name="box-icon" />,
    href: "/category"
  },
  {
    text: "deals",
    icon: <CustomIconHandler name="tag-icon" />,
    href: "/category"
  },
  {
    text: "flowers",
    icon: <CustomIconHandler name="canabis-icon" />,
    href: "/category"
  },
  {
    text: "edibles",
    icon: <CustomIconHandler name="candy-icon" />,
    href: "/category"
  },
  {
    text: "concentrates",
    icon: <CustomIconHandler name="wave-icon" />,
    href: "/category"
  },
  {
    text: "accessories",
    icon: <CustomIconHandler name="panel-icon" />,
    href: "/category"
  },
  {
    text: "brands",
    icon: <CustomIconHandler name="crown-icon" />,
    href: "/category"
  },
  {
    text: "stores",
    icon: <CustomIconHandler name="store-icon" />,
    href: "/individualStore"
  },
];

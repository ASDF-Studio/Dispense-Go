import { CustomIconHandler, IconHandler } from "../utils/icon";

export const PaddingX = ` px-mobile m:px-tablet xl:px-desktop `;
export const PaddingXL = ` pl-mobile m:pl-tablet xl:pl-desktop `;
export const PaddingXR = ` pr-mobile m:pr-tablet xl:pr-desktop `;

export const Links = [
  {
    text: "all",
    icon: <CustomIconHandler name="box-icon" />,
    href: "/category",
  },
  {
    text: "deals",
    icon: <CustomIconHandler name="tag-icon" />,
    href: "/category",
  },
  {
    text: "flowers",
    icon: <CustomIconHandler name="canabis-icon" />,
    href: "/category",
  },
  {
    text: "edibles",
    icon: <CustomIconHandler name="candy-icon" />,
    href: "/category",
  },
  {
    text: "concentrates",
    icon: <CustomIconHandler name="wave-icon" />,
    href: "/category",
  },
  {
    text: "accessories",
    icon: <CustomIconHandler name="panel-icon" />,
    href: "/category",
  },
  {
    text: "brands",
    icon: <CustomIconHandler name="crown-icon" />,
    href: "/category",
  },
  {
    text: "stores",
    icon: <CustomIconHandler name="store-icon" />,
    href: "/individualStore",
  },
];

export const Categories = [
  {
    text: "all",
    imageURL: "/assets/category/search/1.png",
  },
  {
    text: "flowers",
    imageURL: "/assets/category/search/2.png",
  },
  {
    text: "CONCEN TRATES",
    imageURL: "/assets/category/search/3.png",
  },
  {
    text: "EDIBLES",
    imageURL: "/assets/category/search/4.png",
  },
  {
    text: "CBD",
    imageURL: "/assets/category/search/5.png",
  },
  {
    text: "PRE-ROLLS",
    imageURL: "/assets/category/search/6.png",
  },
  {
    text: "ACCES- SORIES",
    imageURL: "/assets/category/search/7.png",
  },
];

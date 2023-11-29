import { Typography } from "@/core"
import { Flex, FlexColumn } from "@/layout"
import { SafeAreaSection } from "@/layout/spacing"
import { IconHandler } from "../../utils/icon"
import { FC } from "react"
import { CustomImage } from "@/core/image"

interface NewsEventDetails {
    title: string;
    text: string;
    color: string;
    background: string;
    gradient: string;
}

  const ProductImage = () => {
    return (
      <div className="relative w-fit">
        <CustomImage
          containerClassName="w-[360px] h-[382px]"
          imageUrl="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
          width={250}
          height={227}
        />
      </div>
    );
  };

  const NewsEventSectionDefault: FC<{ details: NewsEventDetails }> = ({ details }) => {
    return (
        <div className={`
            relative w-[full] h-[382px]
                ${details.background}
                hover:bg-hover-lightGreen
            `}>
            <Flex className="relative z-10 p-6 min-w-[full] h-[382px]">
                <FlexColumn className="justify-between">
                    <Typography intent="grskt48" classname="leading-[48px] w-[360px]">{details.title}</Typography>
                    <Typography intent="mons16" classname="w-[360px] font-normal leading-[19.2px] text-text-black-40 pb-5">{details.text}</Typography>
                </FlexColumn>
            </Flex>
        </div>
    );
};

const NewsEventSection: FC<{ details: NewsEventDetails }> = ({ details }) => {
    return (
      <div className="relative w-full h-[382px] overflow-hidden">
        <div
          className={`
            bg-cover bg-center filter grayscale-[60%] transition-transform hover:scale-105
          `}
          style={{ backgroundImage: `url('/assets/events/${details.background}')`, height: '382px' }}
        >
          <div className={`absolute inset-0 ${details.gradient}`}></div>
          <FlexColumn className="absolute z-10 p-6 min-w-full h-full justify-between text-white hover:scale-100">
            <FlexColumn>
              <Typography intent="grskt32" classname="leading-[48px]">
                {details.title}
              </Typography>
              <Typography intent="mons15" classname="font-normal leading-[19.2px] pb-5">
                {details.text}
              </Typography>
            </FlexColumn>
            <Flex className="justify-end">
              <IconHandler
                name="arrow-right"
                classname="text-[83.38px] font-light leading-[83.38px] tracking-[-3.335px]"
              />
            </Flex>
          </FlexColumn>
        </div>
      </div>
    );
  };
  
  

export const NewsEvents = () => {
  const detailsMappingDefault: NewsEventDetails[] = [
    {
      background: "bg-background-lightGreen",
      title: "News & Events",
      text: "Get news and latest updates about Dispense’s Deals and Events",
      color: "black",
      gradient: ""
    }
  ];
  const detailsMapping: NewsEventDetails[] = [
    {
      background: "event1.png",
      title: "50% off for first time users",
      text: "On first time purchase to any dispensaries in Toronto*",
      color: "white",
      gradient: "bg-gradient-to-b from-gradient-green"
    },
    {
      background: "event2.png",
      title: "Streamline Your Sales ",
      text: "Automate retail experience for your customers with Dispense Go",
      color: "white",
      gradient: "bg-gradient-to-b from-gradient-purple"
    },
    {
      background: "event3.png",
      title: "Now exclusive to 24 more locations",
      text: "Learn more about our new partners",
      color: "white",
      gradient: "bg-gradient-to-b from-gradient-green"
    }
  ];

      return <SafeAreaSection withSpacing={false} classname="flex flex-wrap items-end relative">
      {detailsMappingDefault.map((details, index) => (
        <div key={index} className="w-full m:w-1/2 2xl:w-1/4">
            <NewsEventSectionDefault key={index} details={details} />
        </div>
      ))}
      {detailsMapping.map((details, index) => (
        <div key={index} className="w-full m:w-1/2 2xl:w-1/4">
          <NewsEventSection details={details} />
        </div>
      ))}
    </SafeAreaSection>
};
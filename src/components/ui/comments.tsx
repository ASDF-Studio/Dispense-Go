import { Rating } from "@/cards/rating";
import { Button, Typography } from "@/core";
import { Flex, FlexColumn } from "@/layout";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as RegularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconHandler } from "../../utils/icon";
import { SafeAreaSection } from "@/layout/spacing";
import { type FC } from "react";
import { AllproductDetails } from "../../static-data/single-product-details";
import { findSingleProduct } from "../../utils/products";

type CommentCardProps = {
  reviewText: string;
  reviewHeader: string;
  reviewDate: string;
  reviewRating: number;
  reviewerName: string;
};

const CommentCard: FC<CommentCardProps> = ({
  reviewText,
  reviewHeader,
  reviewDate,
  reviewRating,
  reviewerName,
}) => {
  return (
    <FlexColumn className="p-6 rounded-md border border-border-whiteSmoke bg-white gap-5 shadow-navbar">
      <Flex className="justify-between">
        <Flex className="gap-0.5">
          {Array(5)
            .fill(0)
            .map((_, index) => {
              return (
                <FontAwesomeIcon
                  key={index}
                  icon={index + (4 - reviewRating) < 4 ? faStar : RegularStar}
                  className={[
                    `fas fa-star text-[14px] font-extrabold tracking-[2.03px]  leading-[14px]`,
                    "text-primary-brand",
                  ].join(" ")}
                />
              );
            })}
        </Flex>
        <Flex>
          {/* <AccountIcon/> */}
          <Typography
            intent={"mons15"}
            classname="leading-[19.5px] font-normal"
          >
            {reviewerName}{" "}
            <Typography classname="text-text-black-40">|</Typography>{" "}
            {reviewDate}
          </Typography>
        </Flex>
      </Flex>
      <Typography
        classname="leading-[23.4px] font-semibold text-primary-black"
        intent={"mons18"}
      >
        {reviewHeader}
      </Typography>
      <Typography
        classname="leading-[22.5px] font-normal text-primary-black"
        intent={"mons15"}
      >
        {reviewText}
      </Typography>
      <Button
        intent={"text"}
        text="Report"
        className="self-end"
        textClassname="font-normal leading-[18px] underline text-primary-black"
        typographyVariant="mons15"
      />
    </FlexColumn>
  );
};

type CommentsProps={
  productId:string
}

export const Comments:FC<CommentsProps> = ({productId}) => {

  const selectedProduct = findSingleProduct(AllproductDetails,productId)

  return (
    <SafeAreaSection>
      <FlexColumn>
        <div className="h-[1px] bg-border-whiteSmoke" />
        <FlexColumn className="max-w-screen-margin mx-auto w-full gap-6 pt-[35px] xl:pt-[47px] pb-12 xl:pb-[142px]">
          <FlexColumn className="gap-2.5">
            <Typography
              intent={"grstk24"}
              classname="uppercase leading-[24px] tracking-[-0.84px] font-medium text-black"
            >
              Customer reviews
            </Typography>
            <Rating
              textColor="black"
              starColor="black"
              rating={selectedProduct?.customerReviews?.overallRating! + 1}
              count={selectedProduct?.customerReviews.totalReviewCount}
              extend
            />
          </FlexColumn>
          <Flex className="gap-2 justify-end">
            <Typography
              intent={"mons15"}
              classname="font-normal leading-[19.5px] text-primary-black"
            >
              {" "}
              Sort by{" "}
              <Typography classname="font-bold">Newest First</Typography>
            </Typography>
            <IconHandler name="chevrondown" />
          </Flex>
          {selectedProduct?.customerReviews.reviews.map((review) => {
            return (
              <CommentCard
                key={review.reviewId}
                reviewHeader={review.reviewHeading}
                reviewText={review.reviewText}
                reviewDate={review.reviewDate}
                reviewRating={review.reviewStars}
                reviewerName={review.reviewerName}
              />
            );
          })}
        </FlexColumn>
      </FlexColumn>
    </SafeAreaSection>
  );
};

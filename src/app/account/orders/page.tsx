"use client";
import React, { FC, useEffect, useState } from "react";
import { Checkbox, CheckboxClild } from "@/core/checkbox";
import { Flex, FlexCenter, FlexColumn } from "@/layout";
import { MainLayout } from "@/layout/main";
import { CategoryPoster } from "@/poster/category";
import { ProductList } from "@/sliders/productList";
import { Button, Typography } from "@/core";
import Image from "next/image";
import { Divider } from "@/divider";
import { IconHandler } from "../../../utils/icon";
import Link from "next/link";
import { SafeAreaSection } from "@/layout/spacing";
import { BoxIcon, InfoIcon, StoreIcon } from "../../../svg";
import { QrModal } from "@/modals/qr-modal";


import { type Order ,OrderItem} from "../../../redux/orders/orders.reducer";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getOrdersByUserId } from "../../../redux/orders/thunks/orders.thunk";

type State = "completed" | "ready" | "failed";

type OrderStateProps = {
  state: State;
  classname?: string;
};

const OrderState: FC<OrderStateProps> = ({
  state = "completed",
  classname,
}) => {
  const stateMapping = {
    completed: {
      text: (
        <Typography
          intent={"mons15"}
          classname="leading-[19.5px] font-medium text-primary-green"
        >
          Completed
        </Typography>
      ),
      icon: (
        <Image
          src={"/assets/CIRCLE-CHECK.png"}
          width={18}
          height={20}
          alt="icon"
        />
      ),
    },
    ready: {
      text: (
        <Typography
          intent={"mons15"}
          classname="leading-[19.5px] font-medium text-primary-green"
        >
          Ready for Pick Up
        </Typography>
      ),
      icon: <Image src={"/assets/BOX.png"} width={18} height={20} alt="icon" />,
    },
    failed: {
      text: (
        <Typography
          intent={"mons15"}
          classname="leading-[19.5px] font-medium text-text-red"
        >
          Payment Failed
        </Typography>
      ),
      icon: (
        <Image
          src={"/assets/CIRCLE-XMARK.png"}
          width={18}
          height={20}
          alt="icon"
        />
      ),
    },
  };

  return (
    <Flex className={["items-center gap-2", classname].join(" ")}>
      {stateMapping[state].icon} {stateMapping[state].text}
    </Flex>
  );
};

type OrderIdProps = {
  state?: "error" | "success";
  id: string;
};

const OrderId: FC<OrderIdProps> = ({ state = "success", id }) => {
  return (
    <Flex
      className={[
        "py-2 px-3",
        state === "success" ? "bg-background-lightGreen" : "bg-text-red/10",
      ].join(" ")}
    >
      <Typography
        classname={[
          "leading-[14px] font-semibold tracking-normal",
          state === "success" ? "text-primary-green" : "text-text-red",
        ].join(" ")}
        intent={"mons14"}
      >
        ORDER ID #{id}
      </Typography>
    </Flex>
  );
};

type TooltipProps = {
  text: string;
  id: string;
  date: string;
  time: string;
};

const Tooltip: FC<TooltipProps> = ({ text, id, date, time }) => {
  return (
    <Flex className="shrink-0 hover:cursor-pointer gap-2 relative tooltip-container">
      <InfoIcon className="shrink-0" />
      <Typography
        intent={"mons15"}
        classname="leading-[19.5px] text-text-black-70 font-medium tracking-normal"
      >
        {text}
      </Typography>
      <FlexColumn className="px-l py-4 bg-white rounded-md border border-border-whiteSmoke shadow-modal gap-4 absolute xl:-left-1/3 w-full top-[35px] hidden tooltip-child">
        <Typography
          classname="font-semibold leading-[19.5px] text-text-black-100 tracking-normal"
          intent={"mons15"}
        >
          ORDER ID #{id}
        </Typography>
        <Flex className="justify-between">
          <Typography
            intent={"mons15"}
            classname="leading-[19.5px] text-text-black-100"
          >
            {date} {time}{" "}
          </Typography>
          <Typography
            intent={"mons15"}
            classname="leading-[19.5px] text-text-black-70"
          >
            Order placed
          </Typography>
        </Flex>
        <Flex className="justify-between">
          <Typography
            intent={"mons15"}
            classname="leading-[19.5px] text-text-black-100"
          >
            {date} {time}{" "}
          </Typography>
          <Typography
            intent={"mons15"}
            classname="leading-[19.5px] text-text-black-70"
          >
            Order placed
          </Typography>
        </Flex>
      </FlexColumn>
    </Flex>
  );
};

type OrderHeaderProps = {
  order: Order;
  classname?: string;
  onShowQR?: () => void;
};

const OrderHeader: FC<OrderHeaderProps> = ({ order, onShowQR }) => {
  const stateMapping = {
    completed: `Picked Up: ${order?.pickUpDate} ${order?.pickUpTime}`,
    ready: `paid ($23.12): ${order?.lastPaymentDate} ${order?.lastPaymentTime}`,
    failed: `Cancelled: ${order?.cancelDate} ${order?.cancelTime}`,
  };

  const date =
    order.orderStatus === "completed"
      ? order.pickUpDate!
      : order.orderStatus === "failed"
      ? order.cancelDate!
      : order.lastPaymentDate!;
  const time =
    order.orderStatus === "completed"
      ? order.pickUpTime!
      : order.orderStatus === "failed"
      ? order.cancelTime!
      : order.lastPaymentTime!;

  return (
    <Flex className="p-6 px-5 m:px-6 justify-between border-b border-b-background-lightGreen items-start xl:items-center flex-col m:flex-row gap-4">
      <Flex className="gap-2 xl:items-center flex-col xl:flex-row">
        <OrderId
          state={order.orderStatus === "failed" ? "error" : "success"}
          id={order.orderId}
        />
        <Flex className="gap-2">
          <Tooltip
            date={date}
            time={time}
            text={`Order ${stateMapping[order.orderStatus]}`}
            id={order.orderId}
          />
        </Flex>
        <OrderState state={order.orderStatus} classname="xl:hidden" />
      </Flex>
      <Flex className="gap-4 items-center">
        <OrderState state={order.orderStatus} classname="hidden xl:flex" />
        <div className="h-[45px] w-[1px] bg-text-black-40 hidden xl:block" />
        {order.orderStatus === "ready" && (
          <Button
            text="QR code"
            onClick={onShowQR}
            intent={"filled"}
            typographyVariant="buttons"
            classname="shrink-0"
          />
        )}
        {order.orderStatus === "completed" && (
          <Button
            text="write review"
            intent={"filled"}
            typographyVariant="buttons"
            classname="shrink-0"
          />
        )}
        {order.orderStatus === "failed" && (
          <Button
            text="Pay now"
            intent={"outline"}
            typographyVariant="buttons"
            classname="shrink-0"
          />
        )}
      </Flex>
    </Flex>
  );
};

type CartItemProps = {
  cartItem: OrderItem;
};

const CartItem: FC<CartItemProps> = ({
  cartItem: {
    productName,
    productQuantity,
    variation,
    discountAmount,
    mainAmount,
    productImage,
  },
}) => {
  return (
    <Flex className="gap-4">
      <Flex
        className={[
          "w-[87px] h-[90px] shrink-0 relative border-[1.222px] border-border-whiteSmoke overflow-hidden rounded-[4px] shadow-cart-item",
        ].join(" ")}
      >
        <Image src={productImage} fill alt="image" />
      </Flex>
      <Flex className="w-full items-start flex-col xl:flex-row gap-y-[7px]">
        <FlexColumn className="gap-[7px] w-full">
          <Typography
            intent={"mons15"}
            classname="leading-[21px] font-medium tracking-normal text-text-black-100 line-clamp-2"
          >
            {productName}
          </Typography>
          <Flex className="gap-2 items-center">
            <Flex className="p-1 bg-background-green-20">
              <Typography
                intent={"monsBold10"}
                classname="leading-[10px] text-text-green capitalize"
              >
                {productQuantity}x
              </Typography>
            </Flex>
            <Typography
              intent={"mons15"}
              classname="leading-[21px] font-medium tracking-normal text-text-black-100"
            >
              Variation: {variation}
            </Typography>
          </Flex>
          <Flex className="gap-2.5">
            <Typography
              intent={"mons15"}
              classname="text-text-black-100 font-bold leading-[15px]"
            >
              ${discountAmount}
            </Typography>
            <Typography
              intent={"mons15"}
              classname="text-text-black-70 font-normal leading-[15px] line-through"
            >
              ${mainAmount}
            </Typography>
          </Flex>
        </FlexColumn>
      </Flex>
    </Flex>
  );
};

type OrderBodyProps = {
  order: Order;
};

const OrderBody: FC<OrderBodyProps> = ({
  order: { orderItems, supplierName, supplierAddress, supplierStreetAddress },
}) => {
  return (
    <FlexColumn className="p-6 px-5 m:px-6 gap-6 border-b border-b-text-black-10">
      <Typography
        intent={"mons15"}
        classname="text-text-black-100 leading-[19.5px]"
      >
        {supplierName} <br />
        <Typography classname="text-text-black-70">
          {supplierStreetAddress} <br /> {supplierAddress}
        </Typography>
      </Typography>
      {orderItems.map((orderItem) => {
        return <CartItem key={orderItem.productId} cartItem={orderItem} />;
      })}
    </FlexColumn>
  );
};

type OrderFooterProps = {
  orderStatus?: State;
  orderCost: number;
};

const OrderFooter: FC<OrderFooterProps> = ({ orderStatus, orderCost }) => {
  return (
    <Flex className="py-6 px-5 xl:px-[42px] justify-between m:flex-row flex-col-reverse gap-y-4">
      <Flex className="gap-2 m:gap-4 flex-col m:flex-row">
        {orderStatus === "ready" && (
          <Button
            intent={"outline"}
            text="cancel order"
            classname="w-full"
            typographyVariant="grstk15"
            textClassname="leading-[15px] tracking-[2.175px] uppercase text-black"
          />
        )}
        <Button
          intent={"outline"}
          text="contact store"
          classname="w-full"
          typographyVariant="grstk15"
          textClassname="leading-[15px] tracking-[2.175px] uppercase text-black"
        />
      </Flex>

      <Flex className="items-center gap-2 justify-end">
        <Typography
          intent="mons15"
          classname="leading-[19.5px] font-medium text-text-black-100 tracking-normal"
        >
          Order total
        </Typography>
        <Typography intent={"mons22"} classname="leading-[28.6px] font-bold">
          ${orderCost}
        </Typography>
      </Flex>
    </Flex>
  );
};

type OrderCardProps = {
  onShowQR?: () => void;
  order: Order;
};

const OrdersCard: FC<OrderCardProps> = ({ order, onShowQR }) => {
  return (
    <FlexColumn className="border bg-white border-background-lightGreen shadow-order rounded-md">
      <OrderHeader order={order} onShowQR={onShowQR} />
      <OrderBody order={order} />
      <OrderFooter
        orderCost={order.totalOrderCost}
        orderStatus={order.orderStatus}
      />
    </FlexColumn>
  );
};

export default function MyOrdersPage() {
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  
  const { orders } = useAppSelector((state) => state.orders)
  const dispatch  = useAppDispatch()
  /**
   * 
   * THIS IS A DUMMY USER ID.
   * REAL ID
   * SHOULE BE AVAILABLE 
   * FROM auth feat.
   */
  // useEffect(()=>{
  //   dispatch(getOrdersByUserId("12321434"))
  // },[dispatch])

  return (
    <MainLayout footerItems={[]}>
      <SafeAreaSection classname="py-[42px] bg-background-whiteS min-h-screen">
        <FlexColumn className="gap-6">
          <Typography
            intent={"grstkt22"}
            classname="text-text-black-100 leading-[22px] tracking-[-0.77px] font-medium"
          >
            My Orders
          </Typography>
          <Divider classname="bg-text-black-10" />
          <FlexColumn className="gap-6">
            {orders.map((order) => {
              return (
                <OrdersCard
                  key={order.orderId}
                  order={order}
                  onShowQR={() => setShowQrModal(true)}
                />
              );
            })}
          </FlexColumn>
        </FlexColumn>
      </SafeAreaSection>
      <QrModal open={showQrModal} setOpen={setShowQrModal} />
    </MainLayout>
  );
}

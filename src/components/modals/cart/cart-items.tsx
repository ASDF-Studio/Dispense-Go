"use client"
import { Button, IconButton, Typography } from "@/core"
import { Flex, FlexColumn } from "@/layout"
import { CustomIconHandler, IconHandler } from "../../../utils/icon"
import { FC, useState } from "react"
import Image from "next/image"
import { Input } from "@/core/input"
import { useCart } from "../../../contexts/cart"
import { useAppDispatch, useAppSelector } from "../../../redux/hook"
import { decrementCartProduct, incrementCartProduct, setCartProductQuantity, setDispensaryIdToDelete, setShowDelete, setShowVariants, updateVariantsList } from "../../../redux/cart/action.creators"
import {type CartProduct } from "../../../redux/cart/cart.reducer"

type ItemProps = {
    name: string
    imageURL: string
    productQuantity:number,
    productPrice:number,
    productDiscountPrice:number,
    productId:string,
    selectedVariant: string,
    varaintsList:string[]
}

const Item: FC<ItemProps> = ({ name, imageURL, productQuantity, productPrice, productDiscountPrice, productId, selectedVariant, varaintsList }) => {
    const dispatch = useAppDispatch()

   
    return <Flex className="gap-4">
        <Flex className={["w-[112px] h-[118px] shrink-0 relative border-[1.222px] border-border-whiteSmoke overflow-hidden rounded-[4px] shadow-cart-item"].join(" ")}>
            {/* <Image src={"https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg"} fill alt="image" /> */}
            <Image src={imageURL} fill alt="image" />

        </Flex>
        <FlexColumn className="gap-[7px] justify-between">
            <Typography intent={"mons12"} classname="line-clamp-2 font-medium leading-[16.8px] text-text-black-100">
                {name}
            </Typography>
            <Flex className="gap-m items-center">
                <Typography intent={"mons12"} classname="leading-[15.6px] font-medium text-primary-brand">Variation: {selectedVariant}</Typography>
                <IconButton onClick={() => {
                            dispatch(updateVariantsList(productId, varaintsList))
                            dispatch(setShowVariants(true))

                }} icon={<IconHandler name="edit" classname="text-[12px] leading-[1.74px] font-light text-primary-brand" />} />
            </Flex>
            <Flex className="gap-2.5">
                <Typography intent={"mons15"} classname="font-bold leading-[15px] text-text-black-100">${productDiscountPrice}</Typography>
                <Typography intent={"mons15"} classname="leading-[15px] font-medium text-text-black-40 line-through">${productPrice}</Typography>
            </Flex>
            <Flex className="items-center">
                <IconButton disabled={productQuantity === 0} onClick={()=>{dispatch(decrementCartProduct(productId))}} classname="px-[12px] h-8 py-[5px] border border-r-0 border-border-whiteSmoke" icon={<IconHandler name="minus" classname="text-[15px] leading-[18px]" />} />
                <Input onChange={(e) => { dispatch(setCartProductQuantity(productId,+e.target.value)) }} containerClassname="border border-border-whiteSmoke h-[32px] w-full" type="number" value={productQuantity} className="text-mons-20 text-center w-full" />
                <IconButton onClick={() => {dispatch(incrementCartProduct(productId))}} classname="px-[12px] h-8 py-[5px] border border-l-0 border-border-whiteSmoke" icon={<IconHandler name="plus" classname="text-[15px] leading-[18px]" />} />
            </Flex>
        </FlexColumn>
    </Flex>
}

type DispensaryProps = {
    dispensaryId: string,
    cartItems:CartProduct[]
}

const DispensaryItems: FC<DispensaryProps> = ({ dispensaryId ,cartItems}) => {
    const dispatch = useAppDispatch()
    const [state, setState] = useState({
        dispenseName: "",
        items: [0, 1]
    })
    
    function getDispensaryName(){
        const dispFound = cartItems.find((cartItem)=>{
            return cartItem.dispensaryId === dispensaryId
        })
        return dispFound?.dispensaryName
    }

    return <FlexColumn className="gap-4">
        <Flex className="justify-between items-center py-4">
            <Flex className="gap-2">
                <CustomIconHandler name="store-icon" />
                <Typography intent={"grskt12"} classname="leading-[16.8px] line-clamp-1 font-semibold text-text-black-100 w-[231px] tracking-normal">
                    {getDispensaryName()}
                </Typography>
            </Flex>
           <Button
                    intent={"text"}
                    text='DELETE'
                    onClick={() => {
                        dispatch(setShowDelete(true));
                        dispatch(setDispensaryIdToDelete(dispensaryId));
                    }}
                    typographyVariant='grskt12'
                    textClassname='leading-[12px] tracking-[1.74px[ uppercases text-primary-brand shrink-0'
                />
        </Flex>
        {
            cartItems.map((cartItem)=>{
                if(cartItem.dispensaryId===dispensaryId){
                    return <Item 
                        key={cartItem.productId} 
                        name={cartItem.productName} 
                        imageURL={cartItem.productImage} 
                        productQuantity={cartItem.productQuantity}
                        productPrice={cartItem.productPrice as number}
                        productDiscountPrice={cartItem.productDiscountPrice}
                        productId={cartItem.productId}
                        selectedVariant={cartItem.selectedVariant}
                        varaintsList={cartItem.variantsList}
                    />
                }
            })
        }
        
       
    </FlexColumn>
}

export const CartItems = ({ handleVariant }) => {
    const {cartItems} = useAppSelector((state)=>state.cart)
    
 
    const dispensaryIds:string[] = []
    cartItems.forEach((cartItem)=>{
         if(!dispensaryIds.includes(cartItem.dispensaryId)){
            dispensaryIds.push(cartItem.dispensaryId)
         }
    })
    
 
    return <FlexColumn className="gap-6 overflow-hidden flex-grow">
        {dispensaryIds.map((dispensaryId) => {
            return <DispensaryItems 
                    key={dispensaryId} 
                    dispensaryId={dispensaryId} 
                    cartItems={cartItems}/>
        })}
       
    </FlexColumn>
}
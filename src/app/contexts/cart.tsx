"use client"
import { CartModal } from "@/modals/cart"
import { Dispatch, FC, SetStateAction, createContext, useContext, useState } from "react"
import { isEmpty } from "lodash"

type IItems = {
    name: string
    price: number
}

type CartType = {
    items: IItems[]
    toggleCartModal: () => void
    isCartEmpty: boolean
    showVariants: boolean
    setShowVariants: Dispatch<SetStateAction<boolean>>
    showDelete: boolean
    setShowDelte: Dispatch<SetStateAction<boolean>>
}

const CartContext = createContext<CartType>({} as CartType)

type CartContextProps = {
    children: React.ReactNode
}

export const CartContextProvider: FC<CartContextProps> = ({ children }) => {
    const [cart, setCart] = useState<IItems[]>([{
        name: "Testing123",
        price: 123321
    }])
    const [open, setOpen] = useState<boolean>(false)
    const [showVariants, setShowVariants] = useState(false)
    const [showDelete, setShowDelte] = useState(false)

    const toggleCartModal = () => setOpen(!open)
    const isCartEmpty = isEmpty(cart)

    return <CartContext.Provider value={{
        items: cart,
        toggleCartModal,
        isCartEmpty,
        showVariants,
        setShowVariants,
        showDelete,
        setShowDelte
    }}>
        <CartModal open={open} setOpen={setOpen} />
        {children}
    </CartContext.Provider>
}

export const useCart: () => CartType = () => useContext(CartContext)
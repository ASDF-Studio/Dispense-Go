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
    addToCart: (item: any) => void
    handleEmptyCart: () => void
}

const CartContext = createContext<CartType>({} as CartType)

type CartContextProps = {
    children: React.ReactNode
}

export const CartContextProvider: FC<CartContextProps> = ({ children }) => {
    const [cart, setCart] = useState<IItems[]>([])
    const [open, setOpen] = useState<boolean>(false)
    const [showVariants, setShowVariants] = useState(false)
    const [showDelete, setShowDelte] = useState(false)

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const toggleCartModal = (e: Event) => {
        setOpen(!open)
        // e.stopPropagation()

    }
    const handleEmptyCart = () => setCart([])
    const isCartEmpty = isEmpty(cart)

    return <CartContext.Provider value={{
        items: cart,
        toggleCartModal,
        isCartEmpty,
        showVariants,
        setShowVariants,
        showDelete,
        setShowDelte,
        addToCart,
        handleEmptyCart
    }}>
        <CartModal open={open} setOpen={setOpen} />
        {children}
    </CartContext.Provider>
}

export const useCart: () => CartType = () => useContext(CartContext)
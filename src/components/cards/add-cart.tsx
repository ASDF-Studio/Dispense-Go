import { IconButton } from "@/core";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../../app/contexts/cart";

export const AddtoCart = () => {
    const { toggleCartModal } = useCart()
    return (
        <IconButton
            icon={
                <FontAwesomeIcon
                    icon={faShoppingBasket}
                    className="fas fa-shopping-basket text-[14px] font-normal text-black"
                />
            }
            onClick={toggleCartModal}
            classname="w-10 h-10 bg-primary-brand rounded-full hover:bg-primary-hover shrink-0"
        />
    );
};

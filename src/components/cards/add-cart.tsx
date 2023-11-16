import { IconButton } from "@/core";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddtoCart = () => {
    return (
        <IconButton
            icon={
                <FontAwesomeIcon
                    icon={faShoppingBasket}
                    className="fas fa-shopping-basket text-[14px] font-normal text-black"
                />
            }
            classname="w-10 h-10 bg-primary-brand rounded-full hover:bg-primary-hover"
        />
    );
};

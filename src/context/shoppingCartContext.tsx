import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/shoppingCart";

const ShoppingCartContext = createContext({} as ShoppingCardContext);

type ShoppingCardContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number,
    increaseCartQuantity: (id: number) => void,
    DecreaseCartQuantity: (id: number) => void,
    removeFromCart: (id: number) => void,
    cartQuantity: number,
    cartItems: cartItems[]
}

type cartItems = {
    id: number,
    quantity: number,
}

type ShoppingCartProviderProps = {
    children: ReactNode
}
export function exportedShoppingCart() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useContext(ShoppingCartContext);
}


export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setcartItems] = useState<cartItems[]>([]);
    const [isOpen, setIsopen] = useState(false);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    const openCart = () => setIsopen(true);
    const closeCart = () => setIsopen(false);



    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: number) {
        console.log("the button was clicked");

        setcartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else {
                        return item;
                    }
                })
            }
        })
    }
    function DecreaseCartQuantity(id: number) {
        setcartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else {
                        return item;
                    }
                })
            }
        })
    }
    function removeFromCart(id: number) {
        setcartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        })
    }
    return <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, DecreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart }}>

        <ShoppingCart isOpen={isOpen} />
        {children}
    </ShoppingCartContext.Provider>
}
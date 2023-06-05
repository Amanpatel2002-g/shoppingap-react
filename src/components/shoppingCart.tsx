import { Offcanvas, Stack } from "react-bootstrap";
import { exportedShoppingCart } from "../context/shoppingCartContext";
type ShoppingCartProps = {
    isOpen: boolean
}
import { CartItem} from "./cartItem";
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = exportedShoppingCart();
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                        ))}
                </Stack>
            </Offcanvas.Body>
    </Offcanvas>
}
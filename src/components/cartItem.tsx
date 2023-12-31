import { Button, Stack } from "react-bootstrap";
import { exportedShoppingCart } from "../context/shoppingCartContext"
import storeItem from "../data/items.json";
import { formatCurrency } from "../utilities/fromatCurrency";
type cartItemsProps = {
    id: number,
    quantity: number
}
export function CartItem({ id, quantity }: cartItemsProps) {
    const { removeFromCart } = exportedShoppingCart();
    const item = storeItem.find(i => i.id === id);
    if (item == null) return null;
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover", }} />
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity>1 && (<span className="text-muted" style={{fontSize:"0.65rem"}}>
                        x{quantity}
                    </span>)}
                </div>
                <div className="text-muted" style={{fontSize:"0.75rem"}}>{formatCurrency(item.price)}</div>
            </div>
            <div>{formatCurrency(item.price+quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(item.id)}>&times;</Button>
        </Stack>
    );
}
import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/fromatCurrency";
import { exportedShoppingCart } from "../context/shoppingCartContext";

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
}

export function storeItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {getItemQuantity,increaseCartQuantity,DecreaseCartQuantity,removeFromCart} = exportedShoppingCart();
    const quantity = getItemQuantity(id);
    console.log(quantity);
    
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-space-between align-items-baseline">
                    <span className="fs-2">{name}</span>
                    <span className="fs-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (<Button className="w-100" onClick={()=>increaseCartQuantity(id)}>+ Add to Cart</Button>) : (<div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                        <div className="d-flex align-items-center justify-content-center flex-row" style={{ gap: ".5rem" }}>
                            <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in quantity
                            </div>
                            <Button onClick={()=>DecreaseCartQuantity(id)}>-</Button>
                        </div>
                        <Button variant="danger"size="sm" onClick={()=>removeFromCart(id)}>Remove all items</Button>
                    </div>)
                    }
                </div>
            </Card.Body>
        </Card>
    );
}
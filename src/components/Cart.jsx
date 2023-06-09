import { Table } from 'react-bootstrap';

const Cart = ({ products, increaseQuantity, decreasQuantity, deleteItem, clearCart }) => {
    console.log(products);

    const getTotal = () => {
        return products.reduce((sum, {price, quantity}) => 
        sum +price*quantity, 0).toFixed(2)
    }

    if (products.length > 0) {
        return (
            <div>
                <h2>Cart</h2>
                <Table striped bordered hover size="sm">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products.map((oneProduct, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{oneProduct.name}</td>
                                    <td className="d-flex justify-content-around">
                                        <button className="btn btn-info"
                                            onClick={() => increaseQuantity(oneProduct)}>+</button>
                                        {oneProduct.quantity}
                                        <button className="btn btn-info"
                                            onClick={() => decreasQuantity(oneProduct)}>-</button>
                                    </td>
                                    <td>{oneProduct.price}</td>
                                    <td><button className="btn btn-danger"
                                    onClick={() => deleteItem(oneProduct)}>Remove</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Bendra suma</td>
                            <td>{getTotal()}</td>
                            <td><button className="btn btn-danger" onClick={clearCart}>Clear Card</button></td>
                        </tr>
                    </tfoot>
                </Table>
            </div>
        )
    } else return <div>Prekių krepšelis tuščias</div>

}

export default Cart
function OrderList({order, onDelete}) {
	return (
		<div>
			<table className="border-collapse ">
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Cost</th>
					<th>Quantity</th>
					<th>Amount</th>
					<th>Action</th>
                </tr>
                {order.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.productID}</td>
                            <td>{val.productName}</td>
                            <td>{val.cost}</td>
							<td>{val.quantity}</td>
							<td>{val.amount}</td>
							<td className="cursor-pointer text-cyan-800 underline" onClick={() => onDelete(val.productID)}>Delete</td>
                        </tr>
                    )
                })}
            </table>
		</div>
	)
}

export default OrderList

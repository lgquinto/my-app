import { useEffect, useState } from "react";
import AddProduct from "./components/AddProduct";
import Search from "./components/Search";
import SaveOrder from "./components/SaveOrder";
import OrderList from "./components/OrderList";
const products = [
	{
		productID: "001",
		productName:"Product 1",
		cost: 100,
		quantity: 1,
	},
	{
		productID: "002",
		productName:"Product 2",
		cost: 50,
		quantity: 2,
	},
	{
		productID: "003",
		productName:"Product 3",
		cost: 25,
		quantity: 3,
	},

]

function App() {
	const [query, setQuery] = useState("")
	const [productId, setProductId] = useState("")
	const [cost, setCost] = useState("")
	const [cash, setCash] = useState("")
	const [change, setChange] = useState("")
	const [totalAmount, setTotalAmount] = useState("")
	const [productName, setProductName] = useState("")
	const [quantity, setQuantity ] = useState("")
	const [order, setOrder] = useState([])
	useEffect(()=>{
		setTotalAmount(order.reduce(function (acc, obj) { return acc + obj.amount; }, 0))

	},[order])
	function handleSearch(){
		const product = products.filter(x=>x.productName.includes(query)	
		)
		if(product.length >1) return
		setCost(product[0].cost)
		setProductId(product[0].productID)
		setProductName(product[0].productName)

	}
	function handleDelete(id){
		setOrder(order => order.filter(order => order.productID !== id))
	}
	function handleAddOrder(e){
		e.preventDefault();
		
		setQuantity(quantity)
		const newOrder ={
			productID: productId,
			productName: productName,
			cost: cost,
			quantity: quantity,
			amount: Number(cost) * Number(quantity)

		}
		if (!newOrder.quantity ) return
		setOrder((order) => [...order, newOrder])

	} 

	

	function handleComputeChange(e){
		e.preventDefault();
		
		setChange(cash - totalAmount)
	}
  return (
    <div className="App p-4">
		<section className="my-4"> 	
			<Search query={query} setQuery={setQuery} handleSearch={handleSearch} /> 
		</section>
		<section  className="my-4"> 	
			<AddProduct productId={productId} cost={cost} productName={productName} onAddOrder={handleAddOrder} quantity={quantity} setOrder={setQuantity}/>
		</section>
		<section>
			<OrderList order={order} onDelete= {handleDelete} />
		</section>
		<section >
			<SaveOrder totalAmount ={totalAmount } setCash={setCash} cash={cash} change={change} onComputeChange={handleComputeChange} />
		</section>
		
    </div>
  );
}

export default App;

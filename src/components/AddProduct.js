

function AddProduct({productId , cost, productName, onAddOrder, quantity, setOrder}) {
	return (
		<>
		<div className="grid grid-cols-2">
			<div>
				<div className="w-96 flex"> 
					<label>Product Id:</label> 
					<span className="inline-block ml-4	w-48  h-6 border border-slate-900" >{productId} </span>
				</div>
				<div className="w-96 flex"> 
					<label>Cost: </label> 
					<span className="inline-block	ml-4 w-48  h-6 border border-slate-900 "> {cost} </span>
				</div>
			</div>
			<div>
				<div className="w-96 flex"> 
					<label>Product Name:</label> 
					<span className="inline-block ml-4 w-48  h-6 border border-slate-900">{productName} </span>
				</div>
				<div className="w-96 flex"> 
					<label>Quantity:</label> 
					<form onSubmit={onAddOrder}>
						<input 
							type="text" 
							className="inline-block	ml-4 border border-slate-900"   
							value={quantity}   
							onChange={(e) => setOrder(e.target.value)}/> 
							<button className="bg-cyan-700 text-white w-32  py-[2px] rounded-md">Add to Cart</button>

					</form>
					
				</div>
			</div>
			
		</div>
		
		</>
		
	)
}

export default AddProduct

function SaveOrder({totalAmount, change, onComputeChange, cash, setCash, handleComputeTotalAmount}) {
	return (
		<div>
			<div className="ml-24 flex flex-col" > 
					<span className="flex"> 
						<label>Total Amount:</label> 					
						<span className="inline-block ml-4 w-48  h-6 border border-slate-900"> {totalAmount}</span> 
					</span>
					<span className="flex"> 
						<label>Cash:</label>				
						<form onSubmit={onComputeChange}>
						<input 
							type="text" 
							className="inline-block	ml-4 border border-slate-900"   
							value={cash}   
							onChange={(e) => setCash(e.target.value)}/> 
							<button className="ml-24 bg-cyan-700 text-white w-16  py-[2px] rounded-md">Save</button>

						</form>					
					</span>
					<span className="flex">
						<label>Change:</label>					
						<span className="inline-block ml-4 w-48  h-6 border border-slate-900">{change} </span>
					</span>
					
				</div>
		</div>
	)
}

export default SaveOrder

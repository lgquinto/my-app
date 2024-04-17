

function Search({query, setQuery, handleSearch}) {
	return (
		<div className="flex gap-8">
			<span className=""> Search Product: </span> 
			<input 
				type="text" 
				className="w-96 border border-slate-900"
				value={query}
				onChange={(e)=> setQuery(e.target.value)}
			/> 
			<button className="bg-cyan-700 text-white w-32  py-[2px] rounded-md" onClick={handleSearch}>Search Product</button>
		</div>
	)
}

export default Search

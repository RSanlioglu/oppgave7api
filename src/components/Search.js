const Search = ({search, setSearch}) => {

    const handleQuery = (e) => {
        setSearch(e.target.value);
    }

    return(
        <>  
            <input name="searchQuery" id="searchQuery" type="text" onChange={handleQuery} placeholder="Search" />
        </>
    )
}

export default Search
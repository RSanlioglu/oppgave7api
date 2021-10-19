const Search = ({setSearch}) => {

    const handleQuery = (e) => {
        setSearch(e.target.value);
    }

    return(
        <>  
            <div className="form__group field">
                <input name="searchQuery" className="form__field" autoComplete="off" id="searchQuery" type="text" onChange={handleQuery} placeholder="Search" />
                <label htmlFor="searchQuery" className="form__label">Search</label>
            </div>
        </>
    )
}

export default Search


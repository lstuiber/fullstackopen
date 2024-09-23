

const Filter = ({newSearch, handleLookup}) => {
    return(
<div>Search:<input name="search" value={newSearch} onChange={handleLookup}/></div>
    )
}


export default Filter;
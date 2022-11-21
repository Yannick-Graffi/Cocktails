import { useState } from "react"
import Card from "./Card"
import SearchBar from "./SearchBar"

function Page() {
    //*****States*****/
    const [searchData, setSearchData] = useState("")
    const [cocktail, setCocktail] = useState([])

    //*****Functions*****/
    // Get the search data from the searchbar component through the props "onchange"
    const handleChange = (e => {
        setSearchData(e.target.value)
    })

    const handleSearch = (e) => {
      e.preventDefault();
      if (searchData) {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchData}`)
            .then(res => res.json())
            .then(data => setCocktail(data.drinks))
      } else {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail`)
        .then(res => res.json())
        .then(data => setCocktail(data.drinks))
      }
    }
    
    //***** UseEffects *****/
    return (  
        <div>
            <header className="App-header">
                <SearchBar 
                onChange={handleChange}
                onSubmit={handleSearch} 
                />
            </header>
            {cocktail.map((cocktail, idx) =>(
                <Card cocktail={cocktail} key={idx}/>
            ))}

        </div>
    );
}

export default Page;
import { useState } from "react";
import { useGlobalContext } from "../Context";
const Search = () => {
    const [text, settText] = useState('');

    const {setSearchTerm, fetchRandomMeal} = useGlobalContext();

    const handleChange = (e) => {
        settText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text) {
            setSearchTerm(text)
            // settText('');
        }
    }

    const handleRandomMeal = () => {
        setSearchTerm('')
        settText('')
        fetchRandomMeal()

    }

    return <header className="search-container">
        
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search your favorite meal" value={text} onChange={handleChange} className="form-input" />
            <button type="submit" className="btn ">Search</button>
            <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>suprise Me!</button>
        </form>













    </header>

        
        
    
}

export default Search;
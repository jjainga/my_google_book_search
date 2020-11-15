import React, {useState} from "react";
import Bannner from "../../Banner/Banner"
import SearchBar from "../Search/Searchbar"
import axios from "axios";



const Search = () => {

    const [SearchState, setSearchState] = useState({})
    const [inputState, setInputState] =useState({
        input: "",
        filter: ""
    })
    const APIKEY = "AIzaSyDB8BknuK7mkMRL4ghU9F-W97ErnGN_YJk"

async function searchList(value) { 
    let data = [];
    switch(value) {
        case "title":
            await axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + inputState.input + "&key="+APIKEY)
            .then((res) =>  res.data.items.map(obj => data.push(obj)));
            setSearchState({search: data})
        break;
        case "author":
            await axios.get("https://www.googleapis.com/books/v1/volumes?q=inauthor:" + inputState.input + "&key="+APIKEY)
            .then((res) =>  res.data.items.map(obj => data.push(obj)));
            setSearchState({search: data})
        break;
        default:
    }
    }

    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputState({...inputState,
          [name]: value
        });
      };

      function handleClick (event) {
        const value = event.target.value
        switch (value){
          case "title":
            setInputState({...inputState, filter : "title"})
            break;
          case "author":
            setInputState({...inputState, filter : "author"})
            break;
          default:
  
        }
      }

      function handleSubmit () {
        searchList(inputState.filter)
      }


    return (
        <div>
            <Bannner />
            <SearchBar handleInputChange={handleInputChange} value={inputState.input} handleClick={handleClick} handleSubmit={handleSubmit} />
            <div>
                <h1>Search Results</h1>
                <hr />
            {SearchState.search !== undefined ? (
            SearchState.search.map(bookObj => 
                <div className="border container w-80 mt-3 text-left" key={bookObj.id}>
                    {console.log(bookObj)}
                        <div className="row" >
                            <div className="col-8">
                                <h2>{bookObj.volumeInfo.title}</h2>
                                <a href={bookObj.volumeInfo.previewLink}>Sample Read</a>
                                <h4>Written By: {bookObj.volumeInfo.authors.join(", ")}</h4>
                            </div>
                        <div className="col-4 text-right">
                            <a href={bookObj.volumeInfo.infoLink} className="btn btn-primary m-3 p-3">View</a>
                            <button type="button" className="btn btn-success m-3 p-3">Save</button>
                        </div>
                    </div>
                    <div className="row">
                        <img className="col-4 h-30" src={bookObj.volumeInfo.imageLinks.thumbnail} alt={bookObj.volumeInfo.title}/>
                        <div className="col-8">
                            <p>{bookObj.volumeInfo.description}</p>
                        </div>
                    </div>
                </div>
    )
        ) : null}
            </div>
        </div>
    )
}

export default Search;
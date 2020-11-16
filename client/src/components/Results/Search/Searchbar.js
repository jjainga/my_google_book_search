import React from "react";

const Searchbar = (props) => {


    return (
        <div>
            <div className="input-group row mb-3 m-auto d-inline-block w-10"></div>
                <div className="input-group-prepend m-auto d-inline-block">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter</button>
                        <div className="dropdown-menu" onChange={props.handleInputChange}>
                            <button className="dropdown-item" value="title" name="filter" onClick={props.handleClick}>Search by Title</button>
                            <button className="dropdown-item" value="author" name="filter" onClick={props.handleClick}>Search by Author</button>
                        </div>
                </div>
                <button type="button" className="btn btn-info w-10" onClick={props.handleSubmit}>Search</button>
                <span className="d-inline-block w-100 text-center">
                    <input 
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="input"
                    type="text" 
                    className="form-control col-8 m-auto " 
                    aria-label="Text input with dropdown button" 
                    placeholder="Select a filter then fill out the search bar!"/>
                    <small className="" >{props.tiny === "title" ? "Search by Title": "Search by Author"}</small>
                </span>
        </div>
    )
}

export default Searchbar;
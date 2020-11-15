import React from "react";

const Searchbar = (props) => {


    return (
        <div>
            <div className="input-group row mb-3 m-auto d-inline-block"></div>
                <div className="input-group-prepend m-auto d-inline-block">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter</button>
                        <div className="dropdown-menu" onChange={props.handleInputChange}>
                            <button className="dropdown-item" value="title" name="filter" onClick={props.handleClick}>Search by Title</button>
                            <button className="dropdown-item" value="author" name="filter" onClick={props.handleClick}>Search by Author</button>
                           
                        </div>
                </div>
                    <input 
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="input"
                    type="text" 
                    className="form-control col-8 m-auto d-inline-block" 
                    aria-label="Text input with dropdown button" 
                    placeholder="Search by Book Title or Author"/>
                    <button type="button" className="btn btn-info" onClick={props.handleSubmit}>Search</button>
        </div>
    )
}

export default Searchbar;
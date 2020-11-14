import React from "react";

const Searchbar = () => {


    return (
        <div>


            <div className="input-group row mb-3 m-auto d-inline-block"></div>
                <div className="input-group-prepend m-auto d-inline-block">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        <div role="separator" className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                </div>
                    <input type="text" className="form-control col-8 m-auto d-inline-block" aria-label="Text input with dropdown button" placeholder="Search by Book Title or Author"/>
        </div>
    )
}

export default Searchbar;
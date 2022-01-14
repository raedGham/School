import React from 'react';

const Search = ({ searchText, handleSearchChange }) => {
    return (

        <div className="input-group">
            <input type="text" className="form-control mt-3" placeholder="Search..." value={searchText} onChange={handleSearchChange} />
            <div className="input-group-append">
                <button className="btn btn-secondary mt-3" type="button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    );
};

export default Search;
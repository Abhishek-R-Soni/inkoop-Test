import React from 'react'

const Header = (props) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="!#">
                    The Rick and Mortya Show
                </a>
                <form
                    class="form-inline my-2 my-lg-0"
                    onSubmit={props.submitHandler}>

                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search By Name"
                        aria-label="Search"
                        name={props.searchTag}
                        onChange={props.searchHandler}
                    />

                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </nav>
        </div>
    );
}

export default Header;
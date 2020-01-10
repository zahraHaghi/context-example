import React, {useContext} from "react";
import {BookContext} from "../contexts/BookContext";

const Navbar = props => {
    const {books} = useContext(BookContext);

    return (
        <div className="navbar">
            <h1>zahra reading list</h1>
            <p>currently you have {books.length}</p>
        </div>
    );
};
export default Navbar;
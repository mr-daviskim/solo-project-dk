import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/AddPiece">Add Piece</Link>
            </li>
            <li>
                <Link to="/WorksInProgress">Works in Progress</Link>
            </li>
            <li>
                <Link to="/FinishedPieces">Finished Pieces</Link>
            </li>
        </ul>
    );
}


export default Navbar; 
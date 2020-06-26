import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav>
                <ol> 
                    <span>link bani hain header say 
                        and we use to in Link tags
                    </span>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/Topics">Topics</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard / Protected/Private Route</Link>
                    </li>
                </ol>
            </nav>
        </div>
    )
}
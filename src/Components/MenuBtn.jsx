import React from "react";
import { Link } from 'react-router-dom';

export function MenuBtn () {
    return (
        <div>
            <Link to="/Menu">
                <button type="button" className="btn btn-primary btn-lg">Revisa nuestro Menú</button>
            </Link>
        </div>
    )
}
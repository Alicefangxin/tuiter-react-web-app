import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <Link to="/">
                Labs
            </Link> |
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/explore">
                Tuiter
            </Link>
            <h1>Hello World 0_0!</h1>

        </>
    )
};

export default HelloWorld;
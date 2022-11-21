import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitListItem from "./tuit-list-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
    // const tuits = useSelector(state => state.tuits)
    // grab tuits and loading flag from reducer
    const {tuits, loading} = useSelector(state => state.tuits)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])

    return(
        <div className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => {
                    return(<TuitListItem key={tuit._id} tuit={tuit}/>)
                })
            }
        </div>
    )
}

export default TuitList;
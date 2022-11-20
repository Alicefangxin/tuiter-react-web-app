import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitListItem from "./tuit-list-item";
import {findAllTuits}
    from "../../services/tuits-thunks";

const TuitList = () => {

    const selectAllTuits = (state) => state.tuits;

    const tuits = useSelector(selectAllTuits);
    console.log(tuits)
    const dispatch = useDispatch();

    useEffect(() =>
            findAllTuits(dispatch),
        []);

    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});



    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitListItem tuit={tuit} />
                )
            }
        </ul>
    )
};
export default TuitList;
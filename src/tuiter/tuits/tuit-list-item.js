import React from "react";
import { useDispatch } from "react-redux";
import './tuit.css';
import TuitStats from "./tuit-stats";
import {deleteTuitsThunk} from "../../services/tuits-thunks";

const TuitListItem = ({ tuit }) => {

    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitsThunk(id))
    }

    return (
        <li className="list-group-item">
            <table>
                <tr>

                    <td className="align-text-top">
                        <img
                            className="rounded-circle wd-avatar-image"
                            src={tuit['logo-image']} alt=""
                        />
                    </td>

                    <td className="ps-3 wd-width100">

                        <i onClick={() => deleteTuitHandler(tuit._id)}  className="fas fa-times fa-pull-right"></i>
                        <span className="fw-bold">{tuit.userName}</span>
                        {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
                        <span className="ms-1 text-secondary">@{tuit.handle}</span>

                        <div>
                            {tuit.tuit}
                        </div>

                        {tuit.attachments && tuit.attachments.image &&
                            <img src={tuit.attachments.image}
                                 className="mt-2 wd-borderRadius20px wd-width100" alt=""
                            />
                        }
                        <TuitStats tuit={tuit} />

                    </td>
                </tr>
            </table>
        </li>
    );
};

export default TuitListItem;
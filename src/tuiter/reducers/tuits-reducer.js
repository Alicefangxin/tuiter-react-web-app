/* import { createSlice } from "@reduxjs/toolkit";
import posts from './data/tuits.json';
const initialState = {
    tuits: posts
}

const tuitReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'like-tuit':
            return ({
                tuits: state.tuits.map(tuit => {
                    if (tuit._id === action.tuit._id) {
                        if (tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                })
            });

        case 'delete-tuit':
            return ({
                tuits: state.tuits.filter(tuit => tuit._id !== action.tuit._id)
            })

        case 'create-tuit':
            const tuit = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "Jose Annunziato",
                "verified": false,
                "handle": "jannunzi",
                "time": "now",
                ...action.tuit,
                "avatar-image": "./images/cat1.jpg",
                "logo-image": "./images/cat1.jpg",
                "stats": {
                    "comments": 0,
                    "retweets": 0,
                    "likes": 0,
                },
            };
            return ({
                tuits: [
                    tuit,
                    ...state.tuits,
                ]
            });

        default:
            return (state);
    }
};

export default tuitReducer; */


import {createTuit, deleteTuit, findAllTuits, updateTuit}
    from "../../services/tuits-thunks";



const tuitReducer = (state = [], action) => {
    switch (action.type) {


        case findAllTuits():
            return action.tuits;

        case deleteTuit():
            return state.filter(
                tuit => tuit._id !== action.tuit._id);

        case createTuit():
            return [
                ...state,
                action.newTuit
            ];

        case updateTuit():
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);

        case 'like-tuit':
            return ({
                tuits: state.tuits.map(tuit => {
                    if (tuit._id === action.tuit._id) {
                        if (tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                })
            });

        case 'delete-tuit':
            return ({
                tuits: state.tuits.filter(tuit => tuit._id !== action.tuit._id)
            })

        case 'create-tuit':
            const tuit = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "Jose Annunziato",
                "verified": false,
                "handle": "jannunzi",
                "time": "now",
                ...action.tuit,
                "avatar-image": "/images/profile.jpg",
                "logo-image": "/images/profile.jpg",
                "stats": {
                    "comments": 21,
                    "retweets": 22,
                    "likes": 23
                },
            };
            return ({
                tuits: [
                    tuit,
                    ...state.tuits,
                ]
            });

        default:
            return (state);
    }
};

export default tuitReducer;

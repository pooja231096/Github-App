import actions from './ActionConstants';
import Axios from 'axios';
export function StartLoadPost() {
    return {
        type: actions.LOADING_POST
    }
}

export function finishLoadingPost(data) {
    return {
        type: actions.LOADING_FINISHED,
        data: data
    }
}

export function loadPost() {
    return (dispatch, getState) => {
        dispatch(StartLoadPost());
        console.log(JSON.stringify(getState()));

        console.log("_____________________")
        Axios.get("https://api.github.com/users")
            .then(response => {

                dispatch(finishLoadingPost(response.data));
                console.log(JSON.stringify(getState()));

                console.log("_____________________")
            })
            .catch(err => {
                console.log(err);
            })

    }
}
import actions from '../../Actions/ActionConstants';
const initialState = {
    userList: [],
    userLoadingStatus: false
}

function GithubReducer(prevState = initialState, action) {
    switch (action.type) {
        case actions.LOADING_POST:
            return { ...prevState, userLoadingStatus: true }
        case actions.LOADING_FINISHED:
            return { ...prevState,userList:action.data, userLoadingStatus: false }
        default:
            return prevState
    }

    return prevState;
}

export default GithubReducer;
/*
What is this sorcery?? Importing a CSS file in JavaScript?
Make sure you understand what's going on here!!!
*/
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './components/Main/Main'
import App from './components/App';
import Search from './components/Search';
import User from './components/User';
import Followers from './components/Followers';
import Following from "./components/Following";
import Repo from "./components/Repo";
import Repomain from './components/Main/Repomain'
import GithubRepo from './components/GithubRepo';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import GithubReducer from './components/Reducers/GithubReducer'
/*/
Rendering a router will output the right component tree based on the current URL.
Nested routes' components will be passed down to the parent as `this.props.children`

If the URL is /, then <App/> will be rendered, and this.props.children will be <Search/> (this is the IndexRoute)
If the URL is /user/ziad-saab then <App/> will be rendered, and this.props.children will be <User/>
The <User/> instance will be passed a prop called `params`. It will be an object with `{username: 'ziad-saab'}`
*/
let store = createStore(GithubReducer,applyMiddleware(thunk));
console.log("woah!");
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route exact path="user" component={Main}/>
            <Route exact path="repo" component={Repomain}/>
            <Route exact path="reposit/:html_url/" component={GithubRepo}/>
            <Route exact path="user/:username" component={User}>
                <Route exact path="following" component={Following}/>
                <Route exact path="followers" component={Followers}/>
                <Route exact path="repos" component={Repo}/>
            </Route>
        </Route>
    </Router>
);
console.log(store.getState());
console.log("-----++++++++")
ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));

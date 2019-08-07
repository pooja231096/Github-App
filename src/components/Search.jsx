import React from 'react';
import { browserHistory as history } from 'react-router';
import { Link } from 'react-router';
/*
This component displays a form where the user can enter a GitHub username
When they submit the form either by pressing ENTER or clicking the button,
we will use react-router's history.push function to push a new URL to the history.

This will have as an effect to navigate to a new URL, which will display the User component
Why are we doing this instead of using a <Link>? The answer is straightforward, but make sure you understand!!!
*/
class Search extends React.Component {
    constructor() {
        super();

        // Why do we need to do this?? Make sure you understand!!!
    }
    _handleSubmit(e) {
        e.preventDefault();
        let url = '/user/'+this.refs.userInput.value
        history.push(url)
    }

    render() {
        return (
            <div className="search-page">
                <h3>Enter a GitHub username</h3>
                <div className="page">
                <Link className="userpage" to="/user">Users</Link>
                <Link className="repopage" to="/repo">Repositories</Link>
                </div>
                <form onSubmit={this._handleSubmit.bind(this)}>
                    <input ref="userInput" className="search-page__input" type="text" />
                   
                    <button type="submit" className="search-page__button">Search</button>
                
                </form>
                
            </div>
        );
    }
};

export default Search;

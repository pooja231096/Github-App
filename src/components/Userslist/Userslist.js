import React from 'react';
import './Users.css';
import { browserHistory as history } from 'react-router';
class Userslist extends React.Component
{
  _handleuserlist(e) {
    e.preventDefault();
   // console.log(this.props.name)
   let url = '/user/'+this.props.name
   history.push(url)
}

render()
{
  return( 
    <div onClick={this._handleuserlist.bind(this)}>
    <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">

          <img className="image" src={this.props.avatar}
   alt="Avatar"></img>
          <span  className="card-title"><b>Owner:{this.props.name}</b></span>
     
        </div>
      </div>
    </div>
  </div>
  </div> 
   )
  };
}

            
export default Userslist;

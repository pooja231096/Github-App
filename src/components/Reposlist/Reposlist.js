import React from 'react';
import './Repos.css';
import { browserHistory as history } from 'react-router';
class Reposlist extends React.Component
{
  _handlerepolist(e) {
    e.preventDefault();
   // console.log(this.props.name)
   let url =this.props.url
   window.location.href=this.props.url;
  console.log(url)
   history.push(url);
}
render()
{
  return( 
<div onClick={this._handlerepolist.bind(this)}>
    <div className="row">
    <div className="col s12 m7">
      <a className="card" href={this.props.url } style={{display: 'block'}}>
        <div className="card-image">
          
          <span  className="card-title">Repository Name:<b>{this.props.name}</b></span><br></br>
          <span  className="card-title">Owner name:<b>{this.props.owner}</b></span>
        </div>
      </a>
    </div>
  </div>
  </div>
   )
  };
}

            
export default Reposlist;

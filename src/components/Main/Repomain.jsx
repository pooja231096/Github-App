import React from 'react';
import Reposlist from '../Reposlist/Reposlist';
import Axios from 'axios';
export default class Repomain extends React.Component {
    constructor()
    {
        super();
    this.state = {
        reposit: []
      };
     
          Axios.get("https://api.github.com/repositories?since=50").then(response=>{
         
              //let result = response.data

            this.setState({reposit:response.data})
console.log("here")
          });
      }
    render()
    {
    return(
        <div> 
            {console.log(this.state.reposit)}
    {this.state.reposit.map((repo)=>
      <Reposlist url={repo.html_url} name={repo.name} owner={repo.owner.login}/> 
     )}
     
        </div>                    
    )
    }
}

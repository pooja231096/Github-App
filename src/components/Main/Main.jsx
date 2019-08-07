import React from 'react';
import Userslist from '../Userslist/Userslist';
import { connect } from "react-redux";
import { loadPost } from '../../Actions/ActionCreators';

class Main extends React.Component {
    componentDidMount = () => {
        this.props.loadPost();
      }
    render()
    {
    return(
        <div> 
            
    {this.props.users.map((user)=>
      <Userslist name={user.login}  avatar={user.avatar_url}/> 
     )}
     
        </div>
    )
    };

}
const mapStateToProps = state => {
  
    return {
      users: state.userList,
      loadingStatus: state.userLoadingStatus
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    return {
      loadPost: () => dispatch(loadPost())
    }
  
  
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Main);
  

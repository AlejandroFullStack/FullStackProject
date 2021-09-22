import React, {Component} from 'react';

class Navigation extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      title : ''
    };

  }

  render(){
    return(
          <nav className="navbar navbar-dark bg-dark">
            <a href=""  className="text-white">
              N° Task 
              <span className="badge  badge-pill badge-light ml-2 ">
                { this.props.title } 
              </span>
            </a>  
          </nav>  
    )
  }
}

export default Navigation;

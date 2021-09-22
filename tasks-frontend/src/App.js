import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';

const API = 'http://localhost:3000/api/tasks';
//const DEFAULT_QUERY = '?';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hits: [],
      isFetch: true,
      error: null,
      message: '',
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  
  componentDidMount(){
    this.apiGet();
  }
  
  apiGet() {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then((data) => this.setState({hits: data, isFetch: false })) 
      .catch(error => this.setState({error, isFetch: false }));
  }
  
 


  apiDelete(index){
    fetch(API+"/"+index, {  
      method: 'DELETE'
    })
      .then(() => this.setState({isFetch: true,message: "Delete successful" })) 
  }

  apiPost(body){
    fetch(API, {  
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response =>{
      if (response.ok) {
        console.log( "Exito");
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .then((response) => this.setState({ message: response, isFetch: true })) 
    .catch(error => this.setState({error, isFetch: false }))
    
  }
  
  handleAddTodo(todo){
    
    this.apiPost(todo);
    
  }
  
  removeTodo(index){
    
    if (window.confirm('Are you sure you want delete it?')) {
      this.apiDelete(index);       
    }

  }

  render(){
   
    const { hits, isFetch,error, message } = this.state;
       
    if (error) {
      return (<p>{error.message}</p>);
    }
 
    if (isFetch){
      this.apiGet();
      return ('Loading...');

    }

    const  todos = hits.map((todo,i) => {
      return (
        <div className="col-md-4" key={i} >
          <div className="card mt-4">
            <div className="card-header">
              
                
             <div className="row">
               <div className="col-md-6">
               <h5> {todo.title} </h5> 
               
               </div>
               <div className="col-md-6">
                  <span className="badge  badge-pill badge-danger ml-2 ">
                    id:{todo.id}
                  </span>
               </div>
             
                <br />
                <div className="row">
                  <div className="col text-center">
                    <span className="badge  badge-pill badge-danger ml-2 ">
                      {todo.priority}
                    </span>
                  </div>
                
                </div>

             </div>
             
            </div>
            <div className="card-body">
              <p> {todo.description} </p>
              <p> {todo.responsible} </p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this,todo.id)}
                >
                  Delete
              </button>
            </div>
          </div> 
        </div>
      )
       
    });

    
    return (
        <div className="App">
         
            <Navigation 
              title = {hits.length} 
            />  
           
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo} />
                </div>
                <div className="col-md-8">
                  <div className="row">
                    {todos}
                  </div>
                  <br /> 
                </div>
              </div>
            </div> 
        </div>
      );
  }
}

export default App;

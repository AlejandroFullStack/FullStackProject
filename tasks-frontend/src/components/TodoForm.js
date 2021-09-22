import React, {Component} from 'react';


class TodoForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            title : '',
            responsible: '',
            description: '',
            priority : 'low'
        };
        /* Reconoce los datos pasados al componente */
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        //console.log(e.target.value, e.target.name)
        const {value, name} = e.target;
        this.setState( {
            [name] : value,

        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }

    render() {
        return (
        <div className="container"> 
            <div className="col">
                <div className="card ">
                    <form className="card-body" onSubmit={ this.handleSubmit}>
                        <div className="form-group ">
                            <input 
                            type="text"
                            name="title"
                            id = "title"
                            onChange= { this.handleInput}
                            className = "form-control"
                            placeholder ="Title"
                            
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="responsible"
                            id = "responsible"
                            
                            onChange= { this.handleInput}
                            className = "form-control"
                            placeholder ="Responsible"
                            
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="description"
                            id = "description"
                            onChange= { this.handleInput}
                            className = "form-control"
                            placeholder ="description"
                            
                            />
                        </div>
                        <div className="form-group">
                            <select
                                name="priority"
                                id = "priority"
                                className = "form-control"
                                onChange= { this.handleInput}
                            >
                                <option>low</option>
                                <option>medium</option>
                                <option>high</option>
                            </select>
                            
                        </div>
                        <button
                            className="btn btn-primary"
                            >
                            Save
                        </button>
                    </form>

                    </div> 
                    </div>
           </div>
        )
    }
}


export default TodoForm;
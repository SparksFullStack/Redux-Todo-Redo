import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./TodoInput.css";

class TodoInput extends Component{
    constructor(props){
        super(props);

        this.state = {
            newTodo: "",
        }
    }

    handleUpdateNewTodo = event => {
        event.preventDefault();
        this.setState({newTodo: event.target.value});
    }

    render(){
        return (
            <div className="todoInput">
                <form className="todoForm" onSubmit={(event) => {
                            event.preventDefault();
                            this.props.submit(this.state.newTodo)
                            this.setState({newTodo: ""})}}>
                    <input className="todoInput__input" value={this.state.newTodo} placeholder="Add New Task" onChange={this.handleUpdateNewTodo} />
                    <br />
                    <button className="todoInput__button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submit: (newTaskName) => dispatch({type: "ADD_TODO", payload: newTaskName}),
    }
}

export default connect(null, mapDispatchToProps)(TodoInput);
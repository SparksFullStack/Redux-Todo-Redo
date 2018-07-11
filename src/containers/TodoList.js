import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoList.css';

import TodoItem from '../components/TodoItem';
import TodoInput from "./TodoInput";

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    mapOverList = () => {
        return this.props.list.map(taskItem => <TodoItem key={taskItem.task} taskItem={taskItem} />)
    }

    render(){
        return (
            <div className="todoList">
                <div className="todoList__list">
                    {this.mapOverList()}
                </div>

                <div className="inputForm">
                    <TodoInput />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        list: state
    }
}

export default connect(mapStateToProps)(TodoList);
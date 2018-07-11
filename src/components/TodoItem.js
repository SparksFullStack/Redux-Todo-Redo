import React from 'react';
import './TodoItem.css';
import { connect } from "react-redux";

class TodoItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
        this.setState({isComplete: this.props.taskItem.completed});
    }

    handleToggleComplete = (taskObj) => {
        let newState = !this.state.isComplete;
        this.setState({isComplete: newState});
        this.props.toggleComplete(taskObj);
    }

    render(){
        return(
            <div onClick={() => this.handleToggleComplete(this.props.taskItem)} className="todoItem">
                <h3>Task</h3>
                <p style={{textDecoration: this.state.isComplete ? "line-through" : "none"}}>{this.props.taskItem.task}</p>
            </div>
        )
    }
}

const styles = {
    completed: {
        textDecoration: "line-through"
    }
}

const mapDispatchToProps = dispatch => {
    return ({
            toggleComplete: (taskObj) => dispatch({type: "TOGGLE_COMPLETE", payload: taskObj})
        }
    )
}

export default connect(null, mapDispatchToProps)(TodoItem);
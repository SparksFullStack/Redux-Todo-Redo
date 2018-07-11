const initialTodoList = [
    {
        task: "finish the todo list",
        completed: false,
    },
    {
        task: "handle student loans",
        completed: false,
    },
    {
        task: "call Marcia",
        completed: false,
    }
];

const rootReducer = (state = initialTodoList, action) => {
    switch (action.type){
        case "ADD_TODO":
            console.log("Add Todo was activated");
            let newStateAdd = state.slice();
            let newTask = {task: action.payload, completed: false};
            newStateAdd.push(newTask);
            return newStateAdd;
        case "TOGGLE_COMPLETE":
            let objIndex = state.indexOf(action.payload);
            let newStateToggle = state.slice();
            newStateToggle[objIndex].completed = !newStateToggle[objIndex].completed;
            console.log(newStateToggle)
            return newStateToggle;
        default:
            console.log("The Default Case was Activated")
            return state;
    }
}

export default rootReducer;
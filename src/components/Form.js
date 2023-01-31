import { useEffect } from "react";

function Form (props) {

    // Functions
    function handleInputChange (event) {
        props.setSingleTodo(event.target.value);
    }

    function handleSubmit (event) {
        event.preventDefault();

        if(document.getElementById('todoInput').value != ''){
            props.setTodoList([...props.todoList,{
                id: new Date().getMilliseconds(),
                task: props.singleTodo,
                completed: false
            }]);
    
            props.setSingleTodo('');
            document.getElementById('todoInput').value = '';
        } else {
            alert("Please Insert A Value");
        }
    }

    function handleFilterChange () {
        props.setFilteredList(props.todoList.filter(todo => {
            if (document.getElementById('filterInput').value === 'completed') {
                return todo.completed === true;
            } else if (document.getElementById('filterInput').value === 'uncompleted') {
                return todo.completed === false;
            } else {
                return todo;
            }
        }));
    }

    // useEffect
    useEffect (() => {
        handleFilterChange();
    },[props.todoList, props.setFilteredList]);

    return(
        <form className="mt-4 d-flex align-items-center justify-content-center" about="Enter Todo Item" lang="en" name="todoForm" spellCheck='false' title="Todo Form" translate="yes" onSubmit={handleSubmit}>
            <div className="position-relative">
                <input className="text-white border-0 p-2 px-4 glass" type="text" name="todoInput" id="todoInput" placeholder="add todo here ..." style={{outline:'none'}} onChange={handleInputChange} />
                <button className="btn glass rounded-0 position-absolute top-50 end-0 translate-middle-y border-2 text-white" type="submit">
                    +
                </button>
            </div>
            <div>
                <select className="p-2 ms-2 glass text-dark border-0" name="filterInput" id="filterInput" onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
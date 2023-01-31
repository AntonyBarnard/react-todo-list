function PrintList (props) {

    // Functions
    function handleCompleted(event) {
        props.todoList.map(todo => {
            if(todo.id == event.target.id) {
                todo.completed = !todo.completed;
            }
        })
        props.setFilteredList(props.todoList.filter(todo => {
            if (document.getElementById('filterInput').value == 'completed') {
                return todo.completed == true;
            } else if (document.getElementById('filterInput').value == 'uncompleted') {
                return todo.completed == false;
            } else {
                return todo;
            }
        }));
    }

    function handleDelete (event) {
        props.setTodoList(props.todoList.filter(todo => {
            if(todo.id != event.target.title) {
                return todo.id;
            }
        }));
    }
    
    return(
        <div className="my-4 mx-2">
            {props.filteredList.map(item => (
                <div
                    key={item.id}
                    className='d-grid text-white mb-3 align-items-center'
                    style={{gridTemplateColumns:'.35fr 2fr 1fr'}}
                >
                        <div className="position-relative" style={{height:'100%', width:'100%'}}>
                            <input
                                className="position-absolute translate-middle-y form-check-input bg-danger"
                                type="checkbox"
                                name="checkboxInput"
                                id={item.id}
                                style={{border:'none', top:'41%', height:'75%', width:'100%',appearance:'checkbox'}}
                                onChange={handleCompleted}
                                checked={item.completed ? true : false}
                            />
                        </div>
                        <label
                            htmlFor={item.id}
                            style={{userSelect:'none'}}
                            className='ms-3 py-1 glassBox px-4'
                        >
                                {item.task}
                        </label>
                        <div className="text-end">
                            <i
                                className="fs-4 bi bi-trash btn glass text-warning" onClick={handleDelete}
                                title={item.id}
                            >
                            </i>
                        </div>
                </div>
            ))}
        </div>
    );
}

export default PrintList;
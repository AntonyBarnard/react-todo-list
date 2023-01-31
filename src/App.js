import { useEffect, useState } from 'react';

// Components
import Header from './components/Header';
import Form from './components/Form';
import PrintList from './components/PrintList';

function App () {

    // States
    const [ singleTodo, setSingleTodo] = useState('');
    const [ todoList, setTodoList] = useState([]);

    const [ filteredList, setFilteredList] = useState([]);

    // functions
    function loadFromLocalStorage () {
        setFilteredList(JSON.parse(localStorage.getItem("List")));
    }

    function saveToLocalStorage () {
        localStorage.setItem("List",JSON.stringify(todoList));
    }

    // useEffect
    useEffect(() => {
        loadFromLocalStorage();
    },[]);

    useEffect(() => {
        saveToLocalStorage();
    },[filteredList]);

    

    return(
        <div className='position-absolute start-50 translate-middle-x glass m-auto p-4 border' style={{maxWidth:'420px', top:'3%'}}>
            <Header />
            <Form
                singleTodo={singleTodo}
                setSingleTodo={setSingleTodo}
                todoList={todoList}
                setTodoList={setTodoList}
                setFilteredList={setFilteredList}
            />
            <PrintList 
                singleTodo={singleTodo}
                filteredList={filteredList}
                setFilteredList={setFilteredList}
                todoList={todoList}
                setTodoList={setTodoList}
            />
        </div>
    );
}

export default App;
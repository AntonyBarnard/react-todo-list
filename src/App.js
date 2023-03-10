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

    return(
        <div className='container position-absolute start-50 translate-middle-x p-4' style={{maxWidth:'420px' ,top:'3%'}}>
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
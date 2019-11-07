import React, { useState } from 'react'
import { Button, TextField, List, ListItem } from '@material-ui/core'

/*
  Welcome developer! Please fully customize this component as needed.
*/

const MyComponent = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    return (
        <div>
            <div>
                <TextField
                    onChange={(e) => setTodo(e.currentTarget.value)}
                    onKeyUp={e => {
                        if((e.keyCode === 13) && todo){
                            setTodos([...todos, {value: todo}]);
                            setTodo('');
                        }
                    }}
                    value={todo}

                />
                <Button
                    onClick={() => {
                        todos.push();
                        setTodos([...todos, {value: todo}]);
                        setTodo('');
                    }}
                    disabled={!todo}
                    title={!todo ? 'Add todo body first' : ''}
                >
                    Add Todo
                </Button>
            </div>
            <div>

            </div>

            <div>
                <List>
                    {todos.map((tD, i) =>
                        <ListItem
                            key={i}
                            onClick={() => {
                                todos[i].completed = true;
                                setCompleteTodos([...completeTodos, tD]);
                                todos.splice(i, 1);
                                setTodos([...[], ...todos]);
                            }}
                            style={{cursor: 'pointer'}}
                        >
                            {tD.value}
                        </ListItem>
                    )}
                </List>
            </div>

            <div>
                {completeTodos.length
                    ?
                    <React.Fragment>
                        <h2>
                            Completed
                        </h2>
                        <List>
                            {completeTodos.map((tD, i) =>
                                <ListItem
                                    key={i}
                                    onClick={() => {
                                        setTodos([...todos, tD]);
                                        completeTodos.splice(i, 1)
                                        setCompleteTodos([...[], ...completeTodos])
                                    }}
                                    style={{textDecoration: 'line-through', cursor: 'pointer'}}
                                >
                                    {tD.value}
                                </ListItem>
                            )}
                        </List>
                    </React.Fragment>
                    :null
                }
            </div>
        </div>
    )

}


const MyComponent2 = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <div>
                <TextField
                    onChange={(e) => setTodo(e.currentTarget.value)}
                    onKeyUp={e => {
                        if((e.keyCode === 13) && todo){
                            setTodos([...todos, {value: todo, completed: false}]);
                            setTodo('');
                        }
                    }}
                    value={todo}

                />
                <Button
                    onClick={() => {
                        todos.push();
                        setTodos([...todos, {value: todo, completed: false}]);
                        setTodo('');
                    }}
                    disabled={!todo}
                    title={!todo ? 'Add todo body first' : ''}
                >
                    Add Todo
                </Button>
            </div>
            <div>

            </div>

            <div>
                <List>
                    {todos.map((tD, i) =>
                        {
                            if(tD.completed){return null;}

                            return (
                                <ListItem
                                    key={i}
                                    onClick={() => {
                                        todos[i].completed = true;
                                        setTodos([...[], ...todos]);
                                    }}
                                >
                                    {tD.value}
                                </ListItem>
                            );
                        }
                    )}
                </List>
            </div>

            <div>
                <h2>
                    Completed
                </h2>
                <List>
                    {todos.map((tD, i) =>
                        {
                            if(!tD.completed){return null;}

                            return (
                                <ListItem
                                    key={i}
                                    onClick={() => {
                                        todos[i].completed = false;
                                        setTodos([...[], ...todos]);
                                    }}
                                    style={{textDecoration: 'line-through'}}
                                >
                                    {tD.value}
                                </ListItem>
                            );
                        }
                    )}
                </List>
            </div>
        </div>
    )

}

export default MyComponent

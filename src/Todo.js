import React from "react";

class Todo extends React.Component {
    state = {
        todos: [
            { value: 1, text: "111", done: false, isVisible: true },
            { value: 2, text: "222", done: true, isVisible: true },
            { value: 3, text: "333", done: false, isVisible: true }
        ],
        oldTodos: [],
        showOld: false,
        newItemText: '',
        checkAll: false
    };

    onNewItemTextChange = text => {
        this.setState({
            newItemText: text
        });
        console.log(this.state.newItemText);
    };

    onItemAdded = (event) => {
        event.preventDefault();
        if ("" === this.state.newItemText) {
            return;
        }
        this.setState(({todos, newItemText}) => {
            const newTodo = {
                value: todos.length + 1,
                text: newItemText,
                done: false,
                isVisible: true
            };
            return {
                todos: [...todos, newTodo],
                newItemText: ""
            };
        });
        /*
        if (event.key === "Enter") {
            if ("" === this.state.newItemText) {
                return;
            }
            this.setState(({ todos, newItemText }) => {
                let newTodo = {
                    value: todos.length + 1,
                    text: newItemText,
                    done: false,
                    isVisible: true
                };
                return {
                    todos: [...todos, newTodo],
                    newItemText: ""
                };
            });
        }*/
    }

    onCheckedChange(index) {
        this.setState((prevState) => {
            let newTodos = prevState.todos;
            newTodos.map((todo) => {
                if (todo.value === index) {
                    todo.done = !todo.done;
                }
            });
            return {
                todos : newTodos
            };
          })
    }

    onAllItemsCheck() {
        this.setState((prewState)=>{
            let newTodos = [...prewState.todos];
            const newCheckAll = !prewState.checkAll;
            newTodos.forEach((item)=> item.done = newCheckAll);
            return {
                todos : newTodos,
                checkAll : newCheckAll
            }
        });
    }

    onDeleteItem(todo) {
        this.setState((prevState) => {
            const todos = prevState.todos.filter(item => item !== todo);
            const oldText =[ ...prevState.oldTodos, todo.text];
            return {
                todos: todos,
                oldTodos:  oldText
            };
        });
    }

    onButtonClick(typeButton) {
        if ( typeButton === 'showAll') {
            this.setState((prevState) => {
                let todos = prevState.todos;
                todos.forEach((todo) => todo.isVisible = true);
                return { todos };
            });
        }
        if ( typeButton === 'showDone') {
            this.setState((prevState) => {
                const todos = prevState.todos;
                todos.forEach((todo) => {
                    if (todo.done) {
                        todo.isVisible = true;
                    } else {
                        todo.isVisible = false;
                    }
                });
                return { todos };
            });
        }
        if ( typeButton === 'showActive') {
            this.setState((prevState) => {
                const todos = prevState.todos;
                todos.forEach((todo) => {
                    if (!todo.done) {
                        todo.isVisible = true;
                    } else {
                        todo.isVisible = false;
                    }
                });
                return { todos };
            })
        }
        if ( typeButton === 'clearDone') {
            this.setState((prevState) => {
                const todos = prevState.todos.filter(item => !item.done);
                const oldTodos = prevState.todos.filter(item => item.done);
                return {
                    todos,
                    oldTodos : [...prevState.oldTodos, ...oldTodos]
                };
            });
        }
        if ( typeButton === 'showOld') {
            this.setState({
                showOld: true
            });
        }
    }

    render() {
        const state = this.state.todos.filter(todo => todo.isVisible === true);

        return (
            <div className="Todo">
                <h2 className="Todo__title">My Todo</h2>
                <input
                    type="checkbox"
                    name="chackAll"
                    checked={this.state.checkAll}
                    onChange={() => this.onAllItemsCheck()}
                />
                <form onSubmit={this.onItemAdded}>
                    <input
                        type="text"
                        className="Todo__new-item-text"
                        value={this.state.newItemText}
                        onChange={event => {
                            this.onNewItemTextChange(event.target.value);
                        }}
                    />
                    <button  className="Todo__add-button" >
                        Add
                    </button>
                </form>
                <ul className="Todo__list">
                    {state.map(todo => (
                        <Todo.Item
                            key={todo.value}
                            value={todo.value}
                            checked={todo.done}
                            onChange={() => this.onCheckedChange(todo.value)}
                            onDelete={() => this.onDeleteItem(todo)}
                        >
                            {todo.text}
                        </Todo.Item>
                    ))}
                </ul>
                <br />
                <button
                    className="Todo__add-button"
                    onClick={() => this.onButtonClick('showAll')}
                >
                    All
                </button>
                <button
                    className="Todo__add-button"
                    onClick={() => this.onButtonClick('showDone')}
                >
                    Done
                </button>
                <button
                    className="Todo__add-button"
                    onClick={() => this.onButtonClick('showActive')}
                >
                    Active
                </button>
                <button
                    className="Todo__add-button"
                    onClick={() => this.onButtonClick('clearDone')}
                >
                    Clear done
                </button>
                <button
                    className="Todo__add-button"
                    onClick={() => this.onButtonClick('showOld')}
                >
                    Show cleared todo
                </button>
                <p>{state.length} has left</p>
                <Todo.Old showStatus={this.state.showOld} oldTodos={this.state.oldTodos} />
            </div>
        );
    }
}

Todo.Item = ({ value, children, checked, onChange, onDelete }) => {
    const styleLi = checked ? "Todo__item Todo__item_done" : "Todo__item";
    return (
        <div>
            <input
                type="checkbox"
                name="todoItem"
                checked={checked}
                onChange={() => onChange()}
            />
            <li className={styleLi}>
                {children}
                <button onClick={() => onDelete()}>x</button>
            </li>
        </div>
    );
};

Todo.Old = ({ showStatus, oldTodos }) => {
    if (!showStatus) {
        return <div>Work to done todos! =^_^=</div>;
    } else {
        console.log(oldTodos);
    return (
        <div>
            <ul>
                {oldTodos.map(todo =>
                <li key={todo.value}>
                    {todo.text}
                </li>
                ) }
            </ul>
        </div>
        );
    }
};

export default Todo;

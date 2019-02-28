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
        newItemText: "",
        checkAll: false
    };

    onNewItemTextChange = text => {
        this.setState({
            newItemText: text
        });
    };

    onItemAdded(event) {
        if ("" === this.state.newItemText) {
            return;
        }
        if (event.key === "Enter") {
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
        }
    }

    onButtonAdded() {
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
    }
    onCheckedChange(todo) {
        const todoChecked = todo;
        todoChecked.done = !todoChecked.done;
        this.setState({ todoChecked });
    }

    onAllItemsCheck() {
        let todo = this.state;
        todo.checkAll = !todo.checkAll;
        const check = todo.checkAll;
        todo.todos.map(todo => {
            todo.done = check;
        });
        this.setState({ todo });
    }

    onDeleteItem(todo) {
        const todos = this.state.todos.filter(item => item !== todo);
        const oldTodos = this.state.oldTodos;
        oldTodos.push(todo);
        this.setState({ todos, oldTodos });
    }

    onButtonAll() {
        const todos = this.state.todos;
        todos.map(todo => {
            todo.isVisible = true;
        });
        this.setState({ todos });
    }

    onButtonDone() {
        const todos = this.state.todos;
        todos.map(todo => {
            if (!todo.done) {
                todo.isVisible = false;
            }
        });
        this.setState({ todos });
    }

    onButtonActive() {
        const todos = this.state.todos;
        todos.map(todo => {
            if (todo.done) {
                todo.isVisible = false;
            }
        });
        this.setState({ todos });
    }

    onButtonClearDone() {
        const todos = this.state.todos.filter(item => !item.done);
        const oldTodos = this.state.todos.filter(item => item.done);
        this.setState({ todos, oldTodos });
    }

    onButtonShowOld() {
        this.setState({
            showOld: true
        });
    }
    render() {
        const state = this.state.todos.filter(todo => todo.isVisible === true);
        return (
            <div className="Todo">
            <h2 className="Todo__title">My Todo</h2>
        <input
        type="checkbox"
        name="chackAll"
        checked={state.checkAll}
        onChange={() => this.onAllItemsCheck()}
        />
        <input
        type="text"
        className="Todo__new-item-text"
        value={state.newItemText}
        onChange={event => {
            this.onNewItemTextChange(event.target.value);
        }}
        onKeyPress={event => {
            this.onItemAdded(event);
        }}
        />
        <button
        className="Todo__add-button"
        onClick={() => this.onButtonAdded()}
    >
        Add
        </button>
        <ul className="Todo__list">
            {state.map(todo => (
                    <Todo.Item
                key={todo.value}
                value={todo.value}
                checked={todo.done}
                onChange={() => this.onCheckedChange(todo)}
        onDelete={() => this.onDeleteItem(todo)}
    >
        {todo.text}
    </Todo.Item>
    ))}
    </ul>

        <br />
        <button className="Todo__add-button" onClick={() => this.onButtonAll()}>
        All
        </button>
        <button
        className="Todo__add-button"
        onClick={() => this.onButtonDone()}
    >
        Done
        </button>
        <button
        className="Todo__add-button"
        onClick={() => this.onButtonActive()}
    >
        Active
        </button>
        <button
        className="Todo__add-button"
        onClick={() => this.onButtonClearDone()}
    >
        Clear done
        </button>
        <button
        className="Todo__add-button"
        onClick={() => this.onButtonShowOld()}
    >
        Show cleared todo
        </button>
        <p>{state.length} has left</p>
        <Todo.Old showStatus={this.state.showOld} value={this.state.oldTodos} />
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

Todo.Old = ({ showStatus, value }) => {
    if (!showStatus) {
        return <div>Clear todo what you done</div>;
    }
    if (0 === value.length) {
        return <div>No done todos, make clear</div>;
    }

    if (1 === value.length) {
        console.log(value[0]);
        return <div>{value[0].text}</div>;
    }
    if (value.length > 1) {
        let resultDiv = "";
        value.map(item => {
            resultDiv += " --- " + item.text;
        });
        return <div>{resultDiv}</div>;
    }
    return (<div>Work with smile =^_^= </div>);
};

export default Todo;

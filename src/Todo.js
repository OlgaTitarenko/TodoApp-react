import React from "react";

class Todo extends React.Component {
    state = {
        todos: [
            { id: 1, text: "111", done: false, isVisible: true },
            { id: 2, text: "222", done: true, isVisible: true },
            { id: 3, text: "333", done: false, isVisible: true }
        ],
        filterBy:'',
        oldTodos: [],
        showOld: false,
        newItemText: '',
        checkAll: false
    };

    onNewItemTextChange = text => {
        this.setState({
            newItemText: text
        });
    };

    onItemAdded = (event) => {
        event.preventDefault();
        if ("" === this.state.newItemText) {
            return;
        }
        this.setState(({todos, newItemText}) => {
            const newTodo = {
                id: +(new Date()),
                text: newItemText,
                done: false,
                isVisible: true
            };
            return {
                todos: [...todos, newTodo],
                newItemText: ""
            };
        })
    }

    onCheckedChange(index) {
        this.setState((prevState) => {
            let newTodos = prevState.todos;
            newTodos.map((todo) => {
                if (todo.id === index) {
                    todo.done = !todo.done;

                }
            });
            return {
                todos: newTodos
            }
        })
    }

    onAllItemsCheck() {
        this.setState((prewState)=>{
            const newCheckAll = !prewState.checkAll;
            const newTodos = prewState.todos.map(todo => ({...todo, done: newCheckAll}));
            return {
                todos : newTodos,
                checkAll : newCheckAll
            }
        });
    }

    onDeleteItem(index) {
        this.setState((prevState) => {
            const todos = prevState.todos.filter(item => item.id !== index);
            const oldTodo = prevState.todos.filter(item => item.id === index);
            const oldTodos =[ ...prevState.oldTodos, oldTodo];
            return {
                todos,
                oldTodos
            };
        });
    }

    onButtonClick(typeButton) {
        this.setState({filterBy: typeButton})
    }
    onButtonCleanDone() {
        this.setState((prevState) => {
            const todos = prevState.todos.filter(item => !item.done);
            const oldTodos = prevState.todos.filter(item => item.done);
            return {
                todos,
                oldTodos : [...prevState.oldTodos, ...oldTodos]
            };
        });
    }

    onButtonShowOld() {
        this.setState((prevState) => {
            return { showOld: !prevState.showOld }
        })
    }

    filterTodos() {
        const {todos, filterBy} = this.state;
        switch (filterBy) {
            case 'showDone': return todos.filter(todo => todo.done);
            case 'showActive': return todos.filter(todo => !todo.done);
            default: return todos;
        }
    }

    render() {
        const state =  this.filterTodos();

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
                            key={todo.id}
                            value={todo.id}
                            checked={todo.done}
                            onChange={() => this.onCheckedChange(todo.id)}
                            onDelete={() => this.onDeleteItem(todo.id)}
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
                    onClick={() => this.onButtonCleanDone()}
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
                <Todo.Old showStatus={this.state.showOld} oldTodos={this.state.oldTodos} />
            </div>
        );
    }
}

Todo.Item = ({  value, children, checked, onChange, onDelete }) => {
    const styleLi = checked ? "Todo__item Todo__item_done" : "Todo__item";
    return (
        <div>
            <input
                type="checkbox"
                name="todoItem"
                checked={checked}
                onChange={() => onChange()}
            />
            <li className={styleLi} key={value}>
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
    return (
        <div>
            <ul>
                {oldTodos.map(todo =>
                <li key={todo.id}>
                    {todo.text}
                </li>
                ) }
            </ul>
        </div>
        );
    }
};

export default Todo;

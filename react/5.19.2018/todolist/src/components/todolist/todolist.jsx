import React, {Component} from 'react';
import ToDoItem from '../todoitem/doitem';
import './todolist.css';

export default class ToDoList extends Component {
    state = {
        items: []
    };

    addItems = (event) => {
        event.preventDefault();

        if (this.taskInput.value !== '') {
            let task = {
                text: this.taskInput.value,
                id: Date.now(),
            };
            this.setState({
                items: [...this.state.items, task]
            });

            this.setState()
        }
        this.taskInput.value = '';
    };

    deleteItems = (event) => {
        let liId = +event.target.dataset.id;
        const filteredArr = this.state.items.filter(el=>el.id !== liId);
        this.setState({
            items: filteredArr,
        })
    };

    // deleteItems = (id) => {
    //     const filteredArr = this.state.items.filter(el=>el.id !== id);
    //     this.setState({
    //         items: filteredArr,
    //     })
    // };


    render() {
let button = (this.state.items.length <= 5) ?
    <button type="submit">add</button> :
    <button>STOP</button>;
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItems}>
                        <input placeholder="enter task" ref={(inputTag) => this.taskInput = inputTag}>
                        </input>
                        {button}
                    </form>
                    <ToDoItem items={this.state.items} deleteItems={this.deleteItems}/>
                </div>
            </div>
        )
    }
}
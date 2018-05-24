import React from 'react';
import Button from '../ui/button';

const BookItem = (props) => (
    <div className="book">
        <div className="book__name">
            {props.name}
        </div>
        <div className="book__author">
            {props.author}
        </div>
        <img src={props.cover}
             alt="Book cover"
             className="book__image"/>
    </div>
);

export default class Books extends React.Component {
    state = {
        javascriptBooks: [{
            name: 'Изучаем JavaScript: руководство по созданию современных веб-сайтов',
            author: 'Этан Браун',
            cover: "/1.jpg"
        }, {
            name: 'JavaScript. Сильные стороны',
            author: 'Дуглас Крокфорд',
            cover: '/2.jpg'
        }, {
            name: 'Secrets of the JavaScript Ninja',
            author: 'Бер Бибо, Джон Резиг',
            cover: '/3.jpg'
        },],
        pythonBooks: [{
            name: ' Learning Python',
            author: 'Марк Лутц',
            cover: "/4.jpg"
        }, {
            name: 'Изучаем Python. Программирование игр, визуализация данных, веб-приложения',
            author: 'Эрик Мэтиз',
            cover: '/5.jpg'
        }],
        active: 'javascriptBooks',
        name: '',
        author: '',
        cover: '/6.jpg',
    };

    changeBook(active) {
        this.setState({
            active
        })
    }

    changeInput = (field, event) => {
        const value = event.target.value;
        this.setState({
            [field]: value
        })
    };

    addBook = () => {
        this.setState((prevState) => ({
            [this.state.active]: [...prevState[this.state.active], {
                name: prevState.name,
                author: prevState.author,
                cover: prevState.cover,
            }]
        }))
    };

    render() {
        const books = this.state[this.state.active];
        return (
            <div className="books__wrapper">
                <h2>My favorite book</h2>
                <button onClick={this.changeBook.bind(this, "javascriptBooks")}>JavaScript Book</button>
                <button onClick={this.changeBook.bind(this, "pythonBooks")}>Python Book</button>
                <div className="book__add">
                    <div>
                        name:
                        <input type="text"
                               className="book__name"
                               value={this.state.name}
                               onChange={this.changeInput.bind(this, "name")}
                        />
                    </div>
                    <div>
                        author:
                        <input type="text"
                               className="book__author"
                               value={this.state.author}
                               onChange={this.changeInput.bind(this, "author")}
                        />
                    </div>
                    <div>
                        cover:
                        <input type="text"
                               className="book__cover"
                               value={this.state.cover}
                               onChange={this.changeInput.bind(this, "cover")}
                        />
                    </div>
                    <Button onClick={this.addBook}
                            type="super">
                        Add Book!
                    </Button>
                </div>
                {books.map((book) => <BookItem key={book.name}{...book} />)}
            </div>
        )
    }
}
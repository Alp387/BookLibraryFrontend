import React, {ChangeEvent, FormEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Book} from "./Book";
import axios from "axios";

function App() {
    const initialState: Book = {
        ISBN: "ISBN",
        title: "Title",
        author: "Author",
        cover: "Cover"
    }
    const [book, setBook] = useState<Book>(initialState)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const targetName = event.target.name
        const value = event.target.value
        setBook({...book, [targetName]: value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post("api/book", book)
            .then(() => setBook(initialState))
            .catch(console.error)
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={onSubmit}>
                    <p> Please enter Book details:</p>
                    <input type="text" name="ISBN" onChange={onChange} value={book.ISBN}/>
                    <input type="text" name="Title" onChange={onChange} value={book.title}/>
                    <input type="text" name="Author" onChange={onChange} value={book.author}/>

                    {/*<label>Select cover of book:<select name="selectedCover">
                        <option value"Softcover">Softcover</option>
                        <option value"E-Book">E-Book</option>
                        <option value"Hardcover">Hardcover</option>
                        <option value"Audiobook">Audiobook</option>
                    </select></label>*/}
                    <button>Add book to library</button>
                </form>


                {/*<p>{book.ISBN}</p>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.cover}</p>*/}

            </header>


        </div>
    );
}

export default App;

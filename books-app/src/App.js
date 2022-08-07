import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
          <Route path='/' element={<ShowBookList></ShowBookList>} />
          <Route path='/create-book' element={<CreateBook></CreateBook>} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo></UpdateBookInfo>} />
          <Route path='/show-book/:id' element={<ShowBookDetails></ShowBookDetails>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

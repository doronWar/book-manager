import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import uuid from 'uuid'
import InfoPanel from './Components/InfoPanel'
import BookModal from './Components/BookModal'
import PageHeaderComponent from './Components/PageHeaderComponent'

import {
  Button
} from 'react-bootstrap'


class App extends Component {

  constructor() {
    super();
    this.state = {
      openModal: false,
    }
    this.closeModal = this.closeModal.bind(this);
    this.upperLowerCasechanger = this.upperLowerCasechanger.bind(this)


  }

  bookList() {

    const booksFromJson = this.props.bookArr;
    let counter = 0;
    return (
      <ul className="book-holder">
        {booksFromJson.map((book) => {


          return (  <li key={uuid()}
                        id={counter++}
                        onMouseOver={(e) => this.props.curentBookHovered(e.currentTarget.id)}

          ><p>{book.title}</p></li>)
        })}
      </ul>
    )
  }

  closeModal(event, canCloase) {

    if (event.target.className === 'modal' || event.target.id === 'cancel-btn') {
      this.setState({openModal: false})
    }

    if (canCloase) {
      this.setState({openModal: false})
    }
  }

  openModal() {
    this.setState({openModal: true})
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'booklist.json');
    xhr.send();
    xhr.addEventListener('load', (e) => {

      this.pipeFunc(JSON.parse(e.currentTarget.response).books);
    })
  }

  pipeFunc(books) {
    books = books.map((book) => {
      let title = book.title.split(' ');
      let author = book.author.split(' ');

      title = title.map((word) => {
        return this.upperLowerCasechanger(word);
      });

      author = author.map((word) => {
        return this.upperLowerCasechanger(word);
      });
      book.title = title.join(' ');
      book.author = author.join(' ');
      return book;
    });
    this.props.saveLoadedJason(books);
  }

  upperLowerCasechanger(word) {
    word = word.match(/[a-z, A-Z, .]/g);

    for (let i in word) {
      if (i === '0') {
        word[i] = word[i].toUpperCase();
      }
      else {
        word[i] = word[i].toLowerCase();
      }
    }
    return word.join('')

  }

  closeInfoComponent(event) {
    if (event.target.className === 'main-book-holder' || event.target.className === 'page-header' || event.target.className === 'header' || event.target.className === 'App') {
      this.props.clearBookHovered();
    }
  }


  render() {
    return (
      <div className="App"
           onClick={(e) => this.closeInfoComponent(e)}>
        <PageHeaderComponent/>
        <div className="main-book-holder"
        >
          {this.bookList()}
        </div>
        {this.props.curentBook !== -1 && <InfoPanel

        />}
        <Button
          onClick={() => {
            this.props.clearBookHovered();
            this.openModal();
          }}
        >Add a Book</Button>
        {this.state.openModal && <BookModal
          closeModal={this.closeModal}

          title="Add New Book"/>}

      </div>
    );
  }
}

function mapStateToProps(data) {
  return ({
    bookArr: data.BookArr,
    curentBook: data.CurentBook
  })
}

function mapdispatchToProps(dispatch) {
  return ({
    saveLoadedJason(bookList){
      dispatch({
        type: 'LOAD_LIST_FROM_JSON',
        Jsonlist: bookList
      })
    },
    curentBookHovered(bookId){
      dispatch({
        type: 'BOOK_HOEVERED',
        book: bookId
      })
    },
    clearBookHovered(){
      dispatch({
        type: 'BOOK_UNHOEVERED',
      })
    },
  })
}


export default connect(mapStateToProps, mapdispatchToProps)(App);

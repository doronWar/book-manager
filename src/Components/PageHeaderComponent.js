import React from 'react'
import { connect } from 'react-redux'


import {
 PageHeader
} from 'react-bootstrap'
class PageHeaderComponent extends React.Component{

  constructor(){
    super();
    this.state={
      searchTerm: "",
    }

  }


  searchForBook(){
      const book = this.props.bookArr.findIndex((book)=> book.title === this.state.searchTerm)
      if(book!== -1){
        this.props.curentBookHovered(book)
      }
      if(book===-1){
        window.alert("Sorry, this book isn't registered")
      }
  }

  searchForBookByKey(event){

      if(event.keyCode===13){
        this.searchInputValue.blur();
      }
  }


  render(){
    return(

      <PageHeader><div className="header"> Book Data Manager App</div>
      <input className="Search-control" placeholder="SEARCH FOR BOOK..."
      value={this.state.value}
             onChange={(e)=>this.setState({searchTerm:e.currentTarget.value})}
             onBlur={(e)=> this.searchForBook(e)}
             onKeyDown={(e)=> this.searchForBookByKey(e)}
             ref={(search)=> this.searchInputValue = search }
      />

      </PageHeader>
    )
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


export default connect(mapStateToProps, mapdispatchToProps)(PageHeaderComponent);






import React from 'react'
import { connect } from 'react-redux'


import {
 PageHeader
} from 'react-bootstrap'
class PageHeaderComponent extends React.Component{


  render(){
    return(

      <PageHeader>Book Data Manager App
      <input placeholder="SEARCH FOR BOOK..."/>

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






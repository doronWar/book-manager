import React from 'react'
import { connect } from 'react-redux'

import BookModal from './BookModal'
import {
  Button,
  Grid,
  Row,
  Col,
  Thumbnail
} from 'react-bootstrap'

class InfoPanel extends React.Component{

  constructor(){
    super();
    this.state={
      openEditModal: false,
      book:{},
    }
    this.closeEditModal= this.closeEditModal.bind(this);
  }

  closeEditModal(event, canCloase){

    if(event.target.className==='modal' || event.target.id==='cancel-btn' ){
      this.setState({openEditModal: false})
    }
    if(canCloase){
      this.setState({openEditModal: false})
    }

  }
  
  deleteBook(){
    if(window.confirm("are you sure you want to delete this book?")){
      this.props.deleteBookFromData(this.props.bookArr[this.props.curentBook].id)
      this.props.clearBookHovered();
    }


  }
  // componentWillMount(){
  //   const book = this.props.bookArr.find((book)=> book.id === this.props.curentBook);
  //   this.
  // }

  render(){
    return(

      <div className="book-info">
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="/Painting27.jpg" alt="book cover">
                <h3>Book Title:  {this.props.bookArr[this.props.curentBook].title}</h3>
                <p>By:  {this.props.bookArr[this.props.curentBook].author}</p>
                <p>Publish Date:  {this.props.bookArr[this.props.curentBook].date}</p>

                <div className="info-btn-holder">
                  <Button bsStyle="primary"
                  onClick={()=>{

                    this.setState({openEditModal:true})
                  }}
                  >Edit</Button>&nbsp;
                  <Button 
                    onClick={()=>this.deleteBook()}
                    bsStyle="default">Delete</Button>
                </div>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
        {this.state.openEditModal && <BookModal
          closeModal={this.closeEditModal}
        bookInfo={this.props.bookArr[this.props.curentBook]}/>}
      </div>

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
    deleteBookFromData(bookID){
      dispatch({
        type: 'DELETE_BOOK_FROM_DATA',
        book:bookID
      })
    },
    clearBookHovered(){
      dispatch({
        type: 'BOOK_UNHOEVERED',
      })
    },
  })
}


export default connect(mapStateToProps, mapdispatchToProps)(InfoPanel);
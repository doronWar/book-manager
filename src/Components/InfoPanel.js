import React from 'react'
import { connect } from 'react-redux'

import {
  Button,
  Grid,
  Row,
  Col,
  Thumbnail
} from 'react-bootstrap'
class InfoPanel extends React.Component{


  render(){
    return(
      <div className="book-info">
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                <h3>{this.props.bookArr[this.props.curentBook].name}</h3>
                <p>{this.props.bookArr[this.props.curentBook].date}</p>
                <p>
                  <Button bsStyle="primary">Edit</Button>&nbsp;
                  <Button bsStyle="default">Delete</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
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


export default connect(mapStateToProps, mapdispatchToProps)(InfoPanel);
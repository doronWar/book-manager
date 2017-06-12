import React from 'react'
import { connect } from 'react-redux'



import {
  Panel,
  Button,
  Grid,
  Row,
  Col,
  Thumbnail,
  Modal
} from 'react-bootstrap'
class BookModal extends React.Component{

  constructor(){
    super();
    this.state={
      bookName:"",
      Date:""
    }
  }

  render(){
    return(


    <div className="static-modal" onClick={(e)=>this.props.closeModal(e)}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add New Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                  <label>Book Name
                    <input type="text" value={this.state.name}
                           placeholder="Enter books name"
                           onChange={(e)=>this.setState({bookName:e.currentTarget.value})}
                    />
                  </label>
                  <label>Book Release Date
                    <input type="date"
                           ref={(bookDate)=>this.bookDate = bookDate}
                    />
                  </label>
                </Thumbnail>
              </Col>
            </Row>
          </Grid>
        </Modal.Body>

        <Modal.Footer>
          <Button id="cancel-btn"
            onClick={(e)=>this.props.closeModal(e)}
          >Close</Button>
          <Button
            onClick={()=>console.info(this.bookDate.value)}
            bsStyle="primary">Save changes</Button>
        </Modal.Footer>

      </Modal.Dialog>
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


export default connect(mapStateToProps, mapdispatchToProps)(BookModal);
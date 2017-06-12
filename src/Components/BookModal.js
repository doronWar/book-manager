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
      date:"2013-12-31"
    }
  }

  
  
  componentDidMount(){
    if(this.props.bookInfo){
      console.info(this.props.bookInfo);
      this.setState({bookName: this.props.bookInfo.title});
      // this.bookDate.value = this.props.bookInfo.date;
      console.info(this.bookDate.value);
    }
  }

  componentDidUpdate(){
    console.info(this.state.date);
  }
  render(){
    const title = this.props.title? this.props.title: "Edit Info";
    
    return(


    <div className="static-modal" onClick={(e)=>this.props.closeModal(e)}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                  <label>Book Name
                    <input type="text" value={this.state.bookName}
                           placeholder="Enter books name"
                           onChange={(e)=>this.setState({bookName:e.currentTarget.value})}
                    />
                  </label>
                  <label>Book Release Date
                    <input type="date"
                           value={this.state.date}
                           onChange={(e)=>this.setState({date: e.currentTarget.value})}
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
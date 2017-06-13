import React from 'react'
import {connect} from 'react-redux'


import {
  Panel,
  Button,
  Grid,
  Row,
  Col,
  Thumbnail,
  Modal,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from 'react-bootstrap'
class BookModal extends React.Component {

  constructor() {
    super();
    this.state = {
      bookName: "",
      author: "",
      date: "",
      nameValidation: null,
      authorValidation: null,
      dateValidation: null
    }
  }


  saveChanges(event) {

    // const test = [...this.props.bookArr]
    // const oneBook = test.find((book)=>  book.id === "10005")
    // test[1]= Object.assign({}, oneBook)
    // console.info(test[1]);
    //
    if(this.state.bookName=== ""){

      this.setState({nameValidation: "error"})
    }
    if(this.state.author=== ""){

      this.setState({authorValidation: "error"})
    }
    if(this.state.date.length<1){
      this.setState({dateValidation: "error"})
    }
    else {

      const bookTitleExists =  this.props.bookArr.findIndex((book)=> book.title === this.state.bookName)
      if(bookTitleExists!== -1){
        window.alert("This book is already registered in the system")
      }
      else{
        
        const newBook = {
          title: this.state.bookName,
          author: this.state.author,
          date: this.state.date,
          img: " none",
          // id: parseInt(this.props.bookArr[this.props.bookArr.length - 1].id) + 1
        };

        if (this.props.bookInfo) {
          newBook.id= this.props.bookInfo.id

          // console.info(newBook, this.props.bookArr[1]);
          this.props.saveChanges(newBook);

          this.props.closeModal(event , true);
          //load save function
        }
        else {
          newBook.id= parseInt(this.props.bookArr[this.props.bookArr.length - 1].id) + 1
          this.props.addNewBook(newBook);
          this.props.closeModal(event , true);


        }
      

      }

    }




  }

  componentDidMount() {
    if (this.props.bookInfo) {

      this.setState({
        bookName: this.props.bookInfo.title,
        date: this.props.bookInfo.date,
        author: this.props.bookInfo.author
      });
      // this.bookDate.value = this.props.bookInfo.date;
      //console.info(this.bookDate.value);
    }
  }

  componentDidUpdate(){

    if(this.state.bookName.length===1 && this.state.nameValidation === "error"){
      this.setState({nameValidation: null});
    }
    if(this.state.author.length===1 && this.state.authorValidation === "error"){
      this.setState({authorValidation: null});
    }
    if(this.state.date.length===10 && this.state.dateValidation === "error"){
      this.setState({dateValidation: null});
    }


  }

  render() {
    const title = this.props.title ? this.props.title : "Edit Info";
    return (


      <div className="static-modal" onClick={(e) => this.props.closeModal(e)}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>


            <form>
              <FormGroup controlId="formValidationError1" validationState={this.state.nameValidation}>
                <ControlLabel>Book Title</ControlLabel>
                <FormControl type="text" value={this.state.bookName}
                             placeholder="Enter books name"
                             onChange={(e) => this.setState({bookName: e.currentTarget.value})}/>
                {this.state.nameValidation === "error" &&
                <HelpBlock>Please enter a books name.</HelpBlock>}

              </FormGroup>
              <FormGroup controlId="formValidationNull" validationState={this.state.authorValidation}>
                <ControlLabel>Author</ControlLabel>
                <FormControl type="text" value={this.state.author}
                             placeholder="Enter author name"
                             onChange={(e) => this.setState({author: e.currentTarget.value})}/>
                {this.state.authorValidation === "error" &&
                <HelpBlock>Please enter the authors name.</HelpBlock>}
              </FormGroup>
              <FormGroup controlId="formValidationSuccess1" validationState={this.state.dateValidation}>
                <ControlLabel>Date of publication</ControlLabel>
                <FormControl type="date"
                             value={this.state.date}
                             onChange={(e) => this.setState({date: e.currentTarget.value})}
                //             ref={(bookDate) => this.bookDate = bookDate}
                />
                {this.state.dateValidation === "error" &&
                <HelpBlock>Please enter a books name.</HelpBlock>}
              </FormGroup>
            </form>


          </Modal.Body>

          <Modal.Footer>
            <Button id="cancel-btn"
                    onClick={(e) => this.props.closeModal(e)}
            >Cancel</Button>
            <Button id="save-btn"
                    onClick={(e) => this.saveChanges(e)}
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
    addNewBook(book){
      dispatch({
        type: 'ADD_BOOK',
        book: book,
      })
    },
    saveChanges(book){
      dispatch({
        type: 'SAVE_CHANGES',
        book: book,
      })
    },
  })
}


export default connect(mapStateToProps, mapdispatchToProps)(BookModal);
//modal:

//
//
// <div className="modal-background"
//      onClick={(e)=>this.props.closeModal(e)}>
//   <Panel header="Add new book">
//     <Grid>
//       <Row>
//         <Col xs={6} md={4}>
//           <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
//             <label>Book Name
//               <input type="text" value={this.state.name}
//                      placeholder="Enter books name"
//                      onChange={(e)=>this.setState({bookName:e.currentTarget.value})}
//               />
//             </label>
//             <label>Book Release date
//               <input type="date"
//                      ref={(bookDate)=>this.bookDate = bookDate}
//               />
//             </label>
//             <div>
//               <Button onClick={()=>console.info(this.bookDate.value)}
//                       bsStyle="primary">Save</Button>&nbsp;
//               <Button id="cancel-btn"
//                       onClick={(e)=>this.props.closeModal(e)}
//                       bsStyle="default">Cancel</Button>
//             </div>
//           </Thumbnail>
//         </Col>
//       </Row>
//     </Grid>
//   </Panel>
//
// </div>




//book modal before bootstrap:
{/*<Grid>*/}
  {/*<Row>*/}
    {/*<Col xs={6} md={4}>*/}
      {/*<Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">*/}
        {/*<label>Book Name*/}
          {/*<input type="text" value={this.state.bookName}*/}
                 {/*placeholder="Enter books name"*/}
                 {/*onChange={(e) => this.setState({bookName: e.currentTarget.value})}*/}
          {/*/>*/}

        {/*</label>*/}
        {/*<label>Author*/}
          {/*<input type="text" value={this.state.author}*/}
                 {/*placeholder="Enter author name"*/}
                 {/*onChange={(e) => this.setState({author: e.currentTarget.value})}*/}
          {/*/>*/}

        {/*</label>*/}
        {/*<label>Book Published Date*/}
          {/*<input type="date"*/}
                 {/*value={this.state.date}*/}
                 {/*onChange={(e) => this.setState({date: e.currentTarget.value})}*/}
                 {/*ref={(bookDate) => this.bookDate = bookDate}*/}
          {/*/>*/}
        {/*</label>*/}
      {/*</Thumbnail>*/}
    {/*</Col>*/}
  {/*</Row>*/}
{/*</Grid>*/}



// when added uppercase:
// let title = this.state.bookName.split(' ');
// title = title.map((word)=> this.props.upperLowerCasechanger(word));
//
// let author = this.state.author.split(' ');
// author = author.map((word)=> this.props.upperLowerCasechanger(word));

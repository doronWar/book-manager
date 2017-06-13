
export default function BookArrReducer(curent=[], action) {

  switch (action.type){
    case 'LOAD_LIST_FROM_JSON':
      return action.Jsonlist;

    case 'DELETE_BOOK_FROM_DATA':
      const tempBookArr = [...curent];
      const index = tempBookArr.findIndex((book)=> book.id === action.book);
      tempBookArr.splice(index,1);
      return tempBookArr;

    case 'ADD_BOOK':
      const bookArr = [...curent];
      bookArr.push(action.book);
      return bookArr;

    case 'SAVE_CHANGES':
      const tBookArr = [...curent];
      const i = tBookArr.findIndex((book)=> {return book.id === action.book.id});
      tBookArr[i]= Object.assign({}, action.book)
      return tBookArr;

    default:
      return curent;
  }

}
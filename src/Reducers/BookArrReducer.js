
export default function BookArrReducer(curent=[], action) {

  switch (action.type){
    case 'LOAD_LIST_FROM_JSON':
      return action.Jsonlist;
    case 'DELETE_BOOK_FROM_DATA':
      const tempBookArr = [...curent];
      const index = tempBookArr.findIndex((book)=> book.id === action.book);
      tempBookArr.splice(index,1);
      return tempBookArr;
    default:
      return curent;
  }

}
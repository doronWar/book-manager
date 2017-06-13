
export default function CurentBookReducer(curent=-1, action) {

  switch (action.type){
    case 'BOOK_HOEVERED':
      console.info(action.book);
      return action.book;
    case 'BOOK_UNHOEVERED':
      return -1;
    default:
      return curent;
  }

}
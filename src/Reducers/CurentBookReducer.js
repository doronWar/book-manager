
export default function CurentBookReducer(curent=0, action) {

  switch (action.type){
    case 'BOOK_HOEVERED':
      return action.book;
    case 'BOOK_UNHOEVERED':
      return 0;
    default:
      return curent;
  }

}
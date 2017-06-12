
export default function BookArrReducer(curent=[], action) {

  switch (action.type){
    case 'LOAD_LIST_FROM_JSON':
      return action.Jsonlist;
    default:
      return curent;
  }

}
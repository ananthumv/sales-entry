// reducers.js
const initialState = {
    headerData: {
      vrNo: '',
      vrDate: '',
      acName: '',
      acAmt: '',
      status: 'Active',
    },
    detailRows: [
      { srNo: 1, itemName: 'Item Name', qty: 1, rate: 2, amount: 2 },
    ],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_DETAIL_ROW':
        return {
          ...state,
          detailRows: [...state.detailRows, { srNo: state.detailRows.length + 1 }],
        };
      case 'REMOVE_DETAIL_ROW':
        return {
          ...state,
          detailRows: state.detailRows.filter((row, index) => index !== action.payload),
        };
      case 'UPDATE_DETAIL_DATA':
        return {
          ...state,
          detailRows: state.detailRows.map((row, index) =>
            index === action.payload.index
              ? { ...row, [action.payload.field]: action.payload.value }
              : row
          ),
        };
      case 'UPDATE_HEADER_DATA':
        return {
          ...state,
          headerData: { ...state.headerData, [action.payload.field]: action.payload.value },
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  
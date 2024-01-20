import React from 'react';
import { useDispatch } from 'react-redux';
import { removeNewRow, updateDetailData } from './actions';


function NewRow({ index, srNo, itemName, qty, rate, amount }) {

  const dispatch = useDispatch();



  const RemoveRow = () => {
    dispatch(removeNewRow(index));
  };

  

  const InputChange = (field, value) => {
    dispatch(updateDetailData(index, field, value));
  };

  return (
    <tr>
      <td>{srNo}</td>
      <td>
        <input
          type="text"
          value={itemName}
          onChange={(e) => InputChange('itemName', e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={qty}
          onChange={(e) => InputChange('qty', e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={rate}
          onChange={(e) => InputChange('rate', e.target.value)}
        />
      </td>
      <td>{amount}</td>
      <td>
        <button onClick={RemoveRow}>Remove</button>
      </td>
    </tr>
  );
}

export default NewRow;

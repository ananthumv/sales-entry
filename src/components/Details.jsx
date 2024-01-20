import React, { useState } from 'react';
import SaveButton from './SaveButton';


function Details() {



  const [rows, setRows] = useState([
    { srNo: 1, itemName: 'Item Name', qty: 0, rate: 0, amount: 0 }
  ]);

  const [addRow, setAddRow] = useState(false);
  const [totalAmnt, setTotalAmnt] = useState(0);




  const AddRow = () => {
    setAddRow(true);
    const newRow = {
      srNo: rows.length + 1,
      itemName: '',
      qty: 0,
      rate: 0,
      amount: 0,
    };
    setRows([...rows, newRow]);
  };




  const insertAddedRow = () => {
    setAddRow(false);
  };




  const RemoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };



  const InputChange = (index, field, value) => {
    const updatedRows = [...rows];
    const updatedRow = { ...updatedRows[index], [field]: value };
    
    updatedRow.amount = updatedRow.qty * updatedRow.rate;

    updatedRows[index] = updatedRow;
    setRows(updatedRows);
  };




  const calculateTotalAmount = () => {
    const totalAmount = rows.reduce((total, row) => total + row.amount, 0);
    setTotalAmnt(totalAmount);
  };




  React.useEffect(() => {
    calculateTotalAmount();
  }, [rows]);

  return (
    <>
      <div id="main">
        <table>
          <thead>
            <tr>
              <th className="mainTh" colSpan="5">
                <h3>Detail</h3>
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
                rows.length === 1?
                rows.map((row, index) => (
                 <tr key={index}>
                 <td>{row.srNo}</td>
                 <td>
                   <input
                     type="text"
                     value={row.itemName}
                     onChange={(e) => InputChange(index, 'itemName', e.target.value)}
                   />
                 </td>
                 <td>
                   <input
                     type="number"
                     value={row.qty}
                     onChange={(e) => InputChange(index, 'qty', e.target.value)}
                   />
                 </td>
                 <td>
                   <input
                     type="number"
                     value={row.rate}
                     onChange={(e) => InputChange(index, 'rate', e.target.value)}
                   />
                 </td>
                 <td>{row.amount}</td>
                 <td>
                   <button onClick={() => RemoveRow(index)}>Remove</button>
                 </td>
             </tr>
                ))
               :
            
            
            rows.map((row, index) => (
              <tr key={index}>
                <td>{row.srNo}</td>
                <td>
                  {addRow && index === rows.length - 1 ? (
                    <input
                      type="text"
                      value={row.itemName}
                      onChange={(e) => InputChange(index, 'itemName', e.target.value)}
                    />
                  ) : (
                    row.itemName
                  )}
                </td>
                <td>
                  {addRow && index === rows.length - 1 ? (
                    <input
                      type="number"
                      value={row.qty}
                      onChange={(e) => InputChange(index, 'qty', e.target.value)}
                    />
                  ) : (
                    row.qty
                  )}
                </td>
                <td>
                  {addRow && index === rows.length - 1 ? (
                    <input
                      type="number"
                      value={row.rate}
                      onChange={(e) => InputChange(index, 'rate', e.target.value)}
                    />
                  ) : (
                    row.rate
                  )}
                </td>
                <td>{row.qty * row.rate}</td>
                <td>
                  <button onClick={() => RemoveRow(index)}>Remove</button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4">Total</td>
              <td>{totalAmnt}</td>
            </tr>
          </tbody>
        </table>
        <div id="functions">
          <button onClick={AddRow}>New</button>
          <button onClick={insertAddedRow}>Insert</button>
          <SaveButton />
        </div>
      </div>
    </>
  );
}

export default Details;

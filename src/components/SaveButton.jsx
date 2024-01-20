// SaveButton.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function SaveButton() {
  const dispatch = useDispatch();
  const headerData = useSelector((state) => state.headerData);
  const detailRows = useSelector((state) => state.detailRows);

  const handleSave = async () => {
    try {
      const apiUrl = 'http://5.189.180.8:8010/header/multiple';

      const postData = {
        header_table: {
          vr_no: headerData.vrNo,
          vr_date: headerData.vrDate,
          ac_name: headerData.acName,
          ac_amt: headerData.acAmt,
          status: headerData.status,
        },


        detail_table: detailRows.map((row) => ({
          vr_no: headerData.vrNo,
          sr_no: row.srNo,
          item_code: row.itemCode,
          item_name: row.itemName,
          description: row.description,
          qty: row.qty,
          rate: row.rate,
        })),
      };


      const response = await axios.post(apiUrl, postData);

      console.log('Data saved successfully:', response.data);

    } catch (error) {

      console.error('Error saving data:', error);
      
    }
  };

  return (
    <button onClick={handleSave}>Save</button>
  );
}

export default SaveButton;

import React, { useState } from 'react';


function Header() {
  const [headerData, setHeaderData] = useState({
    vrNo: '',
    vrDate: '',
    status: 'Active',
    acName: '',
    acAmt: '',
  });


  const addHeaderData = (field, value) => {
    setHeaderData({
      ...headerData,
      [field]: value,
    });
  };


  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="mainTh" colSpan="5">
              <h3>Header</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">
              <form>
                <div className="formInput">
                  <label htmlFor="vrNo">Vr No</label>
                  <input
                    className="no"
                    type="number"
                    name="vrNo"
                    value={headerData.vrNo}
                    onChange={(e) => addHeaderData('vrNo', e.target.value)}
                  />
                  <label htmlFor="vrDate">Vr Date</label>
                  <input
                    className="no"
                    type="date"
                    name="vrDate"
                    value={headerData.vrDate}
                    onChange={(e) => addHeaderData('vrDate', e.target.value)}
                  />
                  <label htmlFor="status">Status</label>
                  <select
                    className="no"
                    name="status"
                    id="status"
                    value={headerData.status}
                    onChange={(e) => addHeaderData('status', e.target.value)}
                  >
                    <option value="Active">A</option>
                    <option value="Inactive">I</option>
                  </select>
                </div>
                <div className="formInput">
                  <label htmlFor="acName">Ac Name</label>
                  <input
                    type="text"
                    name="acName"
                    value={headerData.acName}
                    onChange={(e) => addHeaderData('acName', e.target.value)}
                  />
                  <label htmlFor="acAmt">Ac Amt</label>
                  <input
                    className="no"
                    type="text"
                    name="acAmt"
                    value={headerData.acAmt}
                    onChange={(e) => addHeaderData('acAmt', e.target.value)}
                  />
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Header;

export const addDetailRow = () => ({
  type: 'ADD_DETAIL_ROW',
});

export const removeDetailRow = (index) => ({
  type: 'REMOVE_DETAIL_ROW',
  payload: index,
});

export const updateDetailData = (index, field, value) => ({
  type: 'UPDATE_DETAIL_DATA',
  payload: { index, field, value },
});

export const updateHeaderData = (field, value) => ({
  type: 'UPDATE_HEADER_DATA',
  payload: { field, value },
});
  
export const updateData = payload => ({
  type: 'UPDATE_DATA',
  payload,
});

export const resetData = () => ({
  type: 'RESET_DATA',
  payload: {},
});

export const deleteLastRowData = () => ({
  type: 'DELETE_LAST_ROW_DATA',
});

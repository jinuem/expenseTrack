
const ADD = 'ADD_EXPENSE';
const ADD_REQUESTED = 'ADD_EXPENSE_REQUESTED';



  export const addExpense = (data) => {
    return dispatch => {
      dispatch({
        type: ADD,
        payload: data
      })
    }
  }

const ADD = 'ADD_EXPENSE';
const UPDATE = 'EXPENSE_UPDATE';


  export const addExpense = (data) => {
    return dispatch => {
      dispatch({
        type: ADD,
        payload: data
      })
    }
  }


  export const updateExpense = (data) => {
    return dispatch => {
      dispatch({
        type: UPDATE,
        payload: data
      })
    }
  }

  

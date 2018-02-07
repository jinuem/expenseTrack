
const ADD = 'ADD_EXPENSE';



  export const addExpense = (data) => {
    return dispatch => {
      dispatch({
        type: ADD,
        payload: data
      })
    }
  }

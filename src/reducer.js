export default function expenseReducer(state, action) {
    switch(action.type){
        case 'ADD_EXPENSE':
        let newState = state;
        newState.expenses.push(action.payload);
        return state

        default:
        return state;
    }

  }

//export expenseReducer;
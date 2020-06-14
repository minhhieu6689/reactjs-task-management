import {
    GET_ALL_EMPLOYEES
} from '../actions/type';

const initState = {
    employees: [],
    employee: null,
}

const EmployeeReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_EMPLOYEES:
            return {
                ...state,
                employees: action.payload

            };
        // case GET_EMPLOYEE:
        //     return {
        //         ...state,
        //         employee: action.payload
        //     };
        // case CREATE_EMPLOYEE:
        //     let items = state.employees.slice();
        //     items.unshift(action.payload)
        //     return {
        //         ...state,
        //         employees: items
        //     }
        // case UPDATE_EMPLOYEE:
        //     let itemsUpdate = state.employees.slice();
        //     let objIndex = itemsUpdate.findIndex((item => item.id === action.payload.id));
        //     itemsUpdate[objIndex] = action.payload;
        //     return {
        //         ...state,
        //         employees: itemsUpdate
        //     }
        // case DELETE_EMPLOYEE:
        //     let itemsDelete = state.employees.slice();
        //     itemsDelete = itemsDelete.filter(item => item.id !== action.payload);
        //     return {
        //         ...state,
        //         employees: itemsDelete
        //     }
        default:
            return state;
    }

}

export default EmployeeReducer

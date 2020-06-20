import {
    GET_ALL_EMPLOYEES, OPEN_UPDATE_EMPLOYEE_FORM, OPEN_ADD_EMPLOYEE_FORM, CREATE_EMPLOYEE, GET_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE
} from './type'
import axios from 'axios';

export const getAllEmployee = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            dispatch({
                type: GET_ALL_EMPLOYEES,
                payload: response.data
            });
        })
        .catch(error => {
            console.log(error)
        });
}


export const addEmployee = (data) => dispatch => {
    dispatch({
        type: CREATE_EMPLOYEE,
        payload: data
    });
}

export const updateEmployee = (data) => dispatch => {
    dispatch({
        type: UPDATE_EMPLOYEE,
        payload: data
    });
}

export const deleteEmployee = (id) => dispatch => {
    dispatch({
        type: DELETE_EMPLOYEE,
        payload: id
    });
}


export const openAddEmployeeForm = (data) => dispatch => {
    
    dispatch({
        type: OPEN_ADD_EMPLOYEE_FORM,
        payload: data
    });
}
export const openUpdateEmployeeForm = (data) => dispatch => {
    console.log(data)
    dispatch({
        type: OPEN_UPDATE_EMPLOYEE_FORM,
        payload: data
    });
}

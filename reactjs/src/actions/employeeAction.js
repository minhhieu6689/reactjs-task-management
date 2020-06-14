import {
    GET_ALL_EMPLOYEES
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

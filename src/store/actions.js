import Constant from '../Constant';
import axios from 'axios';

export default {
    [Constant.FETCH_TODO]: (store) => {
        axios.get("http://localhost:8070/api/todo", {})
            .then((response) => {
                store.commit(Constant.FETCH_TODO, { todolist: response.data.result_list });
            })
    },
    [Constant.ADD_TODO]: (store, payload) => {
        console.log("###addTodo!!!", payload);
        axios.get("http://localhost:8070/api/addtodo", {
                params: { userId: "sm3487", id: new Date().getTime(), todo: payload.todo }
            })
            .then((response) => {
                store.commit(Constant.ADD_TODO, response.data.result);
            })
    },
    [Constant.DELETE_TODO]: (store, payload) => {
        console.log("###deleteTodo!!!", payload);
        axios.get("http://localhost:8070/api/deltodo", {
                params: { id: payload.id, todo: payload.todo }
            })
            .then((response) => {
                store.commit(Constant.DELETE_TODO, response);
            })
    },
    [Constant.DONE_TOGGLE]: (store, payload) => {
        console.log("###doneToggle!!!", payload);
        axios.get("http://localhost:8070/api/toggletodo", {
                params: payload
            })
            .then((response) => {
                store.commit(Constant.DONE_TOGGLE, response.data.result);
            })
    }
}
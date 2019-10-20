import Constant from '../Constant';

export default {
    [Constant.FETCH_TODO]: (state, payload) => {
        state.todolist = payload.todolist;
    },
    [Constant.ADD_TODO]: (state, payload) => {
        if (payload.todo !== "") {
            console.log(payload);
            state.todolist.push({ id: payload.id, todo: payload.todo, done: payload.done });
        }
    },
    [Constant.DONE_TOGGLE]: (state, payload) => {
        var index = state.todolist.findIndex((item) => item.id === payload.id);
        state.todolist[index].done = payload.done;
    },
    [Constant.DELETE_TODO]: (state, payload) => {
        var index = state.todolist.findIndex((item) => item.id === payload.id);
        state.todolist.splice(index, 1);
    }
}
<style>
    * {  box-sizing: border-box;  }
    .header {
        background-color: gray; padding: 30px 30px;
        color: white; text-align: center;
    }
    .header:after {
        content: ""; display: table; clear: both;
    }
</style>
<template>
    <div id="todolistapp">
        <div id="header" class="header">
            <h2>Todo List App</h2>
            <input-todo />
        </div>
        <list></list>
        <tui-grid></tui-grid>
    </div>  
</template>
<script type="text/javascript">
import InputTodo from './InputTodo';
import List from './List';
export default {
    name : 'todo-list',
    components : { InputTodo, List},
}
</script>
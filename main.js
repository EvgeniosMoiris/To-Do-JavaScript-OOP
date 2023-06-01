class myTodo {
    constructor(title, done) {
        this.title = title;
        this.done = done;
    }
}

class myTodoList {
    constructor() {
        this.list = [];
    }

    addTodo(todo) {
        this.list.push(todo);
    }
}

const item1 = new myTodo("Keep on with JS", false);
const list1 = new myTodoList();
list1.addTodo(item1);

console.log(item1);
console.log(list1);

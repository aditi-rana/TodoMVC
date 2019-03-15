function todoItem(caption, isCompleted) {

    this.caption = caption;
    this.isCompleted = isCompleted;


    this.toggle = function () {
        this.isCompleted = !this.isCompleted;

    }
}

function todoCollection() {

    this.todo = [];

    this.add = function (caption, isCompleted) {
        this.todo.push(new todoItem(caption, isCompleted));
    }

    this.remove = function (i) {
        this.todo.splice(i, 1);
    }
}
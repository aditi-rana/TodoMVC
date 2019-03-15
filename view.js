var t = new todoCollection();

function render() {

    var ul = document.getElementById("list");

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    for (var i = 0; i < t.todo.length; i++) {

        var node = document.createElement("li");
        var check_node = document.createElement("input");
        check_node.type = "checkbox";

        var text_node = document.createElement("input");
        text_node.type = "text";
        text_node.value = t.todo[i].caption;
        if (t.todo[i].isCompleted == true) {
            text_node.style.textDecoration = "line-through";
            check_node.checked = true
        } else {
            text_node.style.textDecoration = "none";
        }
        node.appendChild(check_node);
        node.appendChild(text_node);


        var delete_node = document.createElement("input");
        delete_node.type = "button";
        delete_node.value = "Delete";
        delete_node.onclick = function (i) {
            t.remove(i);
            render();
        }.bind(null, i)
        node.appendChild(delete_node);

        check_node.onclick = function (i) {
            t.todo[i].toggle();
            render();
        }.bind(null, i)

        ul.appendChild(node);

    }
}
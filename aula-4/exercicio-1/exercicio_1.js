class TodoList{
    constructor() {
        this.id_sequence = 1
        this.todo_list = document.createElement("ul")
        this.todo_list.classList.add("list-group", "bg-light")
    }

    addTodo(string) {
        if (string.length > 0) {
            this.todo_list.innerHTML +=
                `<li id="${this.id_sequence}" class="list-group-item d-flex justify-content-between">${string} 
              <div> 
               <img class="move-up btn btn-primary" src="../../icons/arrow-up-short.svg"> 
               <img class="move-down btn btn-primary" src="../../icons/arrow-down-short.svg"> 
               <img class="remove btn btn-danger" src="../../icons/x-circle.svg">
              </div>
            </li>`
            this.id_sequence++
        }
    }

    removeTodo(todo) {
        todo.remove()
    }

    moveTodoUp(todo) {
        let previous_todo = todo.previousSibling

        if (previous_todo) {
            previous_todo.before(todo)
        }
    }

    moveTodoDown(todo) {
        let next_todo = todo.nextSibling

        if (next_todo) {
            next_todo.after(todo)
        }
    }

    orderBy(ascending = true) {
        let ordered_list = []
        let first = ascending ? -1 : 1
        let second = ascending ? 1 : -1

        this.todo_list.querySelectorAll("li").forEach((element) => {ordered_list.push(element)})
        ordered_list.sort((a, b) => {
            if (a.innerText.toLowerCase() < b.innerText.toLowerCase()) {
                return first
            }
            else if (a.innerText.toLowerCase() > b.innerText.toLowerCase()) {
                return second
            }
            else {
                return 0
            }
        })
        this.todo_list.innerHTML = ""
        ordered_list.forEach((element) => {this.todo_list.append(element)})
    }
}

let todoList = new TodoList()

document.getElementById("conteudo").append(todoList.todo_list)

document.getElementById("add_todo_button").addEventListener("click", () => {
    let input = document.getElementById("todo_input")
    todoList.addTodo(input.value)
    input.value = ""
})

let order_button = document.getElementById("ordenar")
order_button.addEventListener("click", (element) => todoList.orderBy(order_button.classList.toggle("asc")))

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("move-up")) {
        todoList.moveTodoUp(e.target.closest("li"))
    }

    if (e.target.classList.contains("move-down")) {
        todoList.moveTodoDown(e.target.closest("li"))
    }

    if (e.target.classList.contains("remove")) {
        todoList.removeTodo(e.target.closest("li"))
    }
})
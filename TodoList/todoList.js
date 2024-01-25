const app = Vue.createApp({
    data(){
        return {
            todoAddBtn : "addBtn",
            todoDelBtn: "delBtn",
            todoModBtn: "modBtn",
            btnContainer: "btn-container",
            todoContainer: "todo-container",
            catWork: "cat-work",
            catEnt: "cat-ent",
            catApt: "cat-apt",

            todo: null,
            category: ["Work", "Entertainment", "Appointment"],
            todoList: [],
            isCatSelected : false,
            selectedCat: ""
        }
    },

    methods: {
        addTodo(){
            if(this.todo != null && this.selectedCat !== null){
                this.todoList.push({text:this.todo, category: this.selectedCat, isDone: false})
            }

            this.todo=null  // empty the input
            this.selectedCat=''
        },

        selectCategory(e){
            this.selectedCat = e.target.value
        },
        
        modifyTodo(index){
            console.log("OK")
            const newTodo = prompt("Modify your note : ", this.todoList[index].text)
            if(newTodo !== null){
                this.todoList[index].text = newTodo
            }
        },

        deleteTodo(index){
            this.todoList.splice(index, 1)
        },

        getCategoryClass(category){
            switch(category){
                case "Work":
                    return this.catWork;
                case "Entertainment":
                    return this.catEnt;
                case "Appointment":
                    return this.catApt;
                default:
                    return "";
            }
        }
    }
})

app.mount('#app')
//Skapar en instans av Vue och lagrar referensen i app variabeln
const app = Vue.createApp({
  //Skapar vi en data modell...
  data() {
    return {
      todos: [],
      enteredTodo: '',
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.enteredTodo);
      console.log(this.enteredTodo);
    },
  },
});

//Knyter vi samman vue instansen med html dokumentet.
app.mount('#app');

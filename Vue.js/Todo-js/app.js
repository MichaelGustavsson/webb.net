const app = Vue.createApp({
  data() {
    return {
      todos: [],
      enteredTodo: '',
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.enteredTodo);
    },
  },
});

app.mount('#app');

// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// function addTodo(){
//   const value = input.value;
//   const listItem = document.createElement('li');
//   listItem.textContent = value;
//   list.appendChild(listItem);
//   input.value = '';
// }

// button.addEventListener('click', addTodo);

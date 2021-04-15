<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="message" />
    <!-- v-model två-vägs bindning -->
    <p>Hello {{ message }}</p>
    <!-- {{}} envägsbindning ifrån modellen till html -->
  </div>
</template>

<script>
export default {
  //Namnet på vår komponent
  name: 'HelloWorld',
  //data = vår data modell för komponenten
  data() {
    return {
      message: 'World!',
    };
  },
  //Egenskaper för föräldern att kommunicera med...
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

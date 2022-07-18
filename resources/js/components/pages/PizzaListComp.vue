<template>
  
  <div>
    <h1>Questa e' la lista pizza</h1>

    <PizzaItem 
      v-for="pizza in pizzas"
      :key="pizza.id"
      :pizza="pizza"
    />

  </div>

</template>

<script>

import PizzaItem from '../partials/PizzaItem.vue';

export default {
  name: 'PizzaListComp',
  components: {
      PizzaItem,
  },

  data(){
      return{
        apiUrl: '/api/pizzas',
        pizzas: [],
      }
    },
    mounted() {
      this.getApi();
    },

    methods: {
        getApi(){
          axios.get(this.apiUrl)
          .then(res=>{
            this.pizzas = res.data;
            // console.log(this.pizzas);         
          })
        }
    },
}
</script>

<style>

</style>
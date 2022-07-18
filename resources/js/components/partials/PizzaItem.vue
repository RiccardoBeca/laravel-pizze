<template>
  <div>

    <h2>{{ pizza.nome }}</h2>

  </div>
</template>

<script>
export default {

  name: 'PizzaItem',
  props: {
    pizza: Object,
  }

}
</script>

<style lang="scss" scoped>

</style>
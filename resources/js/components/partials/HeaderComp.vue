<template>
  <div>

    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'PizzaList'}">Lista Pizze</router-link>

    

  </div>
</template>

<script>
export default {
    name: 'HeaderComp',
}
</script>

<style lang="scss" scoped>

</style>
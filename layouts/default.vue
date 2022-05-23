<template>
  <div class="overflow-x-hidden bg-gray-100 container mx-auto">
    <nuxt/> 
  </div>
</template>

<script>
import Header from "@/components/Header";
import Todo from "../pages/Todo";

export default {
  components: {
    Todo
  }
}
</script>

<style scoped>

</style>

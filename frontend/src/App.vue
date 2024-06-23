<template>
  <NavBar />
  <RouterView />
  <TheFooter />
</template>

<script>
// reactivity:dinamik tepkiler
import TheFooter from "@/components/TheFooter.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    TheFooter
  },
};
</script>

<style>

</style>

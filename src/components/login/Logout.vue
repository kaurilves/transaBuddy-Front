<template>

</template>

<script>

export default {
  name: "Logout",
  mounted() {
    sessionStorage.clear()
    localStorage.clear()
    this.$router.push( {name: '/'})
  }
}
</script>


<style scoped>

</style>
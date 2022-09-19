<template>
  <div v-if="alertWarning.length > 0" class="alert alert-warning" role="alert">
    {{alertWarning}}
  </div>
</template>

<script>
export default {
  name: "AlertWarning",
  props: {
    alertWarning: ''
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <Search orders/>
    <button type="button" v-on:click="backToMainView">Back</button>
  </div>
</template>

<script>
export default {
  name: "SenderSearchOrdersView",
  components: {},
  methods: {
    backToMainView() {

      const roleSelected = sessionStorage.getItem('roleSelected')
      if (roleSelected == 'sender') {
        this.$router.push({name: 'senderRoute'});
      } else if (roleSelected == 'courier') {
        this.$router.push({name: 'courierRoute'});
      } else {
        this.$router.push({name: 'adminRoute'});
      }
    }
  }
}
</script>

<style scoped>

</style>
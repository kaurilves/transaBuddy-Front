<template>
  <div>
    <H2>Add new order</H2>
    <div>
      <NewOrder/>

    </div>
    <button type="button" v-on:click="backToMainView">Back</button>

  </div>

</template>

<script>
import NewOrder from "@/components/order/NewOrder";
export default {
  name: "NewOrderView",

  components: {NewOrder},
  data: function () {
    return{

    }
  },
  methods:{
    backToMainView(){
      const roleSelected = sessionStorage.getItem('roleSelected')
      if (roleSelected == 'sender') {
        this.$router.push({name: 'senderRoute'});
      } else if (roleSelected == 'courier') {
        this.$router.push({name: 'senderRoute'});
      } else {
        this.$router.push({name: 'senderRoute'});
      }
    }
  }
}
</script>

<style scoped>

</style>
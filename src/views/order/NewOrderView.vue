<template>
  <div>
    <H2>Add new order</H2>
    <div >
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
      } else if (roleSelected == 'admin') {
        this.$router.push({name: 'adminRoute'});
      } else {
        this.$router.push({name: 'courierRoute'});
      }
    }
  }
}
</script>

<style scoped>

</style>
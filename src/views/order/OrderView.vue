<template>
  <div>
    <button type="button" v-on:click="backToMainView">Back</button>
    <div>
      <OrderInfo/>
    </div>

    <div>

    </div>
  </div>
</template>

<script>
import OrderInfo from "@/components/order/OrderInfo";
export default {
  name: "OrderView",
  components: {OrderInfo},
  methods: {
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
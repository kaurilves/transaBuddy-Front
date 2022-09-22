<template>
  <div>
    <H2>Modify Order</H2>
    <div>
      <ModifyOrder/>

    </div>
    <button type="button" v-on:click="backToMainView">Back</button>

  </div>

</template>

<script>
import ModifyOrder from "@/components/order/ModifyOrder";
export default {
  name: "ModifyOrderView",

  components: {ModifyOrder},
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